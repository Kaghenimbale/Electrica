import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (!newLocale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.replace(newPath);
  };
  return (
    <div className="relative text-red-600 top-20 right-8">
      <select
        className="text-blue-950 bg-gray-300 outline-none w-[45px] h-[30px] rounded-md absolute"
        name=""
        id=""
        value="🌐"
        onChange={handleChange}
      >
        <option value="">🌐</option>
        <option value="fr">Fr</option>
        <option value="en">En</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
