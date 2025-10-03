import React from "react";
import { MdEngineering } from "react-icons/md";
import img1 from "../../../public/a-man-with-a-white-helmet-and-glasses-is-smiling-he-is-wearing-an-orange-shirt-with-a-pattern-photo.jpg";
import img2 from "../../../public/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg";
import img3 from "../../../public/electrical-engineer_762625-3025.avif";
import { TbNetwork } from "react-icons/tb";
import { FaRegLightbulb, FaComputer, FaPlay } from "react-icons/fa6";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Offer = () => {
  const t = useTranslations("HomeComponents.Offer");

  const services = [
    { img: img1, icon: <FaComputer />, text: t("services.first") },
    { img: img2, icon: <TbNetwork />, text: t("services.second") },
    { img: img3, icon: <FaRegLightbulb />, text: t("services.third") },
  ];

  return (
    <section className="w-full lg:w-[70vw] mx-auto flex flex-col items-center gap-16 py-16 bg-slate-950">
      {/* Section Title */}
      <div className="flex flex-col items-center gap-4 text-center px-6">
        <h2 className="text-red-600 text-xl md:text-2xl flex items-center gap-2 font-semibold">
          <MdEngineering />
          {t("title")}
        </h2>
        <p className="text-3xl md:text-5xl font-bold max-w-3xl text-white leading-snug">
          {t("description")}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <Image
              src={service.img}
              alt={`service-${i}`}
              className="w-full h-64 object-cover"
            />

            {/* Bottom bar with icon and text */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 flex items-center gap-4">
              <div className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-md text-2xl">
                {service.icon}
              </div>
              <p className="text-gray-900 font-semibold">{service.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Principle Section */}
      <div className="w-full bg-red-600 grid grid-cols-1 lg:grid-cols-2 items-center px-8 md:px-20 py-16 gap-8">
        <p className="text-2xl md:text-3xl font-bold text-white border-l-8 border-white pl-5 leading-snug">
          {t("OurPrinciple")}
        </p>

        <div className="flex items-center justify-center">
          <button className="w-20 h-20 md:w-24 md:h-24 bg-white flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-transform duration-300">
            <FaPlay className="text-red-600 text-2xl md:text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
