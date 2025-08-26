import Image from "next/image";
import React from "react";

export default function OurProjects({images}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
      {images.map((img, index) => (
        <div key={index}>
          <Image
            src={img.src}
            alt={img.alt}
            className="rounded-3xl cursor-pointer border-4 hover:-translate-y-4 transition-all duration-500 border-slate-200 shadow-lg h-full"
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
            quality={80}
            priority={index === 0} // أول صورة بس priority
            loading={index === 0 ? undefined : "lazy"} // الباقي lazy
          />
        </div>
      ))}
    </div>
  );
}
