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
    <section className="w-full py-16 bg-gray-50">
      <div className="w-full lg:w-[70vw] mx-auto flex flex-col items-center gap-8 px-4">
        {/* Header */}
        <h2 className="text-red-600 text-2xl flex items-center gap-2 font-semibold">
          <MdEngineering className="text-3xl" />
          {t("title")}
        </h2>
        <p className="text-3xl lg:text-5xl font-extrabold text-center lg:w-[50rem] leading-snug">
          {t("description")}
        </p>

        {/* Portfolio Images */}
        <div className="flex flex-col lg:flex-row gap-6 w-full justify-center">
          {engineers.map((img, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[18rem] lg:w-[20rem] rounded-xl overflow-hidden shadow-lg 
                 transform transition-transform duration-500 ease-in-out 
                 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={img}
                alt={`Engineer ${idx + 1}`}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
