"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function MediaContentSlider() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isRTL = (i18n.language || "en").startsWith("ar");

  const media = [
  { src: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png", alt: "Graphic Design", name: t("GraphicDesign") },
  { src: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png", alt: "Creative Content", name: t("CreativeContent") },

  // عناصر جديدة
  { src: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png", alt: "Video Editing", name: t("VideoEditing") },
  { src: "https://cdn-icons-png.flaticon.com/512/3580/3580398.png", alt: "Animation", name: t("Animation") },
  { src: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png", alt: "Script Writing", name: t("ScriptWriting") }
];

  return (
    <section
      className="w-full py-12"
      dir={isRTL ? "rtl" : "ltr"}
    >
    

      <Swiper
        key={isRTL ? "rtl" : "ltr"}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        loop
        style={{ direction: isRTL ? "rtl" : "ltr" }}
        className="w-full"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={80}
              height={80}
              className="object-contain"
              unoptimized
            />
            <p className="mt-3 text-base  font-medium text-gray-200">{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
