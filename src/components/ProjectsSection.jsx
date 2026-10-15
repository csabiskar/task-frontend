"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Riverview Green Building",
    categories: ["Building", "Road Construction"],
    image: "/images/portfolio-1.jpg",
  },
  {
    id: 2,
    title: "The Langham Hotel",
    categories: ["Building", "Construction"],
    image: "/images/portfolio-2.jpg",
  },
  {
    id: 3,
    title: "Villa Rustica Renovation",
    categories: ["Construction", "Road Construction"],
    image: "/images/portfolio-3.jpg",
  },
  {
    id: 4,
    title: "Land Rustica Renovation",
    categories: ["Building", "Maintenance"],
    image: "/images/portfolio-4.jpg",
  },
  {
    id: 5,
    title: "Kitchen And Living Room",
    categories: ["Architecture", "Building"],
    image: "/images/portfolio-5.jpg",
  },
  {
    id: 6,
    title: "House Under The Palms",
    categories: ["Construction", "Road Construction"],
    image: "/images/portfolio-6.jpg",
  },
  {
    id: 7,
    title: "Green House",
    categories: ["Architecture", "Building"],
    image: "/images/portfolio-7.jpg",
  },
  {
    id: 8,
    title: "Inside Renovation",
    categories: ["Building", "Maintenance"],
    image: "/images/portfolio-8.jpg",
  },
];

export default function ProjectsSection() {
  const [lightboxProject, setLightboxProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full py-24 sm:py-32 bg-white overflow-hidden"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
        {/* Section Header with Watermark */}
        <div className="text-center relative mb-16 sm:mb-28">
          <div className="watermark-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black absolute inset-x-0 -top-10 sm:-top-16 select-none " style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            SERVICES
          </div>

          <p className="text-[#f4c03b] font-medium text-sm sm:text-lg uppercase mb-3 relative z-10" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            WE ARE PROFESSIONAL
          </p>

          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-black relative z-10" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Our latest projects
          </h2>
        </div>

        {/* Projects Grid: 4 square tiles per row, ~40px gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setLightboxProject(project)}
              className="group relative aspect-square cursor-pointer transition-transform duration-500 hover:scale-[1.06] hover:z-20"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {/* Project Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                {/* Dark tint on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Inset yellow overlay panel */}
              <div className="absolute inset-4 sm:inset-[17px] bg-[#f4c03b]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-3">
                <div className="w-24 h-24 sm:w-[110px] sm:h-[110px] bg-[#243344] text-[#f4c03b] flex items-center justify-center mb-6 transition-transform duration-500 -translate-y-3 group-hover:translate-y-0">
                  <ExternalLink className="w-9 h-9 stroke-[1.75]" />
                </div>

                <h3 className="font-poppins font-bold text-xl sm:text-2xl text-[#243344] leading-snug"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                  {project.title}
                </h3>
                <span className="text-[11px] sm:text-xs text-[#243344] mt-3 block">
                  {project.categories.join(", ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-[#243344]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="relative bg-white max-w-3xl w-full p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 bg-[#243344] hover:bg-[#f4c03b] text-white hover:text-[#243344] flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[320px] sm:h-[420px] mb-4">
              <Image
                src={lightboxProject.image}
                alt={lightboxProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
              <div>
                <h3 className="font-poppins font-bold text-2xl text-[#243344]">
                  {lightboxProject.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Category: {lightboxProject.categories.join(", ")}
                </p>
              </div>
              <span className="text-xs bg-[#f4c03b] text-[#243344] font-bold px-3 py-1 self-start sm:self-center">
                Completed Project
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}