import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const t = useTranslations("HomeComponents.about");
  return (
    <div className="flex items-center justify-center bg-[url('/1_Ntcxw4Uyx5m8SaJmS0OJrg.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="w-[100vw] px-10 lg:px-0 lg:w-[70vw] h-[93vh] mx-auto flex flex-col items-start justify-center gap-5 text-white">
        <p className="text-3xl font-bold">
          {t("title.first")} <br />
          <span className="text-white">{t("title.second")},</span>
        </p>
        <h1 className="text-4xl lg:text-6xl font-extrabold lg:w-[50rem]">
          {t("description")}
        </h1>
        <Link
          href="/contact"
          className="bg-white text-slate-900 p-3 rounded-md transition-all delay-100 hover:bg-slate-900 hover:text-white hover:no-underline"
        >
          {t("contactBtn")}
        </Link>
      </div>
    </div>
  );
};

export default About;
