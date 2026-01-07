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
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759058/Asset_16_4x-8_omoasi.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759058/Asset_17_4x-8_uy21mn.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759059/Asset_18_4x-8_b5fkna.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759059/Asset_19_4x-8_qzqztv.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759059/Asset_20_4x-8_ziljzp.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759059/Asset_21_4x-8_bpzxqp.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759060/Asset_22_4x-8_joiafy.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759060/Asset_23_4x-8_k5dydx.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759064/Asset_24_4x-8_n412s1.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759064/Asset_25_4x-8_tadwig.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759064/Asset_26_4x-8_r5x6vu.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759065/Asset_27_4x-8_skosyh.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759068/Asset_29_4x-8_sq50a4.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759068/Asset_28_4x-8_wcb7jq.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759069/Asset_31_4x-8_z1znmn.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759069/Asset_30_4x-8_q9yc8r.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759070/Asset_32_4x-8_ln1snu.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759098/Asset_1_2x-8_ktnzam.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759153/Asset_1_4x-8_vfhrsf.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759158/Asset_1_4x-8_1_nehi4y.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759159/Asset_2_4x-8_ijwjjg.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759159/Asset_3_4x-8_bcibla.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759159/Asset_4_4x-8_yrubbj.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759164/Asset_5_4x-8_gfp6re.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759164/Asset_6_4x-8_v4vub1.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759165/Asset_7_4x-8_kxpeuu.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759166/Asset_8_4x-8_oqnd1t.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759173/Asset_9_4x-8_pn6t3n.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759180/Asset_10_4x-8_btxck3.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759193/Asset_11_4x-8_fla8ad.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759194/Asset_12_4x-8_dcddus.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759195/Asset_13_4x-8_a5kei2.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759198/Asset_14_4x-8_dxabhw.png'},
    { img: 'https://res.cloudinary.com/dab3mbbjb/image/upload/v1767759204/Asset_15_4x-8_za4na3.png'}
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
                      //  brightness-50
                className=" hover:brightness-100 transition-all duration-500 pb-7 hover:scale-105"
                priority={index < 3} // preload أول 3 صور
              />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
