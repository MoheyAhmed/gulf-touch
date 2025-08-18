"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function DigitalMarketingSlider() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isRTL = (i18n.language || "en").startsWith("ar");

  const marketing = [
    {
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
      alt: "SEO Logo",
      name: "SEO",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
      alt: "Social Media Logo",
      name: "Social Media",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
      alt: "Email Marketing Logo",
      name: "Email Marketing",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
      alt: "Content Marketing Logo",
      name: "Content Marketing",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      alt: "Paid Ads Logo",
      name: "Paid Ads",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      alt: "Analytics Logo",
      name: "Analytics",
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
        {marketing.map((item, index) => (
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
            <p className="mt-3 text-base  font-medium text-gray-200">{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
