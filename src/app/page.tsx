"use client";

import { useEffect, useState } from "react";

// The 15 Mega Sections
import Loader from "@/components/home/Loader";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Manifesto from "@/components/home/Manifesto";
import AboutSection from "@/components/home/AboutSection";
import Stats from "@/components/home/Stats";
import Gallery from "@/components/home/Gallery";
import Services from "@/components/home/Services";
import NewsHeadlines from "@/components/home/NewsHeadlines";
import Team from "@/components/home/Team"; // New Section
import HorizontalScroll from "@/components/home/HorizontalScroll";
import Logos from "@/components/home/Logos";
import EndCredits from "@/components/home/EndCredits";

// Premium Layout Components
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";
import Spotlight from "@/components/ui/Spotlight";

export default function Home() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
      <main className="relative bg-black text-white selection:bg-amber-500 selection:text-white font-sans">
          {/* Visual Enhancements */}
          <GrainOverlay />
          <CustomCursor />
          <Spotlight />
          
          {/* 1. Kinetic Loader (Runs Once) */}
          <Loader />

          {/* GLOBAL NAVBAR - Premium Component */}
          <Navbar />

          {/* Act I: The Introduction */}
          <div className="ambient-light">
              <Hero />
              <Marquee />
              <Manifesto />
          </div>

          {/* Act II: The Visionary (About) */}
          <AboutSection />

          {/* Act III: The Archive & Impact */}
          <div className="relative">
              {/* Background Light Spill */}
              <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-amber-500/5 blur-[150px] -translate-y-1/2 -z-10" />
              <HorizontalScroll />
              <Stats />
              <Gallery />
          </div>

          {/* Act IV: The Architecture */}
          <div className="ambient-light">
              <Services />
              <NewsHeadlines />
              <Team />
          </div>

          {/* Act V: The Reach */}
          <div className="relative">
              <Logos />
          </div>

          {/* Act VI: The Conclusion */}
          <EndCredits />

      </main>
    );
}
