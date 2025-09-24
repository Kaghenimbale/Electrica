import Image from "next/image";
import React from "react";
import chris from "../../../public/Christiant Kagheni.png";
import { MdEngineering } from "react-icons/md";
import { FaCircleRight, FaLaptopCode } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Presentation = () => {
  const t = useTranslations("HomeComponents.presentation");

  return (
    <section className="w-full lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 py-24 items-center">
      {/* LEFT ICON */}
      <div className="flex items-center justify-center">
        <div className="bg-red-50 p-10 rounded-2xl shadow-md">
          <FaLaptopCode className="text-red-700 text-[10rem] lg:text-[15rem]" />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-red-700 text-xl lg:text-2xl flex items-center gap-2 font-semibold">
          <MdEngineering className="text-2xl" />
          {t("title")}
        </h2>

        <p className="text-3xl lg:text-5xl font-extrabold leading-snug">
          {t("title1")}
        </p>
        <p className="text-red-700 text-2xl font-semibold">{t("title2")}</p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{t("description")}</p>

        {/* CEO + Values */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* CEO Card */}
          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <Image
              className="rounded-full w-[70px] h-[70px] object-fill"
              src={chris}
              alt="CEO PHOTO"
            />
            <div>
              <a
                href="https://kaghenimbale.vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg hover:text-red-700 transition-colors"
              >
                KAGHENI Chris
              </a>
              <p className="text-gray-500 italic text-sm">CEO, Electrica</p>
            </div>
          </div>

          {/* Values List */}
          <ul className="flex flex-col gap-3">
            <li className="text-gray-700 flex gap-2 items-center">
              <FaCircleRight className="text-red-700" />
              <span>{t("values.first")}</span>
            </li>
            <li className="text-gray-700 flex gap-2 items-center">
              <FaCircleRight className="text-red-700" />
              <span>{t("values.second")}</span>
            </li>
            <li className="text-gray-700 flex gap-2 items-center">
              <FaCircleRight className="text-red-700" />
              <span>{t("values.third")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
