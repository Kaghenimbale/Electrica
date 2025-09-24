"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle, FaRegLightbulb } from "react-icons/fa";
import coffret from "../../../public/coffret.jpg";
import imageLight from "../../../public/Gen-AI-Enterprise-Futurist-Speaker.jpg";
import { FaComputer } from "react-icons/fa6";
import { TbNetwork, TbShoppingCartBolt } from "react-icons/tb";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("AboutComponent");
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const iconMap: Record<number, React.ElementType> = {
    1: FaComputer,
    2: TbNetwork,
    3: FaRegLightbulb,
    4: TbShoppingCartBolt,
  };

  const rawServices = t.raw("services") as {
    id: number;
    title: string;
    description: string;
  }[][];

  const datas = rawServices.map((group) =>
    group.map((data) => ({
      ...data,
      Icon: iconMap[data.id],
    }))
  );

  const handleDisplayMore = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="mt-20 px-6 lg:px-10 lg:w-[70vw] mx-auto flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <div className="bg-gray-100 py-12 flex flex-col items-center gap-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          {t("title")}
        </h2>
        <p className="text-center text-gray-600 lg:w-2/3">{t("description")}</p>
      </div>

      {/* Intro + Services List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Image
          src={coffret}
          alt="coffret"
          className="rounded-lg shadow-lg w-full lg:w-[28rem]"
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-900">{t("title1")}</h2>
          <p className="text-gray-600">{t("description1")}</p>

          <ul className="flex flex-col gap-3">
            {[t("service1"), t("service2"), t("service3"), t("service4")].map(
              (service, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-red-600 text-xl flex-shrink-0" />
                  <span>{service}</span>
                </li>
              )
            )}
          </ul>

          <button className="self-start bg-red-700 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-white hover:text-red-700 hover:border hover:border-red-700">
            {t("btntext")}
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          {t("service")}
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6 flex-1">
            {datas[0].map((data) => {
              const isExpanded = expandedIds.includes(data.id);
              const shortText = data.description.slice(0, 80);
              return (
                <div
                  key={data.id}
                  className="flex gap-4 items-start bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <data.Icon className="text-red-700 text-5xl p-3 bg-red-100 rounded-full flex-shrink-0" />
                  <div className="flex flex-col w-full">
                    <h3 className="font-bold text-gray-900">{data.title}</h3>
                    <p
                      className={`text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                        isExpanded ? "max-h-96" : "max-h-16"
                      }`}
                    >
                      {isExpanded ? data.description : `${shortText}... `}
                      <button
                        onClick={() => handleDisplayMore(data.id)}
                        className="text-blue-500 ml-1 font-semibold hover:underline"
                      >
                        {isExpanded ? "less" : "more"}
                      </button>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="flex justify-center flex-shrink-0">
            <Image
              src={imageLight}
              alt="light image"
              className="w-full lg:w-[28rem] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 flex-1">
            {datas[1].map((data) => {
              const isExpanded = expandedIds.includes(data.id);
              const shortText = data.description.slice(0, 80);
              return (
                <div
                  key={data.id}
                  className="flex gap-4 items-start bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <data.Icon className="text-red-700 text-5xl p-3 bg-red-100 rounded-full flex-shrink-0" />
                  <div className="flex flex-col w-full">
                    <h3 className="font-bold text-gray-900">{data.title}</h3>
                    <p
                      className={`text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                        isExpanded ? "max-h-96" : "max-h-16"
                      }`}
                    >
                      {isExpanded ? data.description : `${shortText}... `}
                      <button
                        onClick={() => handleDisplayMore(data.id)}
                        className="text-blue-500 ml-1 font-semibold hover:underline"
                      >
                        {isExpanded ? "less" : "more"}
                      </button>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
