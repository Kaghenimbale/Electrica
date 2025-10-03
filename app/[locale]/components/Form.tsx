"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Form = () => {
  const t = useTranslations("HomeComponents.contact");
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Phone: "",
    Company: "",
    Address: "",
    Range: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setSuccess(
        result.success
          ? "✅ Your message has been sent!"
          : "❌ Failed to send message."
      );
    } catch (error) {
      setSuccess("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
      setFormData({
        Firstname: "",
        Lastname: "",
        Email: "",
        Phone: "",
        Company: "",
        Address: "",
        Range: "",
        Message: "",
      });
      setTimeout(() => setSuccess(null), 3000);
    }
  };

  return (
    <div className="w-full lg:w-[28rem] bg-red-700 rounded-xl p-8 shadow-lg mx-auto">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <h2 className="text-center text-white text-2xl font-bold mb-4">
          {t("message")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="Firstname"
            value={formData.Firstname}
            placeholder={t("form.Name")}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Lastname"
            value={formData.Lastname}
            placeholder={t("form.Firstname")}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            onChange={handleChange}
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            placeholder={t("form.Email")}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="Phone"
            value={formData.Phone}
            placeholder={t("form.Phone")}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Company"
            value={formData.Company}
            placeholder={t("form.Company")}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Address"
            value={formData.Address}
            placeholder={t("form.Address")}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            onChange={handleChange}
          />
        </div>

        <input
          type="range"
          name="Range"
          value={formData.Range}
          required
          onChange={handleChange}
          className="w-full h-3 accent-red-600 rounded-lg"
        />

        <textarea
          name="Message"
          value={formData.Message}
          placeholder="Message"
          required
          onChange={handleChange}
          className="w-full h-32 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-md bg-black text-white font-semibold transition hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {loading ? "⏳ Sending..." : t("form.Submit")}
        </button>

        {success && (
          <p className="text-center text-white font-medium mt-2 animate-fade-in">
            {success}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
