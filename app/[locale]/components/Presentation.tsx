
import Image from "next/image";
import React from "react";
import chris from "../../../public/Christiant Kagheni.png";
import { MdEngineering } from "react-icons/md";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { SiThunderstore } from "react-icons/si";

const Presentation = () => {
  const t = useTranslations("HomeComponents.presentation");

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-red-100/60 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">

        {/* LEFT: Brand presentation */}
        <div className="relative flex min-h-[350px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center shadow-2xl sm:min-h-[430px] sm:py-16">

          {/* Decorative elements */}
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-red-700/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/10 shadow-xl sm:h-32 sm:w-32">
              <SiThunderstore className="text-6xl text-red-500 sm:text-8xl" />
            </div>

            <div>
              <h2 className="text-4xl font-black tracking-[0.18em] text-white sm:text-5xl lg:text-6xl">
                ELECTRICA
              </h2>

              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-red-600" />

              <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-slate-300 sm:text-base">
                {t("title3")}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white sm:text-sm">
                {t("electricalTag")}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white sm:text-sm">
                {t("networkTag")}
              </span>
            </div>
          </div>

          <div className="absolute bottom-5 right-6 text-6xl font-black text-white/[0.03] sm:text-8xl">
            E
          </div>
        </div>

        {/* RIGHT: Company information */}
        <div className="flex flex-col gap-6">

          {/* Section label */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-700">
              <MdEngineering className="text-2xl" />
            </div>

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
              {t("title")}
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {t("title1")}
          </h2>

          {/* Subtitle */}
          <p className="border-l-4 border-red-600 pl-4 text-lg font-semibold leading-relaxed text-red-700 sm:text-xl">
            {t("title2")}
          </p>

          {/* Description */}
          <p className="text-base font-normal leading-8 text-slate-600 sm:text-lg">
            {t("description")}
          </p>

          {/* Company values */}
          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            {[
              t("values.first"),
              t("values.second"),
              t("values.third"),
            ].map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-red-600" />
                <span className="text-sm font-medium leading-relaxed text-slate-700">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* CEO profile */}
          <div className="mt-4 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={chris}
                alt={t("founderImageAlt")}
                width={72}
                height={72}
                sizes="72px"
                className="h-[72px] w-[72px] rounded-full border-2 border-red-600 object-cover shadow-lg"
              />

              <div>
                <a
                  href="https://kaghenimbale.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-950 transition-colors hover:text-red-700"
                >
                  KAGHENI Chris
                </a>
                <p className="mt-1 text-sm text-slate-500">
                  {t("founderRole")}
                </p>
              </div>
            </div>

            <a
              href="https://kaghenimbale.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-700 transition-all hover:gap-3"
            >
              {t("founderLink")} <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
