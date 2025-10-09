import Image from "next/image";
import { MdEngineering } from "react-icons/md";
import Engineer1 from "../../../public/360_F_782265344_F5Xl72Q4g09e97Zl2q9iTa0CfHdCIAli.jpg";
import Engineer2 from "../../../public/360_F_855658388_mhAf6KOoCuzVNG0wuz8cobAnm2qFnHA1.jpg";
import Engineer3 from "../../../public/OTC-Electricity-1020x615-1.jpg";
import { useTranslations } from "next-intl";

const Portfolio = () => {
  const t = useTranslations("HomeComponents.portfolio");
  const engineers = [Engineer1, Engineer2, Engineer3];

  return (
    <section className="w-full py-16">
      <div className="w-full lg:w-[70vw] mx-auto flex flex-col items-center gap-6 px-4">
        {/* Section Title */}
        <h2 className="text-red-700 text-2xl md:text-3xl flex gap-2 items-center font-semibold">
          <MdEngineering />
          {t("title")}
        </h2>
        <p className="text-3xl md:text-5xl font-bold text-center text-blue-950 max-w-4xl">
          {t("description")}
        </p>

        {/* Images */}
        <div className="flex flex-col lg:flex-row gap-6 mt-8 justify-center items-center">
          {engineers.map((img, index) => (
            <div
              key={index}
              className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={img}
                alt={`Engineer-${index + 1}`}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
