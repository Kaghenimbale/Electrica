import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { MdEngineering } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useTranslations } from "next-intl";
import ObjectiveTabs from "./ObjectiveTabs";
import industry from "../../../public/industry-with-electrical-engineer-working-heights-generative-ai_220873-23877.png";

type Objective = {
  title: string;
  description: string;
};

const solutionKeys = ["first", "second", "third"] as const;

const Objectives = () => {
  const t = useTranslations("HomeComponents.Objectives");
  const objectives = t.raw("data") as Objective[];

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-20 md:px-10 lg:py-28">
      <div
        className="absolute -right-36 -top-36 -z-10 h-96 w-96 rounded-full bg-red-50 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700 md:text-base">
            <MdEngineering className="text-xl" aria-hidden="true" />
            {t("title")}
          </p>

          <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            {t("description")}
          </h2>

          <div className="mt-9 grid gap-4 sm:grid-cols-[minmax(8rem,0.75fr)_1.5fr]">
            <div className="flex flex-col justify-center rounded-2xl bg-slate-950 p-6 text-white shadow-lg shadow-slate-900/10 sm:p-7">
              <span className="text-6xl font-extrabold leading-none tracking-tight text-red-500 sm:text-7xl">
                02+
              </span>
              <span className="mt-3 max-w-[8rem] text-sm font-medium leading-5 text-slate-300">
                {t("experience")}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl text-red-700">
                  <RiSecurePaymentFill aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">{t("payment.title")}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {t("payment.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl text-red-700">
                  <GrUserWorker aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-950">{t("workforce.title")}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {t("workforce.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl lg:ml-auto">
          <div className="relative">
            <div
              className="absolute -bottom-4 -right-4 h-2/3 w-2/3 rounded-3xl bg-red-600"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-xl">
              <Image
                src={industry}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          <ObjectiveTabs objectives={objectives} label={t("title")} />

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {solutionKeys.map((key) => (
              <li
                key={key}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <FaCheckCircle
                  className="mt-1 shrink-0 text-red-600"
                  aria-hidden="true"
                />
                {t(`solutions.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
