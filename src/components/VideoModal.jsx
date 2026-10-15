"use client";

import { X } from "lucide-react";

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#243344]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-black w-full max-w-4xl aspect-video shadow-2xl overflow-hidden border-2 border-[#f4c03b]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-10 h-10 bg-[#243344] hover:bg-[#f4c03b] text-white hover:text-[#243344] flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        <iframe
          src="https://www.youtube.com/embed/fA_GqPZ3xX0?autoplay=1"
          title="Why Choose Us - Construction Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
