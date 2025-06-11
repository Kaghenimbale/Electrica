import Image from "next/image";
import { MdEngineering } from "react-icons/md";
import Engineer1 from "../../../public/360_F_782265344_F5Xl72Q4g09e97Zl2q9iTa0CfHdCIAli.jpg";
import Engineer2 from "../../../public/360_F_855658388_mhAf6KOoCuzVNG0wuz8cobAnm2qFnHA1.jpg";
import Engineer3 from "../../../public/OTC-Electricity-1020x615-1.jpg";
import { useTranslations } from "next-intl";

const Portfolio = () => {
  const t = useTranslations("HomeComponents.portfolio");
  return (
    <div className="w-full">
      <div className="w-full lg:w-[70vw] mx-auto flex flex-col items-center py-10 gap-4">
        <h2 className="text-red-700 text-2xl flex gap-1 items-center">
          <MdEngineering />
          {t("title")}
        </h2>
        <p className="text-4xl lg:text-5xl font-bold lg:w-[50rem] text-center">
          {t("description")}
        </p>

        <div className="flex gap-6 flex-col lg:flex-row">
          <Image
            src={Engineer1}
            className="w-[20rem] object-cover"
            alt="Engineer"
          />
          <Image
            src={Engineer2}
            className="w-[20rem] object-cover"
            alt="Engineer"
          />
          <Image
            src={Engineer3}
            className="w-[20rem] object-cover"
            alt="Engineer"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
