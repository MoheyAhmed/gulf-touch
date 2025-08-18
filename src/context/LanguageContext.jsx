// src/context/LanguageContext.jsx
"use client";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import i18n from "@/utils/i18n";

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  setLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  // عند أول تحميل: اقرأ اللغة المحفوظة
  useEffect(() => {
    try {
      const saved = localStorage.getItem("gt_lang");
      if (saved && (saved === "en" || saved === "ar")) {
        setLanguage(saved);
        i18n.changeLanguage(saved);
      } else {
        localStorage.setItem("gt_lang", "en");
      }
    } catch {}
  }, []);

  // أي تغيير → خزّنه وبدّل i18n و lang/dir
  useEffect(() => {
    try {
      localStorage.setItem("gt_lang", language);
    } catch {}
    i18n.changeLanguage(language);

    if (typeof document !== "undefined") {
      const html = document.documentElement;
      html.setAttribute("lang", language);
      html.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    }
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));

  const value = useMemo(
    () => ({ language, toggleLanguage, setLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);