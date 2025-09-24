"use client";

import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosCall, IoMdCloseCircle } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import Form from "../components/Form";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("ContactComponent");
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "backdrop") {
      setOpen(false);
    }
  };

  return (
    <section className="mt-[5rem] w-[90%] lg:w-[70vw] mx-auto py-12 flex flex-col gap-16">
      {/* Contact Info & Button */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Info */}
        <div className="flex flex-col gap-12">
          <h2 className="text-4xl font-bold text-gray-900">{t("title")}</h2>
          <div className="flex flex-col gap-6 lg:w-[32rem]">
            <p className="text-gray-600">{t("description")}</p>
            <p className="text-gray-600">{t("description1")}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-between lg:w-[42rem]">
            {/* Address */}
            <div className="flex flex-col items-start gap-2">
              <FaLocationDot className="text-red-700 text-4xl w-[60px] h-[60px] p-2 rounded-lg border border-gray-300 bg-red-50" />
              <div>
                <p className="font-semibold text-gray-900">{t("Address")}:</p>
                <p className="text-gray-600">
                  Goma, Quartier Himbi <br /> Av du Lac N°59
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-start gap-2">
              <MdEmail className="text-red-700 text-4xl w-[60px] h-[60px] p-2 rounded-lg border border-gray-300 bg-red-50" />
              <div>
                <p className="font-semibold text-gray-900">Email:</p>
                <p className="text-gray-600">kaghenimbale@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-start gap-2">
              <IoIosCall className="text-red-700 text-4xl w-[60px] h-[60px] p-2 rounded-lg border border-gray-300 bg-red-50" />
              <div>
                <p className="font-semibold text-gray-900">{t("Phone")}:</p>
                <p className="text-gray-600">+243977813248</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Button */}
        <div className="flex justify-center lg:justify-end">
          <button
            onClick={handleToggle}
            className="bg-red-700 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-white hover:text-red-700 hover:border hover:border-red-700 transition-all duration-300"
          >
            {t("contactBtn")} <FaAngleRight />
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {isOpen && (
        <div
          id="backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
        >
          <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <Form />
            <button
              onClick={handleToggle}
              className="absolute top-4 right-4 flex items-center justify-center text-red-700 text-4xl hover:text-red-900 transition-colors"
            >
              <IoMdCloseCircle />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
