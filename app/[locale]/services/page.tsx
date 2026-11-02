import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { IconType } from "react-icons";
import { FaComputer, FaRegLightbulb } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { TbNetwork, TbShoppingCartBolt } from "react-icons/tb";
import { Link } from "@/i18n/navigation";
import { createPageMetadata } from "@/i18n/metadata";
import Products, { type Product } from "./Products";

type Service = {
  id: number;
  title: string;
  description: string;
};

const serviceIcons: Record<number, IconType> = {
  1: FaComputer,
  2: TbNetwork,
  3: FaRegLightbulb,
  4: TbShoppingCartBolt,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  return createPageMetadata(locale, t("title"), t("description"));
}

export default function ServicesPage() {
  const t = useTranslations("AboutComponent");
  const page = useTranslations("ServicesPage");
  const serviceGroups = t.raw("services") as Service[][];
  const services = serviceGroups.flat();
  const products = page.raw("products") as Product[];

  return (
    <div className="pt-20">
      <section className="relative isolate flex min-h-[min(42rem,calc(100svh-5rem))] items-center overflow-hidden bg-slate-950 text-white">
        <Image
          src="/worker-red-uniform-operating-control-panel-industrial-machine-night_753333-6558.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[62%_center]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              <span className="h-px w-10 bg-red-500" aria-hidden="true" />
              {page("eyebrow")}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              {page("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              {page("description")}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-lg bg-red-600 px-6 py-4 font-semibold text-white shadow-lg shadow-red-950/30 transition-colors hover:bg-red-500 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
            >
              {page("cta")}
              <FiArrowUpRight className="text-xl" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
              {t("service")}
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              {page("serviceHeading")}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              {page("serviceDescription")}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id];

              return (
                <article
                  key={service.id}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl text-red-700 transition-colors group-hover:bg-red-700 group-hover:text-white motion-reduce:transition-none">
                      {Icon && <Icon aria-hidden="true" />}
                    </span>
                    <span
                      className="text-sm font-bold tracking-wider text-slate-300"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-red-700 hover:text-red-800 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
                  >
                    {page("cta")}
                    <FiArrowUpRight aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
              {page("productsEyebrow")}
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              {page("productsHeading")}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              {page("productsDescription")}
            </p>
          </div>
          <Products products={products} />
        </div>
      </section>
    </div>
  );
}
