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
    <div className="w-full lg:w-[70vw] mx-auto grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 px-10 py-32">
      <div className="w-72 h-72 my-auto flex gap-3 items-center justify-center flex-col">
        <SiThunderstore className="text-[10rem] text-red-700" />
        <p className="text-4xl font-bold">ELECTRICA</p>
        <span className="font-thin">{t("title3")}</span>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          {t("title")}
        </h2>
        <p className="text-4xl lg:text-5xl font-bold">{t("title1")}</p>
        <p className="text-red-700 text-2xl">{t("title2")}</p>
        <span className="font-thin">{t("description")}</span>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex gap-4 items-center">
            <Image
              className="rounded-full w-[60px] h-[70px]"
              src={chris}
              alt="CEO PHOTO"
            />
            <div>
              <a
                href="kaghenimbale.vercel.com"
                target="__blank"
                className="font-bold"
              >
                KAGHENI Chris
              </a>
              <br />
              <span className="font-thin italic">CEO, Electrica</span>
            </div>
          </div>
          <div>
            <ul>
              <li className="font-thin flex gap-1 items-center">
                <FaCircleRight />
                {t("values.first")}
              </li>
              <li className="font-thin flex gap-1 items-center">
                <FaCircleRight />
                {t("values.second")}
              </li>
              <li className="font-thin flex gap-1 items-center">
                <FaCircleRight />
                {t("values.third")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
