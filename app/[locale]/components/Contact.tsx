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
      setOpen(isOpen.filter((el) => el !== id));
    } else {
      setOpen([...isOpen, id]);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="w-full lg:w-[70vw] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Form />

          {/* Capabilities / Accordion */}
          <div className="flex flex-col gap-6">
            <h2 className="text-red-700 text-2xl flex items-center gap-2 font-semibold">
              <MdEngineering /> {t("title")}
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900 lg:max-w-xl">
              {t("service")}
            </p>
            <span className="text-gray-600 font-light lg:max-w-lg">
              {t("description")}
            </span>

            <div className="mt-6 flex flex-col gap-3">
              {capabilities.map((cap) => {
                const open = isOpen.includes(cap.id);
                return (
                  <div
                    key={cap.id}
                    className="rounded-lg overflow-hidden shadow-md border border-gray-200"
                  >
                    <button
                      onClick={() => handleCollapse(cap.id)}
                      className={`flex justify-between items-center w-full p-4 text-left font-medium bg-slate-950 text-white hover:bg-slate-800 transition-colors duration-200`}
                    >
                      {cap.title}
                      {open ? <FaArrowDown /> : <FaArrowRight />}
                    </button>
                    <div
                      className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                        open ? "max-h-96" : "max-h-0"
                      } bg-white`}
                    >
                      <p className="p-4 text-gray-700">{cap.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
