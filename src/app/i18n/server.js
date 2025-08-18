// app/i18n/server.js
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";

export async function getTranslation(locale = "en") {
  if (locale === "ar") return ar;
  return en;
}
