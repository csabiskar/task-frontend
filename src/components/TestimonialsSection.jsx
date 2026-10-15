"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";

/*
  Sizes are fluid: they scale with the viewport width (vw) and stop at the
  full-size value (designed for a 1920px wide screen). The first number in
  each clamp() is the mobile minimum.
*/

// Quote marks are part of the text, exactly as in the design.
const testimonials = [
  {
    id: 1,
    quote:
      '"Great Experience!! Michael has made the whole process easy from the planning stage to the final plant going in. Steve & his crew did a great job. I felt like Lavish Gardens really listened to what I wanted, gave me ideas, and helped me decide how to make my backyard a place to relax and enjoy the view.',
    author: "Richard Dowson",
    avatar: "/images/team1.jpg",
  },
  {
    id: 2,
    quote:
      "“I just wanted to say thank you to all of you for being so fun to work with and being rock stars with the best attitudes EVER on this 16th floor build for SPS. It means a great deal to me that you all come to the table every week with smiles on your faces and ready to solve whatever issue.”",
    author: "Lisa Jordan",
    avatar: "/images/team2.jpg",
  },
  {
    id: 3,
    quote:
      "“Greiner has been a critical partner to us on the redevelopment of West End Center Office Park. The team of project managers, supervisors, and their support teams can't be rivaled by any other contractor I have worked with over the past 15 years.”",
    author: "Michael Anderson",
    avatar: "/images/team3.jpg",
  },
];

const n = testimonials.length;
const mod = (v) => ((v % n) + n) % n;
const AUTOPLAY_MS = 7000;
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function TestimonialsSection() {
  // `pos` is an ever-growing slide counter so the track always slides forward
  const [pos, setPos] = useState(0);
  const [trackH, setTrackH] = useState(null);
  const slideRefs = useRef({});
  const current = mod(pos);

  // autoplay (restarts whenever the slide changes, also after a dot click)
  useEffect(() => {
    const t = setTimeout(() => setPos((p) => p + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [pos]);

  // track height follows the active card
  useIsoLayoutEffect(() => {
    const measure = () => {
      const el = slideRefs.current[pos];
      if (el) setTrackH(el.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pos]);

  const goTo = (idx) => {
    let d = mod(idx - current);
    if (d > n / 2) d -= n;
    setPos((p) => p + d);
  };

  const visible = [];
  for (let v = pos - 2; v <= pos + 2; v++) visible.push(v);

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-white pt-20 pb-20 lg:pt-[10vw] lg:pb-[6vw]"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="px-4 lg:px-0 lg:pl-[2.48vw]">
        {/* Header */}
        <div className="relative text-center">
          {/* Watermark */}
          <div
            aria-hidden
            className="absolute inset-x-0 -top-6 lg:top-[-2.9vw] whitespace-nowrap select-none pointer-events-none font-bold uppercase leading-none text-[#fdf7e6] text-[clamp(34px,7.9vw,152px)]"
          >
            TESTIMONIALS
          </div>

          <p className="relative z-10 uppercase text-[#f4c03b] text-[clamp(13px,1.56vw,30px)] leading-[1.8] mb-2 lg:mb-[1.3vw]">
            SEE WHAT SAYS OUR HAPPY CLIENTS
          </p>

          <h2 className="relative z-10 font-bold text-black text-[clamp(32px,3.55vw,68px)] leading-[1.3]">
            Our happy customers
          </h2>
        </div>

        {/* Carousel track: active card centered, neighbours peek in faded */}
        <div
          className="relative mx-auto mt-20 lg:mt-[9.5vw] w-[var(--w)] [--w:calc(100vw_-_2rem)] [--gap:2rem] lg:[--w:72.6vw] lg:[--gap:11.8vw] transition-[height] duration-500 "
          style={{ height: trackH ?? undefined }}
        >
          {visible.map((v) => {
            const t = testimonials[mod(v)];
            const active = v === pos;
            return (
              <div
                key={v}
                ref={(el) => {
                  if (el) slideRefs.current[v] = el;
                  else delete slideRefs.current[v];
                }}
                aria-hidden={!active}
                className="absolute left-0 top-0 w-full transition-[transform,opacity] duration-700 ease-in-out"
                style={{
                  transform: `translateX(calc(${v - pos} * (var(--w) + var(--gap))))`,
                  opacity: active ? 1 : 0.32,
                }}
              >
                {/* Card */}
                <div className="relative bg-white px-6 pt-24 pb-10 shadow-[0_16px_46px_rgba(0,0,0,0.09)] lg:px-[10.7vw] lg:pt-[6.85vw] lg:pb-[5.84vw] lg:shadow-[0_1.6vw_4.6vw_rgba(0,0,0,0.09)]">
                  {/* Avatar + yellow offset box */}
                  <div className="absolute z-10 left-1/2 -translate-x-1/2 -top-[4.5rem] w-36 h-36 lg:left-[-7.03vw] lg:translate-x-0 lg:top-[-2.6vw] lg:w-[14.2vw] lg:h-[14.2vw]">
                    <div className="absolute inset-0 -translate-x-3 translate-y-3 lg:-translate-x-[1.05vw] lg:translate-y-[1.05vw] bg-gradient-to-b from-[#e4b94b] to-[#d8b050]" />
                    <div className="relative w-full h-full overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.16)] lg:shadow-[0_1.2vw_3vw_rgba(0,0,0,0.16)]">
                      <Image
                        src={t.avatar}
                        alt={t.author}
                        fill
                        sizes="(min-width: 1024px) 15vw, 150px"
                        className="object-cover"
                        priority={mod(v) === 0}
                      />
                    </div>
                  </div>

                  <p className="text-[#263445] text-[clamp(16px,1.67vw,32px)] leading-[1.85]">
                    {t.quote}
                  </p>

                  <p className="mt-8 lg:mt-[3.83vw] italic text-[#aaa] text-[clamp(14px,1.27vw,24px)] leading-[1.5]">
                    - {t.author}
                  </p>

                  {/* Big pale closing-quote glyph */}
                  <svg
                    aria-hidden
                    viewBox="0 0 172 115"
                    className="absolute pointer-events-none right-6 bottom-6 w-14 lg:right-[5.4vw] lg:bottom-[4.9vw] lg:w-[6.3vw] fill-[#faefd3]"
                  >
                    <g id="mark">
                      <circle cx="40" cy="38" r="38" />
                      <path d="M78 38C78 82 58 106 18 115L10 96C30 88 40 76 42 60L78 38Z" />
                    </g>
                    <use href="#mark" x="92" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dash indicators */}
        <div className="mt-10 lg:mt-[3.9vw] flex items-center justify-center gap-[clamp(8px,0.74vw,14px)]">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-[clamp(5px,0.43vw,9px)] transition-all duration-300 ${
                current === idx
                  ? "w-[clamp(32px,2.25vw,44px)] bg-[#ebbb48]"
                  : "w-[clamp(20px,1.4vw,28px)] bg-[#f8e9c6]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}