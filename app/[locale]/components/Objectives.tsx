"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GrUserWorker } from "react-icons/gr";
import { MdEngineering } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import industry from "../../../public/industry-with-electrical-engineer-working-heights-generative-ai_220873-23877.png";

const Objectives = () => {
  const t = useTranslations("HomeComponents.Objectives");
  const datas = t.raw("data") as { title: string; description: string }[];

  // Default to first button being active
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full lg:w-[70vw] mx-auto p-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-8">
        <h2 className="text-red-700 text-2xl flex gap-2 items-center">
          <MdEngineering className="text-3xl" />
          {t("title")}
        </h2>

        <p className="text-3xl font-bold md:w-[25rem] leading-snug">
          {t("description")}
        </p>

        {/* Experience + Features */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="border-gray-300 border-2 w-fit p-6 rounded-2xl shadow-sm">
            <span className="text-8xl font-extrabold text-red-700">+4</span>
            <p className="mt-2 text-gray-600">{t("experience")}</p>
          </div>

          <div className="w-[18rem] flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <RiSecurePaymentFill className="text-red-600 text-5xl" />
              <div>
                <p className="font-bold text-lg">{t("payment.title")}</p>
                <p className="text-gray-600">{t("payment.description")}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <GrUserWorker className="text-red-600 text-5xl" />
              <div>
                <p className="font-bold text-lg">{t("workforce.title")}</p>
                <p className="text-gray-600">{t("workforce.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col gap-8">
        {/* Image + Buttons */}
        <div className="flex flex-col relative">
          <Image
            src={industry}
            className="h-[10rem] object-cover shadow-md"
            alt="Industry workers"
          />

          <div className="flex gap-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            {datas.map((data, index) => (
              <button
                key={index}
                type="button"
                className={`transition-all duration-300 font-medium shadow-md px-4 py-2 w-[10rem] ${
                  activeIndex === index
                    ? "bg-red-700 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => handleClick(index)}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>

        {/* DESCRIPTION CARD with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 shadow-md p-6 text-gray-700 leading-relaxed"
          >
            {datas[activeIndex].description}
          </motion.div>
        </AnimatePresence>

        {/* Solutions */}
        <div className="flex flex-col gap-4">
          {[
            t("solutions.first"),
            t("solutions.second"),
            t("solutions.third"),
          ].map((solution, index) => (
            <div key={index} className="flex gap-2 items-center">
              <FaCheckCircle className="text-red-700 text-lg" />
              <p className="text-gray-700">{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Objectives;
