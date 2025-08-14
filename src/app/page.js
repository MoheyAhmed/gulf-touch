"use client";

import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return <h1 className="text-2xl font-bold">{t("welcome")}</h1>;
}
