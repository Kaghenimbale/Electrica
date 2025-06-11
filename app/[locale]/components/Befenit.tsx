import Image from "next/image";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";
import image2 from "../../../public/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg";
import { useTranslations } from "next-intl";

const Befenit = () => {
  const t = useTranslations("HomeComponents.benefits");
  return (
    <div className="w-full lg:w-[70vw] mx-auto p-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          {t("title")}
        </h2>

        <h2 className="text-4xl font-bold lg:w-[25rem]">{t("question")}</h2>

        <p className="lg:w-[25rem]">{t("description")}</p>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <BsArrowRightCircleFill className="text-red-600" />
            <p className="w-full lg:w-[20rem]">{t("goals.first")}</p>
          </div>

          <div className="flex gap-4 items-center">
            <BsArrowRightCircleFill className="text-red-600" />
            <p className="w-full lg:w-[20rem]">{t("goals.second")}</p>
          </div>

          <div className="flex gap-4 items-center">
            <BsArrowRightCircleFill className="text-red-600" />
            <p className="w-full lg:w-[20rem]">{t("goals.third")}</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image src={image2} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Befenit;
