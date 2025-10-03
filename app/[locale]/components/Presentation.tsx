import Image from "next/image";
import React from "react";
import chris from "../../../public/Christiant Kagheni.png";
import { MdEngineering } from "react-icons/md";
import { FaCircleRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { SiThunderstore } from "react-icons/si";

const Presentation = () => {
  const t = useTranslations("HomeComponents.presentation");
  return (
    <section className="w-full lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-10 py-20">
      {/* Left Block */}
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <SiThunderstore className="text-[6rem] md:text-[10rem] text-red-700 drop-shadow-lg" />
        <p className="text-3xl md:text-4xl font-extrabold tracking-wide">
          ELECTRICA
        </p>
        <span className="text-lg font-light text-gray-600">{t("title3")}</span>
      </div>

      {/* Right Block */}
      <div className="flex flex-col gap-6">
        {/* Section Title */}
        <h2 className="text-red-700 text-xl md:text-2xl flex items-center gap-2 font-semibold">
          <MdEngineering className="text-2xl" />
          {t("title")}
        </h2>

        {/* Headline */}
        <p className="text-3xl md:text-5xl font-bold leading-snug">
          {t("title1")}
        </p>

        {/* Sub-headline */}
        <p className="text-red-700 text-xl md:text-2xl font-medium">
          {t("title2")}
        </p>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg font-light leading-relaxed">
          {t("description")}
        </p>

        {/* CEO + Values */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* CEO Card */}
          <div className="flex gap-4 items-center">
            <Image
              className="rounded-full w-[60px] h-[60px] object-cover shadow-md"
              src={chris}
              alt="CEO PHOTO"
            />
            <div>
              <a
                href="https://kaghenimbale.vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-900 hover:text-red-700 transition-colors"
              >
                KAGHENI Chris
              </a>
              <br />
              <span className="font-light italic text-gray-600">
                CEO, Electrica
              </span>
            </div>
          </div>

          {/* Values List */}
          <ul className="space-y-2">
            <li className="font-light flex gap-2 items-center text-gray-700">
              <FaCircleRight className="text-red-600" />
              {t("values.first")}
            </li>
            <li className="font-light flex gap-2 items-center text-gray-700">
              <FaCircleRight className="text-red-600" />
              {t("values.second")}
            </li>
            <li className="font-light flex gap-2 items-center text-gray-700">
              <FaCircleRight className="text-red-600" />
              {t("values.third")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
