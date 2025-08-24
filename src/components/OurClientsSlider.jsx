"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

// استيراد صور العملاء


export default function OurClientsSlider() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isRTL = (i18n.language || "en").startsWith("ar");

  const clients = [
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022835/client1_duya7o.svg'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022835/client2_i4aqjt.svg'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022840/client3_bc9zak.svg'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022840/client4_kdttkj.svg'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022841/client5_cwtcst.svg'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022841/client6_kdmoir.svg'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022841/client7_qbdyup.svg'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022841/client8_h4giay.svg'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022842/client9_znqsfh.svg'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1756022842/client10_t4bimv.svg'}
  ];

  return (
    <section className="w-full py-12" dir={isRTL ? "rtl" : "ltr"}>
      <Swiper
        key={isRTL ? "rtl" : "ltr"} // إعادة render عند تغيير اللغة
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        loop
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        style={{ direction: isRTL ? "rtl" : "ltr" }}
        className="w-full"
      >
        {clients.map((client, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center cursor-pointer py-10"
          >
            <div className="w-full h-28 relative ">
              <Image
                src={client.img}
                alt={"client name"}
                fill
                sizes="(max-width: 640px) 100vw, 
                       (max-width: 768px) 50vw, 
                       (max-width: 1024px) 33vw, 
                       25vw"
                className="brightness-50 hover:brightness-100 transition-all duration-500 pb-7 hover:scale-105"
                priority={index < 3} // preload أول 3 صور
              />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
