"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

type ContactFormData = {
  Firstname: string;
  Lastname: string;
  Email: string;
  Phone: string;
  Company: string;
  Address: string;
  Range: string;
  Message: string;
};

const emptyForm = (): ContactFormData => ({
  Firstname: "",
  Lastname: "",
  Email: "",
  Phone: "",
  Company: "",
  Address: "",
  Range: "50",
  Message: "",
});

const Form = () => {
  const t = useTranslations("HomeComponents.contact");
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const orderMessage = searchParams.get("message")?.trim().slice(0, 5000);
    const product = searchParams.get("product")?.trim().slice(0, 150);

    if (orderMessage) {
      setFormData((current) => ({ ...current, Message: orderMessage }));
    } else if (product) {
      setFormData((current) => ({
        ...current,
        Message: t("form.productBookingMessage", { product }),
      }));
    }
  }, [t]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result: unknown = await res.json();

      if (
        !res.ok ||
        typeof result !== "object" ||
        result === null ||
        !("success" in result) ||
        result.success !== true
      ) {
        setStatus("error");
        return;
      }

      setFormData(emptyForm());
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-slate-950">
          {t("message")}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {(
            [
              ["Firstname", "Name", "text"],
              ["Lastname", "Lastname", "text"],
              ["Email", "Email", "email"],
              ["Phone", "Phone", "tel"],
              ["Company", "Company", "text"],
              ["Address", "Address", "text"],
            ] as const
          ).map(([name, label, type]) => (
            <label key={name} className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              {t(`form.${label}`)}
              <input
                type={type}
                name={name}
                value={formData[name]}
                required
                autoComplete={
                  name === "Firstname"
                    ? "given-name"
                    : name === "Lastname"
                      ? "family-name"
                      : name === "Email"
                        ? "email"
                        : name === "Phone"
                          ? "tel"
                          : name === "Company"
                            ? "organization"
                            : "street-address"
                }
                maxLength={
                  name === "Email"
                    ? 254
                    : name === "Address"
                      ? 300
                      : name === "Phone"
                        ? 30
                        : name === "Firstname" || name === "Lastname"
                          ? 100
                          : 200
                }
                className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-900 placeholder:text-slate-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                onChange={handleChange}
              />
            </label>
          ))}
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          <span className="flex items-center justify-between">
            {t("form.Range")}
            <output htmlFor="project-range" className="text-slate-500">
              {formData.Range}
            </output>
          </span>
          <input
            id="project-range"
            type="range"
            name="Range"
            min="0"
            max="100"
            value={formData.Range}
            onChange={handleChange}
            className="h-3 w-full cursor-pointer rounded-lg accent-red-600"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          {t("form.Message")}
          <textarea
            name="Message"
            value={formData.Message}
            required
            maxLength={5000}
            rows={5}
            onChange={handleChange}
            className="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 p-3 text-base text-slate-900 placeholder:text-slate-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-red-700 p-3 font-semibold text-white transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? t("form.Sending") : t("form.Submit")}
        </button>

        {status && (
          <p
            className={`text-center font-medium ${
              status === "success" ? "text-emerald-700" : "text-red-700"
            }`}
            role={status === "error" ? "alert" : "status"}
          >
            {t(`form.${status === "success" ? "Success" : "Error"}`)}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
