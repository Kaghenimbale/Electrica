import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactSubmission = {
  Firstname: string;
  Lastname: string;
  Email: string;
  Phone: string;
  Company: string;
  Address: string;
  Range: string;
  Message: string;
};

const maxLengths: Record<keyof ContactSubmission, number> = {
  Firstname: 100,
  Lastname: 100,
  Email: 254,
  Phone: 30,
  Company: 200,
  Address: 300,
  Range: 3,
  Message: 5000,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseSubmission(value: unknown): ContactSubmission | null {
  if (!isRecord(value)) return null;

  const readField = (field: keyof ContactSubmission): string | null => {
    const rawValue = value[field];
    if (typeof rawValue !== "string") return null;

    const fieldValue = rawValue.trim();
    if (!fieldValue || fieldValue.length > maxLengths[field]) return null;
    return fieldValue;
  };

  const Firstname = readField("Firstname");
  const Lastname = readField("Lastname");
  const Email = readField("Email");
  const Phone = readField("Phone");
  const Company = readField("Company");
  const Address = readField("Address");
  const Range = readField("Range");
  const Message = readField("Message");

  if (
    Firstname === null ||
    Lastname === null ||
    Email === null ||
    Phone === null ||
    Company === null ||
    Address === null ||
    Range === null ||
    Message === null
  ) {
    return null;
  }

  const submission: ContactSubmission = {
    Firstname,
    Lastname,
    Email,
    Phone,
    Company,
    Address,
    Range,
    Message,
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.Email)) return null;
  if (!/^[+()\d\s.-]{7,30}$/.test(submission.Phone)) return null;

  const range = Number(submission.Range);
  if (!Number.isInteger(range) || range < 0 || range > 100) return null;

  return submission;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function emailDetails(submission: ContactSubmission): string {
  return `
    <p><strong>Name:</strong> ${escapeHtml(submission.Firstname)} ${escapeHtml(submission.Lastname)}</p>
    <p><strong>Email:</strong> ${escapeHtml(submission.Email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(submission.Phone)}</p>
    <p><strong>Company:</strong> ${escapeHtml(submission.Company)}</p>
    <p><strong>Address:</strong> ${escapeHtml(submission.Address)}</p>
    <p><strong>Project range:</strong> ${escapeHtml(submission.Range)}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(submission.Message).replace(/\n/g, "<br/>")}</p>
  `;
}

export async function POST(req: Request) {
  const contentLength = req.headers.get("content-length");
  if (contentLength && Number(contentLength) > 10_000) {
    return NextResponse.json(
      { success: false, error: "Request is too large." },
      { status: 413 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON request." },
      { status: 400 }
    );
  }

  const submission = parseSubmission(body);
  if (!submission) {
    return NextResponse.json(
      { success: false, error: "Please check the submitted form fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form is unavailable: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { success: false, error: "Email service is not configured." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL ?? "Electrica <onboarding@resend.dev>";
  const adminEmail = process.env.RESEND_TO_EMAIL ?? "kaghenimbale@gmail.com";
  const details = emailDetails(submission);

  try {
    const adminResult = await resend.emails.send({
      from,
      to: adminEmail,
      replyTo: submission.Email,
      subject: "New contact form submission",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; padding:20px; color:#333;">
          <h2 style="color:#1a73e8;">New Contact Form Submission</h2>
          ${details}
        </div>
      `,
    });

    if (adminResult.error) {
      console.error("Failed to deliver the contact form notification.", adminResult.error);
      return NextResponse.json(
        { success: false, error: "Unable to deliver your message." },
        { status: 502 }
      );
    }

    const confirmationResult = await resend.emails.send({
      from,
      to: submission.Email,
      subject: "We received your message",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; padding:20px; color:#333;">
          <h2 style="color:#1a73e8;">Hello ${escapeHtml(submission.Firstname)},</h2>
          <p>Thank you for reaching out to Electrica. We have received your message and will get back to you shortly.</p>
          <h3 style="margin-top:20px;">Your submission details</h3>
          ${details}
        </div>
      `,
    });

    if (confirmationResult.error) {
      console.error("Failed to deliver the contact form confirmation.", confirmationResult.error);
      return NextResponse.json(
        { success: false, error: "Unable to deliver your confirmation." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email delivery failed.", error);
    return NextResponse.json(
      { success: false, error: "Unable to deliver your message." },
      { status: 502 }
    );
  }
}
