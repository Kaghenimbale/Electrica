import { MdEngineering } from "react-icons/md";
import Form from "./Form";
import { useTranslations } from "next-intl";
import CapabilitiesAccordion from "./CapabilitiesAccordion";

const Contact = () => {
  const t = useTranslations("HomeComponents.contact");
  const capabilities = t.raw("capabilities") as {
    id: number;
    title: string;
    description: string;
  }[];

  return (
    <section className="bg-slate-50 px-6 py-20 md:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-2 xl:gap-16">
          <Form />

          <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10 sm:p-8 lg:p-10">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              <MdEngineering className="text-xl" aria-hidden="true" />
              {t("title")}
            </p>
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {t("service")}
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              {t("description")}
            </p>

            <CapabilitiesAccordion capabilities={capabilities} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
