"use client";

import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Building",
      icon: "/images/s1.png",
      description:
        "A building, or edifice, is a structure with a roof and walls standing.",
    },
    {
      title: "Road Construction",
      icon: "/images/s2.png",
      description:
        "Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.",
    },
    {
      title: "Maintenance",
      icon: "/images/s3.png",
      description:
        "All are assigned responsibilities relate to the maintenance mode.",
    },
  ];

  return (
    <section id="services" className="relative w-full overflow-hidden bg-white pt-14 sm:pt-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="relative mb-14 text-center sm:mb-20 lg:mb-24">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[clamp(3.2rem,15vw,9.4rem)] font-bold uppercase leading-[0.9] text-[#EBC151]/10"
          >
            Services
          </span>

          <p className="relative pt-[0.9em] font-serif text-sm uppercase text-[#EBC151] sm:pt-12 sm:text-xl lg:pt-[3.3rem] lg:text-2xl">
            What we can do for you
          </p>

          <h2 className="relative mt-5 font-serif text-3xl font-bold leading-tight text-black sm:mt-8 sm:text-4xl lg:mt-10 lg:text-[50px]">
            Our construction services
          </h2>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-1/2 -z-0 w-screen -translate-x-1/2 bg-[#F1F1F1] top-24 lg:top-[155px]" />

          <div className="relative grid grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-[336fr_605fr_334fr] lg:items-start">
            {services.map((item, i) => (
              <div
                key={item.title}
                className={`group relative bg-white px-6 pb-24 pt-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-2 hover:bg-[#f4c03b] hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)] sm:px-8 lg:pt-[50px] ${i === 2 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-10px)] lg:col-span-1 lg:w-full" : ""
                  }`}
              >
                <div className="relative mx-auto h-[124px] w-44">
                  <div className="absolute inset-0 bg-[#EBC151]/15 transition-colors duration-500 [clip-path:polygon(50%_0,100%_100%,0_100%)] group-hover:bg-white/30" />
                  <div className="absolute bottom-0 left-1/2 h-20 w-20 -translate-x-1/2 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>

                <h3 className="mt-[70px] inline-block border-b-[3px] border-[#EBC151] pb-4 font-serif text-2xl font-bold leading-[30px] text-[#243344] transition-colors duration-500 group-hover:border-white group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mx-auto mt-10 font-serif text-base leading-9 text-[#8a8a8a] transition-colors duration-500 group-hover:text-white">
                  {item.description}
                </p>

                <button
                  type="button"
                  className="absolute -bottom-[31px] left-1/2 h-[62px] w-[156px] -translate-x-1/2 bg-[#243344] font-serif text-[15px] font-bold text-white shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-colors duration-500 group-hover:bg-white group-hover:text-[#243344]"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center justify-between gap-8 pb-16 pt-20 text-center lg:flex-row lg:gap-6 lg:pb-[94px] lg:pt-[100px] lg:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-7">
              <div className="relative h-[68px] w-20 shrink-0">
                <Image
                  src="/images/safety-icon.png"
                  alt=""
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold leading-tight text-[#243344] sm:text-[30px]">
                  <span className="text-[#EBC151]">Building a dream</span>{" "}
                  shouldn’t be a nightmare!
                </h4>
                <p className="mt-1 font-serif text-base text-[#8a8a8a] sm:text-lg">
                  We have transforming the ideas and visions into winning projects.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="h-[72px] w-[233px] shrink-0 bg-white font-serif text-lg font-bold text-[#243344] shadow-[0_20px_40px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:bg-[#243344] hover:text-[#EBC151]"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}