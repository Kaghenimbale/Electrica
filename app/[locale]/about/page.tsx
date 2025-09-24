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
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
    console.log("clicked id", id);
    setExpandedId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="mt-[5rem] px-10 lg:w-[70vw] mx-auto flex flex-col gap-10 pb-10">
      <div className="bg-gray-200 py-8 flex flex-col items-center gap-10">
        <h2 className="text-4xl font-bold text-center">{t("title")}</h2>
        <p className="text-center text-gray-500 w-[60%]">{t("description")}</p>
      </div>

      <div className="py-10 grid grid-cols-1 lg:grid-cols-2">
        <Image className="w-[25rem]" src={coffret} alt="coffret" />
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold flex">{t("title1")}</h2>

          <p className="text-gray-500">{t("description1")}</p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>{t("service1")}</p>
            </li>
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>{t("service2")}</p>
            </li>
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>{t("service3")}</p>
            </li>
            <li className="flex gap-4 items-center">
              <FaCheckCircle className="text-red-700" />
              <p>{t("service4")}</p>
            </li>
          </ul>

          <button className="bg-red-700 text-white p-3 w-fit rounded-md transition-all delay-100 hover:bg-white hover:text-red-700 hover:border hover:border-red-700">
            {t("btntext")}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:h-[30rem] h-auto justify-center">
        <h2 className="text-4xl font-bold flex gap-2 justify-center">
          {t("service")}
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="flex flex-col justify-between gap-4">
            {datas[0].map((data) => {
              const isExpanded = expandedId === data.id;
              const shortText = data.description.slice(0, 60);
              return (
                <div key={data.id} className="flex gap-4">
                  <div>
                    <data.Icon className="text-white text-7xl p-4 font-thin bg-red-700" />
                  </div>
                  <div className="flex flex-col w-[14rem]">
                    <h2 className="font-bold">{data.title}</h2>
                    <p className="text-gray-500 lg:w-[15rem]">
                      {isExpanded ? data.description : `${shortText}... `}
                      <button
                        onClick={() => handleDisplayMore(data.id)}
                        className="text-blue-500"
                      >
                        {isExpanded ? "less" : "more"}
                      </button>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <Image src={imageLight} alt="image Light" className="w-[25rem]" />
          </div>

          <div className="flex flex-col justify-between gap-4">
            {datas[1].map((data) => {
              const isExpanded = expandedId === data.id;
              const shortText = data.description.slice(0, 60);
              return (
                <div key={data.id} className="flex gap-4">
                  <div>
                    <data.Icon className="text-white text-7xl p-4 font-thin bg-red-700" />
                  </div>
                  <div className="flex flex-col w-[14rem]">
                    <h2 className="font-bold">{data.title}</h2>
                    <p className="text-gray-500 lg:w-[15rem]">
                      {isExpanded ? data.description : `${shortText}... `}
                      <button
                        onClick={() => handleDisplayMore(data.id)}
                        className="text-blue-500"
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
    </div>
  );
};

export default Page;
