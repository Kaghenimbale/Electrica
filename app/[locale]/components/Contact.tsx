"use client";

import React, { useState } from "react";
import { MdEngineering } from "react-icons/md";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import Form from "./Form";
import { useTranslations } from "next-intl";

const Contact = () => {
  const [isOpen, setOpen] = useState<number[]>([]);
  const t = useTranslations("HomeComponents.contact");
  const capabilities = t.raw("capabilities") as {
    id: number;
    title: string;
    description: string;
  }[];

  const handleCollapse = (id: number) => {
    if (isOpen.includes(id)) {
      setOpen(isOpen.filter((element) => element !== id));
    } else {
      setOpen([...isOpen, id]);
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="w-full lg:w-[70vw] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Form />

          {/* Capabilities Accordion */}
          <div className="flex flex-col gap-6">
            <h2 className="text-red-600 text-2xl flex items-center gap-2 font-semibold">
              <MdEngineering className="text-3xl" />
              {t("title")}
            </h2>
            <p className="text-3xl lg:text-4xl font-bold lg:w-[40rem] leading-snug">
              {t("service")}
            </p>
            <span className="text-gray-700">{t("description")}</span>

            <div className="flex flex-col gap-3 mt-6">
              {capabilities.map((capabilitie) => (
                <div key={capabilitie.id} className="w-full">
                  <button
                    onClick={() => handleCollapse(capabilitie.id)}
                    className="flex w-full justify-between items-center font-semibold bg-black text-white p-3 rounded-lg shadow-md transition-colors"
                  >
                    {capabilitie.title}
                    {isOpen.includes(capabilitie.id) ? (
                      <FaArrowDown className="text-xl" />
                    ) : (
                      <FaArrowRight className="text-xl" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen.includes(capabilitie.id) ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 text-gray-700 bg-white shadow-inner rounded-b-lg">
                      {capabilitie.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
