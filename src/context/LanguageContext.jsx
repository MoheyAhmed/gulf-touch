"use client";

import { createContext, useContext, useState } from "react";
import i18n from "@/utils/i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    document.dir = lng === "ar" ? "rtl" : "ltr"; // ⬅️ تغيير الاتجاه
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
