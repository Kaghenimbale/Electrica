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
    <div className="w-full h-fit lg:w-[25rem] bg-red-700 flex justify-center py-10">
      <form
        className="flex flex-col items-end gap-4"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
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
            id=""
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Lastname"
            value={formData.Lastname}
            placeholder={t("form.Firstname")}
            required
            id=""
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            placeholder={t("form.Email")}
            required
            id=""
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="tel"
            name={t("form.Name")}
            value={formData.Phone}
            placeholder={t("form.Phone")}
            required
            id=""
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Company"
            value={formData.Company}
            placeholder={t("form.Company")}
            required
            id=""
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Address"
            value={formData.Address}
            placeholder={t("form.Address")}
            required
            id=""
            className="w-[20rem] lg:w-[10rem] h-[50px] p-2"
            onChange={handleChange}
          />
        </div>

        <input
          type="range"
          name="Range"
          required
          value={formData.Range}
          id=""
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
          id=""
        ></textarea>

        <button className="w-full h-[40px] bg-black text-white" type="submit">
          {t("form.Submit")}
        </button>
      </form>
    </div>
  );
};

export default Form;
