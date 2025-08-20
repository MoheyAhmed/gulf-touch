"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function EventsSlider() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isRTL = (i18n.language || "en").startsWith("ar");

  const services = [
    {
      src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      alt: "Event Concept",
      nameEn: "Event Concept & Execution",
      nameAr: "ابتكار وتنفيذ فكرة الفعالية",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
      alt: "Exhibition Booth Design",
      nameEn: "Booth & Exhibition Design",
      nameAr: "تصميم أجنحة المعارض والبوثات",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      alt: "Event Production",
      nameEn: "Event Production",
      nameAr: "إنتاج وتجهيز الفعالية",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
      alt: "On-site Management",
      nameEn: "On-site Management",
      nameAr: "إدارة الموقع يوم الحدث",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/747/747968.png",
      alt: "Media Coverage",
      nameEn: "Photo & Video Coverage",
      nameAr: "التغطية الفوتوغرافية والفيديو",
    },
  ];

  return (
    <section className="w-full py-12 text-center" dir={isRTL ? "rtl" : "ltr"}>
      <Swiper
        key={isRTL ? "rtl" : "ltr"}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
        loop
        style={{ direction: isRTL ? "rtl" : "ltr" }}
        className="w-full"
      >
        {services.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={80}
              height={80}
              className="object-contain text-center block mx-auto"
              unoptimized
            />
            <p className="mt-3 text-base  font-medium text-gray-200">
              {item.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
