"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import Home_OurProjects1_Branding from "../assets/images/Home_OurProjects1_Branding.jpg";
import Home_OurProjects2_Branding from "../assets/images/Home_OurProjects2_Branding.jpg";
import Home_OurProjects1_Website from "../assets/images/Home_OurProjects1_Website.jpg";
import Home_OurProjects2_Website from "../assets/images/Home_OurProjects2_Website.jpg";
import Home_OurProjects1_Printing from "../assets/images/Home_OurProjects1_Printing.jpg";
import Home_OurProjects2_Printing from "../assets/images/Home_OurProjects2_Printing.jpg";
import Home_OurProjects1_MediaProduction from "../assets/images/Home_OurProjects1_MediaProduction.jpg";
import Home_OurProjects2_MediaProduction from "../assets/images/Home_OurProjects2_MediaProduction.jpg";
import Home_OurProjects1_DigitalMarketing from "../assets/images/Home_OurProjects1_DigitalMarketing.jpg";
import Home_OurProjects2_DigitalMarketing from "../assets/images/Home_OurProjects2_DigitalMarketing.jpg";
import Home_OurProjects1_Events from "../assets/images/Home_OurProjects1_Events.jpg";
import Home_OurProjects2_Events from "../assets/images/Home_OurProjects2_Events.jpg";

export default function MediaSlider() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isRTL = (i18n.language || "en").startsWith("ar");

  const images = [
    {
      key: Home_OurProjects1_Branding,
      category: t("Home_OurProjects_Category_Branding"),
    },
    {
      key: Home_OurProjects1_Website,
      category: t("Home_OurProjects_Category_Website"),
    },
    {
      key: Home_OurProjects1_Printing,
      category: t("Home_OurProjects_Printing"),
    },
    {
      key: Home_OurProjects1_MediaProduction,
      category: t("Home_OurProjects_MediaContentProduction"),
    },
    {
      key: Home_OurProjects1_DigitalMarketing,
      category: t("Home_OurProjects_DigitalMarketing"),
    },
    { key: Home_OurProjects1_Events, category: t("Home_OurProjects_Event") },

    {
      key: Home_OurProjects2_Branding,
      category: t("Home_OurProjects_Category_Branding"),
    },
    {
      key: Home_OurProjects2_Website,
      category: t("Home_OurProjects_Category_Website"),
    },
    {
      key: Home_OurProjects2_Printing,
      category: t("Home_OurProjects_Printing"),
    },
    {
      key: Home_OurProjects2_MediaProduction,
      category: t("Home_OurProjects_MediaContentProduction"),
    },
    {
      key: Home_OurProjects2_DigitalMarketing,
      category: t("Home_OurProjects_DigitalMarketing"),
    },
    { key: Home_OurProjects2_Events, category: t("Home_OurProjects_Event") },
  ];

  return (
    <section className="w-full py-12" dir={isRTL ? "rtl" : "ltr"}>
      <Swiper
        key={isRTL ? "rtl" : "ltr"}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 }, // من 0px لحد 639px
          640: { slidesPerView: 2 }, // من 640px لحد 767px
          768: { slidesPerView: 3 }, // من 768px لحد 1023px
          1024: { slidesPerView: 4 }, // 1024px فأكثر
        }}
        loop
        style={{ direction: isRTL ? "rtl" : "ltr" }}
        className="w-full"
      >
        <div className="">
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center cursor-pointer pt-30"
            >
              {/* animate-pulse  */}
              <div className="w-full h-90 relative  delay-20 duration-500">
                <Image
                  src={img.key}
                  alt={`Media content ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 
         (max-width: 768px) 50vw, 
         (max-width: 1024px) 33vw, 
         25vw"
                  //   brightness-70 hover:brightness-100
                  className="rounded-xl object-cover shadow-md  transition-all duration-300"
                  priority={index < 3} // preload أول 3 صور
                />
                <div>
                  <h3 className="absolute font-bold text-xl bottom-0 left-0 right-0 text-white bg-[#be9b3f] bg-opacity-50 px-3 py-3 rounded-b">
                    {img.category}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
}
