"use client";

import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Agency / Bidding",
      description: "Ensure design documents are reviewed and permitted",
    },
    {
      num: "02",
      title: "Construction",
      description: "Helps to coordinate furnishings and move-in process",
    },
    {
      num: "03",
      title: "Project Execution",
      description: "Client directs move in of equipment, operations & staff",
    },
  ];

  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-white pt-14 lg:grid lg:grid-cols-[1101fr_709fr] lg:pt-10"
    >
      {/* ---------- LEFT: heading, intro, photo with yellow block ---------- */}
      <div className="relative px-5 pb-20 sm:px-8 lg:pb-[6vw] lg:pl-[3.4vw] lg:pr-0 lg:pt-[7.6vw]">
        {/* Pale filled watermark, starts at the screen's left edge */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-6 select-none font-serif text-[clamp(4.5rem,20vw,9rem)] font-bold uppercase leading-none text-[#EBC151]/10 lg:top-[3vw] lg:text-[10.5vw]"
        >
          How?
        </span>

        <p className="relative font-serif text-base uppercase text-[#EBC151] sm:text-xl lg:text-[1.5vw]">
          Process of construction
        </p>

        <h2 className="relative mt-6 font-serif text-4xl font-bold leading-[1.5] text-black sm:text-5xl lg:mt-[3.1vw] lg:text-[3.4vw]">
          How it works
          <br />
          in construction?
        </h2>

        <p className="relative mt-4 max-w-[30rem] font-serif text-base leading-[2.35] text-[#8a8a8a] sm:text-lg lg:mt-[1.4vw] lg:max-w-[29vw] lg:text-[1.1vw]">
          Slogan creation for your construction company is crucial for the
          overall branding.
        </p>

        {/* Photo + yellow block (block bleeds to the left screen edge) */}
        <div className="relative mt-12 aspect-[845/481] w-full lg:mt-[3.5vw] lg:w-[calc(100%-14.1vw)]">
          <div className="absolute -bottom-4 -left-5 right-4 top-4 bg-[#f4c03b] sm:-left-8 lg:-bottom-[3.6vw] lg:-left-[3.4vw] lg:right-[2.9vw] lg:top-[3.6vw]" />
          <div className="relative h-full w-full shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
            <Image
              src="/images/process.jpg"
              alt="Construction workers on site"
              fill
              sizes="(min-width: 1024px) 47vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ---------- RIGHT: navy panel, bleeds to the right screen edge ---------- */}
      <div className="bg-[#243344] px-5 py-14 sm:px-8 lg:mt-[5.5vw] lg:px-0 lg:py-[9.7vw] lg:pr-[1.5vw]">
        <div className="space-y-10 lg:space-y-[6.5vw]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group flex cursor-default items-center gap-5 transition-transform duration-300 sm:gap-8 lg:-ml-[5.1vw] lg:gap-[3.65vw] lg:hover:-translate-x-[1.45vw]"
            >
              {/* Number badge: yellow / white number → white / navy number on hover */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-[#f4c03b] font-serif text-3xl font-normal text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#243344] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:h-24 sm:w-24 sm:text-4xl lg:h-[9.8vw] lg:w-[9.8vw] lg:text-[4.4vw]">
                {step.num}
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[2.4vw]">
                  {step.title}
                </h3>
                <p className="mt-2 font-serif text-sm text-white/60 sm:text-base lg:mt-[0.9vw] lg:text-[1.2vw]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}