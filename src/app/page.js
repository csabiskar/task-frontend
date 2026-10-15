"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsBanner from "@/components/ClientsBanner";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSlider onOpenVideo={() => setVideoModalOpen(true)} />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <QuoteSection />
      <TestimonialsSection />
      <ClientsBanner />
      <Footer />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
      <BackToTop />
    </main>
  );
}

