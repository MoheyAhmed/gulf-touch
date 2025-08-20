"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function BrandingSlider() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isRTL = (i18n.language || "en").startsWith("ar");

  const services = [
    {
      src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      alt: "Brand Strategy",
      nameEn: "Brand Strategy",
      nameAr: "استراتيجيات العلامة التجارية",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      alt: "Visual Identity Design",
      nameEn: "Visual Identity",
      nameAr: "تصميم الهوية البصرية",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/2721/2721270.png",
      alt: "Brand Guidelines",
      nameEn: "Brand Guidelines",
      nameAr: "إعداد كتيب الهوية",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/3082/3082031.png",
      alt: "Packaging Design",
      nameEn: "Packaging Design",
      nameAr: "تصميم التغليفات",
    },
    
    {
      src: "https://cdn-icons-png.flaticon.com/512/888/888064.png",
      alt: "Logo Design",
      nameEn: "Logo Design",
      nameAr: "تصميم الشعار",
    },
   
    {
      src: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
      alt: "Corporate Identity",
      nameEn: "Corporate Identity",
      nameAr: "الهوية المؤسسية",
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
