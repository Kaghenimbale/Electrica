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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
  };

  return (
    <div className="w-full h-fit lg:w-[25rem] bg-red-700 flex justify-center p-8">
      <form
        className="flex flex-col items-center gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          {t("message")}
        </h2>

        {/* Grid inputs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <input
            type="text"
            name="Firstname"
            value={formData.Firstname}
            placeholder={t("form.Name")}
            required
            onChange={handleChange}
            className="w-full h-12 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            name="Lastname"
            value={formData.Lastname}
            placeholder={t("form.Firstname")}
            required
            onChange={handleChange}
            className="w-full h-12 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            placeholder={t("form.Email")}
            required
            onChange={handleChange}
            className="w-full h-12 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="tel"
            name="Phone"
            value={formData.Phone}
            placeholder={t("form.Phone")}
            required
            onChange={handleChange}
            className="w-full h-12 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            name="Company"
            value={formData.Company}
            placeholder={t("form.Company")}
            required
            onChange={handleChange}
            className="w-full h-12 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            name="Address"
            value={formData.Address}
            placeholder={t("form.Address")}
            required
            onChange={handleChange}
            className="w-full h-12 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Range slider */}
        <input
          type="range"
          name="Range"
          value={formData.Range}
          required
          onChange={handleChange}
          className="w-full h-2 mt-4 rounded-full accent-red-600"
        />

        {/* Message */}
        <textarea
          name="Message"
          value={formData.Message}
          placeholder="Message"
          required
          onChange={handleChange}
          className="w-full h-32 lg:h-24 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        ></textarea>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-12 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
        >
          {t("form.Submit")}
        </button>
      </form>
    </div>
  );
};

export default Form;
