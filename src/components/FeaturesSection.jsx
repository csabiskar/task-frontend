"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

export default function FeaturesSection() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const features = [
    {
      title: "Building Engineering",
      frontImg: "/images/service-1.jpg",
      backDesc:
        "All are assigned responsibilities relate to the maintenance mode and structural integrity of our modern edifices.",
    },
    {
      title: "Safety First",
      frontImg: "/images/service-2.jpg",
      backDesc:
        "Strict compliance with certified safety protocols, protective guidelines, and zero-accident policies across all jobs.",
    },
    {
      title: "Road Construction",
      frontImg: "/images/service-3.jpg",
      backDesc:
        "High-durability asphalt paving, heavy machinery grading, soil stabilization, and comprehensive civil infrastructure.",
    },
  ];

  return (
    // No overflow-hidden here: the cards must hang below the dark section.
    // z-20 keeps the overhanging cards above the section that follows.
    <section className="relative z-20 w-full bg-[#243344] pt-28 sm:pt-40 pb-24 sm:pb-32 text-white"
    style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {/* Background blueprint / crane image (clipped to the section) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-95">
        <Image
          src="/images/logo-1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* -mb pulls the section's bottom edge up so the cards overhang into the next section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10 -mb-40 sm:-mb-56">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          {/* Safety hard-hat icon (save as public/images/safety-icon.png) */}
          <Image
            src="/images/safety-icon.png"
            alt=""
            width={100}
            height={100}
            className="w-[70px] sm:w-[80px] h-auto mx-auto mb-10"
          />

          <p className="text-[#f4c03b] text-base sm:text-xl uppercase mb-8 sm:mb-10"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Features at a glance
          </p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            We know what your needs are
          </h2>
        </div>

        {/* 3 Interactive Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const isFlipped = flippedCards[index];
            return (
              <div
                key={index}
                className="[perspective:1200px] h-[420px] sm:h-[440px] lg:h-[480px] cursor-pointer group"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative w-full h-full duration-700 ease-in-out [transform-style:preserve-3d] transition-transform ${
                    isFlipped
                      ? "[transform:rotateX(180deg)]"
                      : "group-hover:[transform:rotateX(180deg)]"
                  }`}
                >
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] overflow-hidden">
                    <Image
                      src={item.frontImg}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {/* Front bottom bar: inset a few px from the card edges */}
                    <div className="absolute bottom-2 inset-x-2 bg-[#243344]/75 px-7 py-6 flex items-center justify-between">
                      <h3 className="font-normal text-lg sm:text-xl text-white"
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                        {item.title}
                      </h3>
                      <ChevronUp className="w-6 h-6 text-white shrink-0" />
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] bg-[#f4c03b] text-[#243344] p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
                    <div>
                      <span className="text-xs font-bold tracking-widest uppercase opacity-75 block mb-2">
                        Specialized Service
                      </span>
                      <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-[#243344] mb-5"
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-[#243344] font-medium text-base sm:text-lg leading-relaxed">
                        {item.backDesc}
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white hover:bg-[#243344] text-[#243344] hover:text-[#f4c03b] font-bold text-sm tracking-wider uppercase px-8 py-3.5 shadow-md hover:shadow-xl transition-all"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}