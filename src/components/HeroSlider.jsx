"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 920;

export default function HeroSlider({ onOpenVideo }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const [scale, setScale] = useState(1); // 1 = no scaling
  const [scaled, setScaled] = useState(false); // true on every screen below lg
  const [ready, setReady] = useState(false); // avoids a flash of the unscaled canvas

  // Auto-advance slides every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  // Scale the 1440px desktop design to fit any screen narrower than 1024px
  useEffect(() => {
    const update = () => {
      const w = sectionRef.current?.clientWidth || window.innerWidth;
      if (w < 1024) {
        setScaled(true);
        setScale(w / DESIGN_WIDTH);
      } else {
        setScaled(false);
        setScale(1);
      }
      setReady(true);
    };
    update();
    const ro = new ResizeObserver(update);
    if (sectionRef.current) ro.observe(sectionRef.current);
    return () => ro.disconnect();
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden bg-white  select-none aspect-[1440/920] lg:aspect-auto lg:min-h-[920px] xl:min-h-[1000px] lg:h-[920px] xl:h-[1000px]"
    >
      {/* ========================================================================= */}
      {/* ============================== SLIDE 1 ================================== */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${currentSlide === 0
            ? "opacity-100 z-20 pointer-events-auto visible"
            : "opacity-0 z-10 pointer-events-none invisible"
          }`}
      >
        {/* ==================== DESKTOP DESIGN (all sizes, scaled below lg) ==================== */}
        <div className="block relative w-full h-full max-w-[1440px] mx-auto">
          {/* Fixed-size design canvas; scaled down on sm & md */}
          <div
            className="relative"
            style={{
              width: `${DESIGN_WIDTH}px`,
              height: `${DESIGN_HEIGHT}px`,
              transformOrigin: "top left",
              transform: scaled ? `scale(${scale})` : undefined,
              visibility: ready ? "visible" : "hidden",
            }}
          >
            {/* Layer 24: Faint skewed yellow stripe (z-index: 5) */}
            <div
              className="absolute origin-center"
              style={{
                left: "897px",
                top: "-7px",
                zIndex: 5,
                width: "2000px",
                height: "1100px",
                backgroundColor: "rgba(244, 192, 59, 0.25)",
                transform: "skew(-33.0001deg, 0deg)",
              }}
            />

            {/* Layer 21: Headline "START NEW PROJECTS" (z-index: 8, Poppins 80px) */}
            <div
              className="absolute"
              style={{
                left: "77px",
                top: "357px",
                zIndex: 8,
              }}
            >
              <h1
                className="text-[#243344] font-bold"
                style={{
                 fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "80px",
                  lineHeight: "62px",
                  letterSpacing: "0px",
                  fontWeight: 700,
                }}
              >
                START
                <br />
                NEW
                <br />
                <span
                  style={{
                    color: "rgb(244, 192, 59)",
                   fontFamily: '"Times New Roman", Times, serif',
                    fontSize: "80px",
                    lineHeight: "62px",
                    fontWeight: 700,
                  }}
                >
                  PROJECTS
                </span>
              </h1>
            </div>

            {/* Layer 22: Paragraph Subtitle (z-index: 9, Roboto 30px) */}
            <div
              className="absolute"
              style={{
                left: "79px",
                top: "597px",
                zIndex: 9,
              }}
            >
              <p
                className="text-[#243344]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: "30px",
                  lineHeight: "40px",
                  fontWeight: 400,
                }}
              >
                Don’t get framed by the competition, <br />
                trust our solid reputation.
              </p>
            </div>

            {/* Layer 23: Mid skewed yellow stripe (z-index: 11) */}
            <div
              className="absolute origin-center"
              style={{
                left: "1047px",
                top: "-7px",
                zIndex: 11,
                width: "2000px",
                height: "1100px",
                backgroundColor: "rgba(244, 192, 59, 0.25)",
                transform: "skew(-33.0001deg, 0deg)",
              }}
            />

            {/* Layer 26: Worker Image Cutout (z-index: 12) */}
            <div
              className="absolute"
              style={{
                left: "430px",
                top: "181px",
                zIndex: 12,
                width: "900px",
                height: "830px",
              }}
            >
              <Image
                src="/images/man-model.png"
                alt="Professional Construction Worker"
                width={900}
                height={830}
                className="object-contain"
                priority
              />
            </div>

            {/* Layer 25: Solid prominent yellow polygon (z-index: 13, cuts across worker's arm) */}
            <div
              className="absolute origin-center"
              style={{
                left: "1197px",
                top: "-7px",
                zIndex: 13,
                width: "2000px",
                height: "1100px",
                backgroundColor: "rgb(244, 192, 59)",
                transform: "skew(-33.0001deg, 0deg)",
              }}
            />

            {/* Layer 9: Play Icon Button (z-index: 17) */}
            <div
              className="absolute"
              style={{
                left: "86px",
                top: "765px",
                zIndex: 17,
              }}
            >
              <button
                onClick={onOpenVideo}
                className="group cursor-pointer flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "rgb(56, 64, 67)",
                  borderRadius: "100%",
                  boxShadow: "0 0 0 10px rgb(233, 234, 236)",
                  border: "none",
                  outline: "none",
                }}
                aria-label="Play video"
              >
                <Play className="w-8 h-8 fill-[#f4c03b] text-[#f4c03b] ml-1 transition-transform group-hover:scale-110" />
              </button>
            </div>

            {/* Layer 10: "Watch video" (18px) and "Why choose us?" (22px) (z-index: 16) */}
            <div
              className="absolute"
              style={{
                left: "220px",
                top: "777px",
                zIndex: 16,
              }}
            >
              <button
                onClick={onOpenVideo}
                className="cursor-pointer text-left bg-transparent border-0 p-0 group"
              >
                <span
                  style={{
                    color: "rgb(107, 130, 157)",
                    fontFamily: '"Times New Roman", Times, serif',
                    fontSize: "18px",
                    lineHeight: "25px",
                    fontWeight: 400,
                    display: "block",
                  }}
                >
                  Watch video
                </span>
                <b
                  style={{
                    color: "rgb(36, 51, 68)",
                    fontFamily: '"Times New Roman", Times, serif',
                    fontSize: "22px",
                    lineHeight: "25px",
                    fontWeight: 700,
                    display: "block",
                  }}
                  className="group-hover:text-[#f4c03b] transition-colors"
                >
                  Why choose us?
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ============================== SLIDE 2 ================================== */}
      {/* ========================================================================= */}
    <div
  className={`absolute inset-0 w-full h-full pt-20 sm:pt-0 transition-opacity duration-700 ease-in-out ${
    currentSlide === 1
      ? "opacity-100 z-20 pointer-events-auto visible"
      : "opacity-0 z-10 pointer-events-none invisible"
  }`}
>
  {/* Slide 2 Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/slide-2.jpg"
      alt="Modern Construction Site"
      fill
      className="object-cover"
      priority
    />
  </div>

  {/* Slide 2 Content */}
  <div className="relative z-20 max-w-5xl mx-auto h-full px-4 flex flex-col items-center justify-center text-center pb-10">
    {/* Title box (wider, sits behind) */}
    <div
      className="w-full bg-[#263244] text-[#edc251] font-bold leading-tight
                 px-4 pt-4 pb-10
                 sm:px-10 sm:pt-7 sm:pb-14
                 lg:px-14 lg:pt-9 lg:pb-[70px]
                 text-base sm:text-3xl md:text-4xl lg:text-[42px]"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      Committed to superior quality and results
    </div>

    {/* Subtitle box (narrower, centered, overlaps bottom of title box) */}
    <div
      className="relative z-10 w-[75%] bg-[#edc251] text-[#263244] font-bold leading-tight
                 -mt-6 lg:-mt-[33px]
                 px-3 py-3
                 sm:px-10 sm:py-6
                 lg:px-14 lg:py-[37px]
                 text-xs sm:text-xl md:text-2xl lg:text-3xl"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      We&apos;ll get it done, like us there are none
    </div>
  </div>
</div>

      {/* ========================================================================= */}
      {/* ======================= MINIMALIST CHEVRON ARROWS ======================= */}
      {/* Clean white chevrons in bottom right                                     */}
      {/* ========================================================================= */}
      <div className="absolute z-30 flex items-center space-x-2 sm:space-x-3 pointer-events-auto right-2 sm:right-10 md:right-14 bottom-2 sm:bottom-10 md:bottom-14">
        <button
          onClick={prevSlide}
          className="text-white hover:text-white/70 transition-all p-1.5 sm:p-2 flex items-center justify-center cursor-pointer active:scale-90"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-10 sm:h-10 stroke-[1.8]" />
        </button>
        <button
          onClick={nextSlide}
          className="text-white hover:text-white/70 transition-all p-1.5 sm:p-2 flex items-center justify-center cursor-pointer active:scale-90"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-10 sm:h-10 stroke-[1.8]" />
        </button>
      </div>
    </section>
  );
}