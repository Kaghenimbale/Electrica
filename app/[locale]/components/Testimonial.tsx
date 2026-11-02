import { useTranslations } from "next-intl";
import { MdEngineering, MdFormatQuote, MdStarRate } from "react-icons/md";

type TestimonialData = {
  name: string;
  rate: string;
  satisfaction: string;
  message: string;
};

const Testimonial = () => {
  const t = useTranslations("HomeComponents.testimonial");
  const testimonials = t.raw("testimonials") as TestimonialData[];

  return (
    <section className="w-full bg-slate-50 px-6 py-20 md:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-5 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700 md:text-base">
            <MdEngineering className="text-xl" aria-hidden="true" />
            {t("title")}
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {t("question")}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => {
            const rating = Number(testimonial.rate);
            const initials = testimonial.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("");

            return (
              <figure
                key={testimonial.name}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8"
              >
                <MdFormatQuote
                  className="absolute right-5 top-4 text-6xl text-red-100"
                  aria-hidden="true"
                />

                <div
                  className="relative mb-5 flex gap-1"
                  role="img"
                  aria-label={`${rating} / 5`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <MdStarRate
                      key={index}
                      className={`text-xl ${
                        index < rating ? "text-amber-400" : "text-slate-200"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="relative flex-1 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                  “{testimonial.message}”
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold uppercase tracking-wide text-white ring-4 ring-red-50"
                    aria-hidden="true"
                  >
                    {initials}
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-bold text-slate-950">
                      {testimonial.name}
                    </span>
                    <span className="text-sm font-medium text-red-700">
                      {testimonial.satisfaction}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
