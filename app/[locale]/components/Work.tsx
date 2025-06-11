import React from "react";
import { MdElectricMeter, MdEngineering } from "react-icons/md";
import { IoHammerOutline } from "react-icons/io5";
import { GiScrewdriver } from "react-icons/gi";
import { useTranslations } from "next-intl";

const Work = () => {
  const t = useTranslations("HomeComponents.work");
  const datas = t.raw("works") as {
    title: string;
    description: string;
  }[];
  return (
    <div className="bg-slate-950 w-full">
      <div className="w-full lg:w-[70vw] mx-auto flex items-center flex-col gap-4 py-10">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          {t("title")}
        </h2>
        <p className="text-4xl lg:text-5xl font-bold lg:w-[50rem] text-center text-white">
          {t("process")}
        </p>

        <div className="w-[50vw] text-white flex flex-col lg:flex-row justify-between">
          <div className="bg-slate-900 w-[200px] flex flex-col text-center p-4 items-center gap-10 rounded-full">
            <GiScrewdriver className="text-6xl" />
            <div className="flex flex-col gap-4">
              <h2 className="font-extrabold">{datas[0].title}</h2>
              <p>{datas[0].description}</p>
            </div>
            <div className="text-3xl font-extrabold bg-gray-700 w-[70px] h-[70px] flex items-center justify-center rounded-full">
              01
            </div>
          </div>

          <div className="bg-slate-900 w-[200px] flex flex-col text-center p-4 items-center gap-10 rounded-full">
            <IoHammerOutline className="text-6xl" />
            <div className="flex flex-col gap-4">
              <h2 className="font-extrabold">{datas[1].title}</h2>
              <p>{datas[1].description}</p>
            </div>
            <div className="text-3xl font-extrabold bg-gray-700 w-[70px] h-[70px] flex items-center justify-center rounded-full">
              02
            </div>
          </div>

          <div className="bg-slate-900 w-[200px] flex flex-col text-center p-4 items-center gap-10 rounded-full">
            <MdElectricMeter className="text-6xl" />
            <div className="flex flex-col gap-4">
              <h2 className="font-extrabold">{datas[2].title}</h2>
              <p>{datas[2].description}</p>
            </div>
            <div className="text-3xl font-extrabold bg-gray-700 w-[70px] h-[70px] flex items-center justify-center rounded-full">
              03
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
