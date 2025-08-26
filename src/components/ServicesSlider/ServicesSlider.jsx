"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function ServicesSlider({ items , slidesPerView = 4 }) {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isRTL = (i18n.language || "en").startsWith("ar");

  return (
    <section className="w-full py-12 text-center" dir={isRTL ? "rtl" : "ltr"}>
      <Swiper
        key={isRTL ? "rtl" : "ltr"}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: slidesPerView } }}
        loop
        style={{ direction: isRTL ? "rtl" : "ltr" }}
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={80}
              height={80}
              className="object-contain block mx-auto"
            />
            <p className="mt-3 text-base font-medium text-gray-200">
              {item.name
                ? item.name
                : isRTL
                ? item.nameAr
                : item.nameEn}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
