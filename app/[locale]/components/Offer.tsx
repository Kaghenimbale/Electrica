import React from "react";
import { MdEngineering } from "react-icons/md";
import img1 from "../../../public/a-man-with-a-white-helmet-and-glasses-is-smiling-he-is-wearing-an-orange-shirt-with-a-pattern-photo.jpg";
import img2 from "../../../public/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg";
import img3 from "../../../public/electrical-engineer_762625-3025.avif";
import { TbNetwork } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";
import { FaComputer, FaPlay } from "react-icons/fa6";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Offer = () => {
  const t = useTranslations("HomeComponents.Offer");

  const services = [
    { img: img1, icon: <FaComputer />, title: t("services.first") },
    { img: img2, icon: <TbNetwork />, title: t("services.second") },
    { img: img3, icon: <FaRegLightbulb />, title: t("services.third") },
  ];

  return (
    <div className="w-full lg:w-[70vw] bg-slate-950 mx-auto flex flex-col items-center gap-20 lg:py-10 px-4">
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-red-600 text-2xl flex gap-2 items-center font-semibold">
          <MdEngineering className="text-3xl" />
          {t("title")}
        </h2>
        <p className="text-3xl lg:text-5xl font-extrabold text-center text-white lg:w-[50rem] leading-snug">
          {t("description")}
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <Image
                src={service.img}
                alt={`service-${index}`}
                className="w-full h-[180px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-0 left-4 right-4 transform translate-y-6 group-hover:translate-y-4 transition-all">
                <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-red-600">
                  <div className="bg-red-600 w-14 h-14 flex items-center justify-center rounded-lg -mt-10 shadow-md text-white text-3xl">
                    {service.icon}
                  </div>
                  <p className="font-semibold text-gray-800 mt-4 text-center">
                    {service.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Principle Section */}
      <div className="bg-red-600 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6 py-16">
        <p className="text-3xl font-bold text-white border-l-8 border-white pl-5 max-w-lg">
          {t("OurPrinciple")}
        </p>
        <div className="flex items-center justify-center">
          <button className="w-20 h-20 lg:w-24 lg:h-24 bg-white flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform">
            <FaPlay className="text-red-600 text-2xl lg:text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
