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
      const openCopy = isOpen.filter((element) => element !== id);
      setOpen(openCopy);
    } else {
      const openCopy = [...isOpen];
      openCopy.push(id);
      setOpen(openCopy);
    }
  };
  return (
    <div className="bg-gray-200">
      <div className="w-full lg:w-[70vw] mx-auto p-4 lg:p-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <Form />
          <div className="flex flex-col gap-4">
            <h2 className="text-red-700 text-2xl flex gap-1 items-center">
              <MdEngineering />
              {t("title")}
            </h2>
            <p className="text-4xl font-bold lg:w-[40rem]">{t("service")}</p>
            <span>{t("description")}</span>
            <div>
              <div className="w-full lg:w-[35rem] flex flex-col gap-3 h-auto lg:h-[22rem]">
                {capabilities.map((capabilitie) => {
                  return (
                    <div key={capabilitie.id} className="">
                      <button
                        onClick={() => handleCollapse(capabilitie.id)}
                        className="flex w-[100%] gap-4 items-center justify-between font-semibold bg-black text-white p-3"
                      >
                        {capabilitie.title}
                        {isOpen.includes(capabilitie.id) ? (
                          <FaArrowDown />
                        ) : (
                          <FaArrowRight />
                        )}
                      </button>
                      <div
                        className={`${
                          isOpen.includes(capabilitie.id)
                            ? "block"
                            : "bg-white hidden"
                        }`}
                      >
                        <p className="p-3 text-gray-600 bg-white shadow-inner shadow-slate-300">
                          {capabilitie.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
