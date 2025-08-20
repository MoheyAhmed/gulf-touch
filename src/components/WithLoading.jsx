"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function WithLoading({ children, duration = 3000 }) {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen space-x-2 bg-gray-100 ">
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-5 h-5 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-5 h-5 bg-green-500 rounded-full animate-bounce"></div>
        <div>
          <p className="text-lg animate-pulse text-blue-600 font-bold">
            {t("Loading")} ...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
