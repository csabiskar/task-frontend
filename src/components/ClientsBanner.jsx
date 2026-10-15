"use client";

import Image from "next/image";

export default function ClientsBanner() {
  const logos = [
    { id: 1, src: "/images/logo-1.png", alt: "Client Partner 1" },
    { id: 2, src: "/images/logo-2.png", alt: "Client Partner 2" },
    { id: 3, src: "/images/logo-3.png", alt: "Client Partner 3" },
    { id: 4, src: "/images/logo-4.png", alt: "Client Partner 4" },
    { id: 5, src: "/images/logo-5.png", alt: "Client Partner 5" },
  ];

  return (
    <div className="relative z-30 px-4 sm:px-8 -mb-16">
      <div className="bg-[#f4c03b] shadow-2xl py-14 px-8 sm:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="relative w-32 h-12 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
