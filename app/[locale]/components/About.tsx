import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const t = useTranslations("HomeComponents.about");
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/1_Ntcxw4Uyx5m8SaJmS0OJrg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-0 w-full max-w-5xl px-6 md:px-12 flex flex-col items-start justify-center gap-6 text-white">
        <p className="text-2xl md:text-3xl font-bold">
          {t("title.first")} <br />
          <span className="text-slate-100">{t("title.second")},</span>
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug max-w-4xl">
          {t("description")}
        </h1>

        <Link
          href="/contact"
          className="bg-white text-slate-900 px-6 py-3 rounded-md font-medium shadow-lg transition-transform duration-300 hover:bg-slate-900 hover:text-white hover:scale-105"
        >
          {t("contactBtn")}
        </Link>
      </div>
    </section>
  );
};

export default About;
