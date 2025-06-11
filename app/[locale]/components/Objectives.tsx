"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GrUserWorker } from "react-icons/gr";
import { MdEngineering } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import industry from "../../../public/industry-with-electrical-engineer-working-heights-generative-ai_220873-23877.png";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Objectives = () => {
  const t = useTranslations("HomeComponents.Objectives");
  const [status, setStatus] = useState("about");
  const [description, setDescription] = useState(
    "With over four decades of experience,we deliver tailored logistics solutions to large-scale enterprises across the country. Our expertise ensure reliable, efficient service for specific market needs."
  );
  const datas = t.raw("data") as {
    title: string;
    description: string;
  }[];
  const handleClick = (title: string, description: string) => {
    setStatus(title);
    setDescription(description);
  };
  return (
    <div className="w-full lg:w-[70vw] mx-auto p-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          {t("title")}
        </h2>
        <p className="text-3xl font-bold md:w-[25rem]">{t("description")}</p>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="border-gray-300 border-2 w-fit p-4">
            <span className="text-8xl font-extrabold">04</span>
            <p className="text-wrap w-[4rem]">{t("experience")}</p>
          </div>
          <div className="w-[18rem] flex flex-col gap-4">
            <div className="flex gap-4">
              <RiSecurePaymentFill className="text-red-600 text-5xl" />
              <div className="flex flex-col gap-3">
                <p className="font-bold">{t("payment.title")}</p>
                <span>{t("payment.description")}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <GrUserWorker className="text-red-600 text-5xl" />
              <div className="flex flex-col gap-3">
                <p className="font-bold">{t("workforce.title")}</p>
                <span>{t("workforce.description")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <Image
            src={industry}
            className="h-[8rem] object-cover"
            alt="imageIndustry"
          />
          <div className="flex gap-4 relative -top-10">
            {datas.map((data, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className={`${
                    status === data.title
                      ? "bg-red-700 text-white p-2 w-[10rem]"
                      : "bg-white text-black p-2 w-[10rem]"
                  }`}
                  onClick={() => handleClick(data.title, data.description)}
                >
                  {data.title}
                </button>
              );
            })}
          </div>
        </div>
        <p className="lg:h-[5rem]">{description}</p>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <FaCheckCircle className="text-red-700" />
            <p>{t("solutions.first")}</p>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-red-700" />
            <p>{t("solutions.second")}</p>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-red-700" />
            <p>{t("solutions.third")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
