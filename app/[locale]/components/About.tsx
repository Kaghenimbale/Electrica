import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const t = useTranslations("HomeComponents.about");

  return (
    <section className="relative flex items-center justify-center h-[93vh] bg-center bg-cover bg-no-repeat bg-[url('/1_Ntcxw4Uyx5m8SaJmS0OJrg.jpg')]">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full lg:w-[70vw] px-6 lg:px-0 mx-auto flex flex-col items-start justify-center gap-6 text-white">
        {/* Title */}
        <p className="text-2xl md:text-3xl font-semibold leading-snug">
          {t("title.first")} <br />
          <span className="text-red-500 font-bold">{t("title.second")},</span>
        </p>

        {/* Description */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight lg:w-[50rem] drop-shadow-lg -z-10">
          {t("description")}
        </h1>

        {/* Call-to-Action */}
        <Link
          href="/contact"
          className="mt-4 bg-red-600 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all duration-300 hover:bg-white hover:text-red-700"
        >
          {t("contactBtn")}
        </Link>
      </div>
    </section>
  );
};

export default About;
