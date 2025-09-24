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
  const images = [image1, image2];

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full lg:w-[70vw] mx-auto flex flex-col items-center gap-8 px-4">
        {/* Header */}
        <h2 className="text-red-600 text-2xl flex items-center gap-2 font-semibold">
          <MdEngineering className="text-3xl" />
          {t("title")}
        </h2>
        <p className="text-3xl lg:text-5xl font-extrabold text-center lg:w-[30rem] leading-snug">
          {t("question")}
        </p>

        {/* Testimonials */}
        <div className="flex flex-col lg:flex-row gap-6 w-full justify-center">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden
             transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl w-full lg:w-[28rem]"
            >
              <Image
                src={images[idx]}
                alt={`testimonial ${idx + 1}`}
                className="w-full lg:w-40 h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <p className="font-bold text-lg">Great Service</p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <MdStarRate
                      key={starIdx}
                      className={
                        starIdx < parseInt(testimonial.rate)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-600 mt-2">{testimonial.message}</p>
                <h3 className="font-bold mt-2">{testimonial.name}</h3>
                <span className="text-red-600 font-bold">
                  {testimonial.satisfaction}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
