import React from "react";
import { MdEngineering } from "react-icons/md";
import img1 from "../../../public/a-man-with-a-white-helmet-and-glasses-is-smiling-he-is-wearing-an-orange-shirt-with-a-pattern-photo.jpg";
import img2 from "../../../public/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg";
import img3 from "../../../public/electrical-engineer_762625-3025.avif";
import { TbNetwork } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Offer = () => {
  const t = useTranslations("HomeComponents.Offer");
  return (
    <div className="w-full lg:w-[70vw] bg-slate-950 mx-auto flex flex-col items-center gap-4 lg:py-10">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          {t("title")}
        </h2>
        <p className="text-4xl lg:text-5xl font-bold lg:w-[50rem] text-center text-white">
          {t("description")}
        </p>

        <div className="flex gap-10 flex-col lg:flex-row">
          <div>
            <Image
              src={img1}
              width={300}
              className="h-[170px] object-cover"
              alt="img1"
            />
            <div className="bg-white flex flex-col relative -top-6 left-6 p-2 border-t-4 border-red-600">
              <FaComputer className="text-white text-7xl p-4 font-thin bg-red-700 relative -top-6 left-3" />
              <p className="font-medium">{t("services.first")}</p>
            </div>
          </div>
          <div className="">
            <Image
              src={img2}
              width={300}
              className="h-[170px] object-cover"
              alt="img2"
            />
            <div className="bg-white flex flex-col relative -top-6 left-6 p-2 border-t-4 border-red-600">
              <TbNetwork className="text-white text-7xl p-4 font-thin bg-red-700 relative -top-6 left-3" />
              <p className="font-medium">{t("services.second")}</p>
            </div>
          </div>
          <div>
            <Image
              src={img3}
              width={300}
              className="h-[170px] object-cover"
              alt="img3"
            />
            <div className="bg-white flex flex-col relative -top-6 left-6 p-2 border-t-4 border-red-600">
              <FaRegLightbulb className="text-white text-7xl p-4 font-thin bg-red-700 relative -top-6 left-3" />
              <p className="font-medium">{t("services.third")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-600 w-full grid grid-cols-1 p-4 gap-4 lg:gap-0 lg:p-40 lg:grid-cols-2">
        <p className="text-3xl font-bold w-[20rem] text-white border-l-8 border-white pl-5">
          {t("OurPrinciple")}
        </p>
        <div className="offer flex items-center justify-center">
          <button className="w-[80px] h-[80px] bg-white flex items-center justify-center rounded-full shadow-2xl shadow-white">
            <FaPlay className="text-red-600 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
