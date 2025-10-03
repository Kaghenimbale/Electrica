import React from "react";
import { MdElectricMeter, MdEngineering } from "react-icons/md";
import { IoHammerOutline } from "react-icons/io5";
import { GiScrewdriver } from "react-icons/gi";
import { useTranslations } from "next-intl";

const Work = () => {
  const t = useTranslations("HomeComponents.work");
  const datas = t.raw("works") as { title: string; description: string }[];

  const cards = [
    {
      icon: <GiScrewdriver className="text-6xl text-red-600" />,
      ...datas[0],
      number: "01",
    },
    {
      icon: <IoHammerOutline className="text-6xl text-red-600" />,
      ...datas[1],
      number: "02",
    },
    {
      icon: <MdElectricMeter className="text-6xl text-red-600" />,
      ...datas[2],
      number: "03",
    },
  ];

  return (
    <section className="bg-slate-950 w-full py-16">
      <div className="w-full lg:w-[70vw] mx-auto flex flex-col items-center gap-6 px-4">
        <h2 className="text-red-700 text-2xl md:text-3xl flex gap-2 items-center font-semibold">
          <MdEngineering />
          {t("title")}
        </h2>
        <p className="text-3xl md:text-5xl font-bold text-center text-white max-w-4xl">
          {t("process")}
        </p>

        {/* Cards Grid */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 mt-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-900 flex flex-col items-center text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-64 md:w-72"
            >
              {/* Icon */}
              <div className="mb-4">{card.icon}</div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="font-extrabold text-xl text-white">
                  {card.title}
                </h3>
                <p className="font-light text-gray-300">{card.description}</p>
              </div>

              {/* Step Number */}
              <div className="text-2xl md:text-3xl font-extrabold bg-gray-700 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full text-white">
                {card.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
