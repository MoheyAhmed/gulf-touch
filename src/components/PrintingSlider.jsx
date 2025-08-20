"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function PrintingSlider() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isRTL = (i18n.language || "en").startsWith("ar");

 const printingServices = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    alt: "Business Cards",
    nameEn: "Business Cards",
    nameAr: "بطاقات الأعمال",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1029/1029183.png",
    alt: "Brochures & Flyers",
    nameEn: "Brochures & Flyers",
    nameAr: "البروشورات والفلايرات",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1828/1828880.png",
    alt: "Corporate Stationery",
    nameEn: "Corporate Stationery",
    nameAr: "المطبوعات المكتبية",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
    alt: "Packaging Prints",
    nameEn: "Packaging Prints",
    nameAr: "التغليفات المطبوعة",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/3135/3135773.png",
    alt: "Large Format Prints",
    nameEn: "Large Format Prints",
    nameAr: "المطبوعات كبيرة الحجم",
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
        {printingServices.map((item, index) => (
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
