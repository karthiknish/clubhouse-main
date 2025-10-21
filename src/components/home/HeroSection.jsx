"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
// import ScrollIndicator from "@/components/ScrollIndicator";
import MagneticButton from "@/components/MagneticButton";

export default function HeroSection({ content, onButtonEnter, onButtonLeave }) {
  const videoRef = useRef(null);
  const {
    headline = "Connect. Innovate. Thrive.",
    subheadline = "Your Gateway to Exclusive World-Class Opportunities",
    primaryCtaLabel = "Become a Member",
  } = content ?? {};

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-theme/80 via-theme/70 to-theme/80 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Static overlay pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </motion.div>

      {/* Video background */}
      <video
        style={{ filter: "brightness(0.5)" }}
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero content with 3D perspective */}
      <div
        className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4"
        style={{ perspective: "1000px" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedText
            text={headline}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight font-display"
            type="words"
            delay={0.5}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-display font-light">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton
                onClick={() => {
                  window.location.href = "/contact";
                }}
                size="lg"
                className="bg-white text-theme hover:bg-white/90 text-lg px-8 py-6 font-display"
                onMouseEnter={onButtonEnter}
                onMouseLeave={onButtonLeave}
              >
                {primaryCtaLabel}
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
