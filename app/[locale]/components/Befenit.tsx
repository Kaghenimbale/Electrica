import Image from "next/image";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";
import image2 from "../../../public/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg";
import { useTranslations } from "next-intl";

const Befenit = () => {
  const t = useTranslations("HomeComponents.benefits");

  const goals = [t("goals.first"), t("goals.second"), t("goals.third")];

  return (
    <section className="w-full lg:w-[70vw] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="flex flex-col gap-8">
        <h2 className="text-red-600 text-2xl flex items-center gap-2 font-semibold">
          <MdEngineering className="text-2xl" />
          {t("title")}
        </h2>

        <h2 className="text-3xl lg:text-4xl font-extrabold lg:w-[25rem] leading-snug">
          {t("question")}
        </h2>

        <p className="text-gray-600 lg:w-[25rem] leading-relaxed">
          {t("description")}
        </p>

        {/* Goals */}
        <div className="flex flex-col gap-4 mt-4">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-default"
            >
              <BsArrowRightCircleFill className="text-red-600 mt-1 text-2xl flex-shrink-0" />
              <p className="text-gray-800 font-medium">{goal}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src={image2}
          alt="Benefit Image"
          className="rounded-xl shadow-lg object-cover w-full lg:w-[25rem] h-[20rem]"
        />
      </div>
    </section>
  );
};

export default Befenit;
