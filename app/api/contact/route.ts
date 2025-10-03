import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Extract fields
    const {
      Firstname,
      Lastname,
      Email,
      Phone,
      Company,
      Address,
      Range,
      Message,
    } = body;

    // ----------------------
    // 1. Email to Admin
    // ----------------------
    await resend.emails.send({
      from: "Electrica Form <onboarding@resend.dev>", // replace later with your verified domain
      to: "kaghenimbale@gmail.com", // admin email
      subject: "📩 New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; padding:20px; color:#333;">
          <h2 style="color:#1a73e8;">New Contact Form Submission</h2>
          <p><strong>Firstname:</strong> ${Firstname}</p>
          <p><strong>Lastname:</strong> ${Lastname}</p>
          <p><strong>Email:</strong> ${Email}</p>
          <p><strong>Phone:</strong> ${Phone}</p>
          <p><strong>Company:</strong> ${Company}</p>
          <p><strong>Address:</strong> ${Address}</p>
          <p><strong>Range:</strong> ${Range}</p>
          <p><strong>Message:</strong><br/> ${Message}</p>
          <hr/>
          <p style="font-size:12px; color:#777;">This email was generated automatically by your website form.</p>
        </div>
      `,
    });

    // ----------------------
    // 2. Confirmation Email to Customer
    // ----------------------
    await resend.emails.send({
      from: "Electrica <onboarding@resend.dev>", // replace later with your verified domain
      to: Email, // customer email
      subject: "✅ We Received Your Message",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; padding:20px; color:#333;">
          <h2 style="color:#1a73e8;">Hello ${Firstname},</h2>
          <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
          
          <h3 style="margin-top:20px;">Your Submission Details:</h3>
          <p><strong>Name:</strong> ${Firstname} ${Lastname}</p>
          <p><strong>Email:</strong> ${Email}</p>
          <p><strong>Phone:</strong> ${Phone}</p>
          <p><strong>Company:</strong> ${Company}</p>
          <p><strong>Message:</strong><br/> ${Message}</p>

          <hr/>
          <p style="font-size:13px; color:#777;">
            📞 If you need immediate assistance, please call us directly.<br/>
            Thank you for choosing <strong>Electrica</strong>.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
