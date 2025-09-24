import React from "react";
import { MdElectricMeter, MdEngineering } from "react-icons/md";
import { IoHammerOutline } from "react-icons/io5";
import { GiScrewdriver } from "react-icons/gi";
import { useTranslations } from "next-intl";

const Work = () => {
  const t = useTranslations("HomeComponents.work");
  const datas = t.raw("works") as { title: string; description: string }[];

  const steps = [
    { icon: <GiScrewdriver />, data: datas[0], number: "01" },
    { icon: <IoHammerOutline />, data: datas[1], number: "02" },
    { icon: <MdElectricMeter />, data: datas[2], number: "03" },
  ];

  return (
    <section className="bg-slate-950 w-full py-16">
      <div className="w-full lg:w-[70vw] mx-auto flex flex-col items-center gap-8 px-4">
        {/* Header */}
        <h2 className="text-red-600 text-2xl flex items-center gap-2 font-semibold">
          <MdEngineering className="text-3xl" />
          {t("title")}
        </h2>
        <p className="text-3xl lg:text-5xl font-extrabold text-center text-white lg:w-[50rem] leading-snug">
          {t("process")}
        </p>

        {/* Work Steps */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12 w-full justify-center flex-wrap">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-900 flex flex-col items-center text-center p-6 rounded-2xl shadow-lg w-full sm:w-[250px] hover:scale-105 transition-transform"
            >
              <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-full text-white text-4xl mb-4">
                {step.icon}
              </div>
              <h3 className="font-extrabold text-xl mb-2 text-white">
                {step.data.title}
              </h3>
              <p className="text-gray-300 mb-4">{step.data.description}</p>
              <div className="bg-gray-700 w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg">
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
