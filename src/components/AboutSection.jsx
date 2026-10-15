"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutSection() {
  const points = [
    "Excellent engineering",
    "Modern & up to date",
    "Grade #1 materials",
    "Structures with long life",
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white py-30 lg:pb-[2.3vw] lg:pt-[14.3vw] lg:pb-[40px]"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* LEFT: yellow strip above + image flush to the left edge */}
        <div className="relative w-full lg:w-[47.8vw] lg:shrink-0">
          {/* Yellow block – only its top strip shows above the image */}
          <div className="absolute left-0 top-0 h-24 w-[85%] bg-[#f4c03b] lg:h-[20vw] lg:w-[40.7vw]" />

          {/* Image – starts below the yellow strip, flush left */}
          <div className="relative mt-12 aspect-[845/808] w-full shadow-[30px_0_80px_rgba(0,0,0,0.12)] lg:mt-[5.7vw]">
            <Image
              src="/images/about-company.jpg"
              alt="Construction engineers discussing blueprints"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT: text */}
        <div className="relative flex-1 px-6 pt-10 lg:pl-[4.3vw] lg:pr-0 lg:pt-0">
          {/* Pale watermark */}
          <span
            aria-hidden
            className="pointer-events-none absolute hidden select-none font-serif font-bold uppercase leading-none text-[#EBC151]/10 lg:block lg:left-[0.8vw] lg:top-[-1.35vw] lg:text-[10vw]"
          >
            About
          </span>

          <div className="relative lg:max-w-[46vw]">
            {/* Label */}
            <p className="mb-6 font-serif text-lg uppercase leading-tight text-[#EBC151] lg:mb-[4.2vw] lg:mt-[3.2vw] lg:text-[1.6vw]">
              About our company
            </p>

            {/* Heading */}
            <h2 className="mb-8 font-serif text-3xl font-bold leading-tight text-black sm:text-4xl lg:mb-[4.1vw] lg:text-[3.4vw]">
              Always dedicated and devoted
            </h2>

            {/* Paragraph */}
            <p className="mb-10 font-serif text-base leading-[1.9] text-[#8a8a8a] lg:mb-[4.1vw] lg:text-[1.35vw]">
              Slogan creation for your construction company is crucial for the
              overall branding. And branding in today’s world can’t be ignored,
              We hope that the above Construction Slogans. Don’t forget to share
              it on social media and related building communities.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-[23.5vw_1fr] lg:gap-y-[1.6vw]">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-4 lg:gap-[1.5vw] lg:pl-[0.4vw]"
                >
                  <Check
                    strokeWidth={3.5}
                    className="h-6 w-6 shrink-0 text-[#EBC151] lg:h-[2.4vw] lg:w-[2.4vw]"
                  />
                  <span className="font-serif text-base font-bold text-[#243344] lg:text-[1.4vw]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}