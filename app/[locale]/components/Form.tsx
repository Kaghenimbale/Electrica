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

  const [loading, setLoading] = useState(false); // NEW
  const [success, setSuccess] = useState<string | null>(null); // NEW

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      if (result.success) {
        setSuccess("✅ Your message has been sent!");
      } else {
        setSuccess("❌ Failed to send message.");
      }
    } catch (error) {
      setSuccess("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }

    // reset form
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

    setTimeout(() => {
      setSuccess(null);
    }, 3000);
  };

  return (
    <div className="w-full h-fit lg:w-[25rem] bg-red-700 flex justify-center py-10">
      <form className="flex flex-col items-end gap-4" onSubmit={handleSubmit}>
        <h2 className="flex justify-center w-full font-bold text-2xl text-white">
          {t("message")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="Firstname"
            value={formData.Firstname}
            placeholder={t("form.Name")}
            required
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Lastname"
            value={formData.Lastname}
            placeholder={t("form.Firstname")}
            required
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            placeholder={t("form.Email")}
            required
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="Phone"
            value={formData.Phone}
            placeholder={t("form.Phone")}
            required
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Company"
            value={formData.Company}
            placeholder={t("form.Company")}
            required
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Address"
            value={formData.Address}
            placeholder={t("form.Address")}
            required
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
        </div>

        <input
          type="range"
          name="Range"
          required
          value={formData.Range}
          className="w-[20rem] lg:w-[20rem] h-[40px] p-2"
          onChange={handleChange}
        />

        <textarea
          name="Message"
          value={formData.Message}
          placeholder="Message"
          required
          className="w-[20rem] lg:w-[21rem] h-[150px] lg:h-[80px] p-2 border-2"
          onChange={handleChange}
        ></textarea>

        {/* Button with loading state */}
        <button
          className={`w-full h-[40px] bg-black text-white transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? "⏳ Sending..." : t("form.Submit")}
        </button>

        {/* Success / Error message */}
        {success && (
          <p className="w-full text-center text-white font-semibold mt-2 animate-fade-in">
            {success}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
