"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#243344] hover:bg-[#f4c03b] text-white hover:text-[#243344] flex items-center justify-center shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6 stroke-[2.5]" />
    </button>
  );
}
