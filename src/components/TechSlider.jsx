"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function TechSlider() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // نتأكد إننا بنرندر بعد الماونت (يتفادى مشاكل SSR مع dir)
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isRTL = (i18n.language || "en").startsWith("ar");

  const techs = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML Logo", name: "HTML" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS Logo", name: "CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript Logo", name: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap Logo", name: "Bootstrap" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React Logo", name: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js Logo", name: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter Logo", name: "Flutter" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "SQL Logo", name: "SQL" },
  ];

  return (
    <section
      className="w-full py-12 text-center"
      dir={isRTL ? "rtl" : "ltr"}
    >
      

      <Swiper
        key={isRTL ? "rtl" : "ltr"}                 // 👈 يضمن re-mount عند تغيّر الاتجاه
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
        loop
        style={{ direction: isRTL ? "rtl" : "ltr" }} // 👈 يفرض الاتجاه وقت التهيئة
        className="w-full"
      >
        {techs.map((tech, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center">
            <Image
              src={tech.src}
              alt={`${tech.alt}`}
              width={80}
              height={80}
              className="object-contain"
              // لو لسه مزبطتش next.config للصور الخارجية:
              // unoptimized
            />
            <p className="mt-3 text-base  font-medium text-gray-200">{tech.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
