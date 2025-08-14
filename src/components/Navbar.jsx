"use client";

import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  return (
    <nav className="flex justify-between p-4 bg-gray-200">
      <div className="space-x-4">
        <a href="/">{t("home")}</a>
        <a href="/about">{t("about")}</a>
      </div>
      <div>
        <button
          onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          {language === "en" ? "AR" : "EN"}
        </button>
      </div>
    </nav>
  );
}
