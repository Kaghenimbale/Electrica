import { useTranslations } from "next-intl";
import type { IconType } from "react-icons";
import { GiScrewdriver } from "react-icons/gi";
import { IoHammerOutline } from "react-icons/io5";
import { MdElectricMeter, MdEngineering } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "@/i18n/navigation";

const stepIcons: IconType[] = [GiScrewdriver, IoHammerOutline, MdElectricMeter];

const Work = () => {
  const t = useTranslations("HomeComponents.work");
  const nav = useTranslations("navbar");
  const steps = t.raw("works") as { title: string; description: string }[];

  return (
    <section className="w-full bg-slate-950 px-6 py-20 text-white md:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400 md:text-base">
            <MdEngineering className="text-xl" aria-hidden="true" />
            {t("title")}
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t("process")}
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <li
                key={step.title}
                className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-200 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl hover:shadow-black/20 motion-reduce:transition-none sm:p-8"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10 text-3xl text-red-400 transition-colors group-hover:bg-red-600 group-hover:text-white motion-reduce:transition-none">
                    {Icon && <Icon aria-hidden="true" />}
                  </span>
                  <span
                    className="text-sm font-bold tracking-[0.18em] text-slate-500"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-md shadow-red-950/30 transition-colors hover:bg-red-500 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
          >
            {nav("contact")}
            <FiArrowUpRight className="text-xl" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
