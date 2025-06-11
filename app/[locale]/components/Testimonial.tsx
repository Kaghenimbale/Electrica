import Image from "next/image";
import React from "react";
import { MdEngineering, MdStarRate } from "react-icons/md";
import image1 from "../../../public/360_F_782265344_F5Xl72Q4g09e97Zl2q9iTa0CfHdCIAli.jpg";
import image2 from "../../../public/a-man-with-a-white-helmet-and-glasses-is-smiling-he-is-wearing-an-orange-shirt-with-a-pattern-photo.jpg";
import { useTranslations } from "next-intl";

const Testimonial = () => {
  const t = useTranslations("HomeComponents.testimonial");
  const testimonials = t.raw("testimonials") as {
    satisfaction: string;
    name: number;
    rate: string;
    message: string;
  }[];
  return (
    <div className="p-10">
      <div className="w-full lg:w-[70vw] mx-auto flex flex-col items-center gap-4">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          {t("title")}
        </h2>
        <p className="text-4xl lg:text-5xl font-bold lg:w-[30rem] text-center">
          {t("question")}
        </p>

        <div className="flex gap-6 flex-col lg:flex-row">
          <div className="flex flex-col lg:flex-row gap-4">
            <Image
              src={image1}
              className="w-[160px] h-[200px] object-cover"
              alt="image1"
            />
            <div>
              <p className="font-bold">Great Service</p>
              <div className="flex gap-1">
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-white" />
              </div>
              <p className="text-gray-400">{testimonials[0].message}</p>
              <h3 className="font-bold">Jean Mwamba</h3>
              <span className="text-red-600 font-bold">
                {testimonials[0].satisfaction}
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <Image
              src={image2}
              className="w-[160px] h-[200px] object-cover"
              alt="image1"
            />
            <div>
              <p className="font-bold">Great Service</p>
              <div className="flex gap-1">
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-yellow-500" />
                <MdStarRate className="text-white" />
                <MdStarRate className="text-white" />
              </div>
              <p className="text-gray-400">{testimonials[1].message}</p>
              <h3 className="font-bold">Alexandre Kabangu</h3>
              <span className="text-red-600 font-bold">
                {testimonials[1].satisfaction}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
