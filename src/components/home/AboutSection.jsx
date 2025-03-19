"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import { isSafari, optimizedTransform } from "@/lib/motion";

export default function AboutSection() {
  // Initialize states with safe defaults for SSR
  const [currentImage, setCurrentImage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  // Only run client-side effects after hydration
  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);
    
    // Detect if this is Safari or a mobile device
    const isSafariOrMobile = 
      isSafari() || (typeof window !== "undefined" && window.innerWidth < 1024);
    
    setIsLowPerformance(isSafariOrMobile);

    // Apply hardware acceleration to all animated elements
    if (typeof document !== "undefined") {
      document.querySelectorAll(".safari-optimize").forEach((el) => {
        el.style.webkitTransform = "translateZ(0)";
        el.style.willChange = "transform, opacity";
      });
    }

    // Auto-rotate images (always enable rotation regardless of device)
    const imageInterval = setInterval(() => {
      setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 5 seconds

    // Cleanup function
    return () => {
      if (imageInterval) clearInterval(imageInterval);
    };
  }, []);
  const images = [
    "/images/about.jpeg",
    "/images/about2.jpeg",
    "/images/about3.jpeg",
  ];

  const nextImage = () => {
    if (isMounted) {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (isMounted) {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const revealFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full py-20 md:py-32 relative overflow-hidden"
    >
      {/* Simplified background geometric shapes - static for Safari and mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isMounted && isLowPerformance ? (
          /* Static shapes for low-performance devices */
          <>
            <div 
              className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-theme/10 opacity-20"
            />
            <div 
              className="absolute -left-40 bottom-20 w-[500px] h-[500px] rounded-full bg-theme/5 opacity-10"
            />
          </>
        ) : (
          /* Animated shapes for high-performance devices */
          <>
            <motion.div
              className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-theme/10 opacity-20 safari-optimize"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={optimizedTransform}
            />
            <motion.div
              className="absolute -left-40 bottom-20 w-[500px] h-[500px] rounded-full bg-theme/5 opacity-10 safari-optimize"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={optimizedTransform}
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated text */}
        <div className="text-center mb-16 md:mb-20">
          <AnimatedText
            text="Welcome to Clubhouse"
            className="text-4xl md:text-5xl font-bold mb-6 font-display text-theme"
            type="words"
          />
          <AnimatedDivider color="bg-theme" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left content column */}
          <motion.div
            className="lg:col-span-5 space-y-6 md:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={revealFromLeft} className="space-y-6">
              <h3 className="text-3xl font-bold text-theme font-display">
                An Exclusive Members' Club
              </h3>
              <p className="text-lg text-gray-700">
                An exclusive members&apos; club and rewards program designed for
                the innovative minds shaping our world.
              </p>
              <p className="text-lg text-gray-700">
                With a community of visionaries, entrepreneurs, and business
                executives from across the globe, Clubhouse is more than a
                membership—it&apos;s a gateway to unparalleled opportunities.
                Here, members enjoy access to premium benefits from leading
                travel, lifestyle, and business brands, fostering both personal
                and professional growth.
              </p>
              <p className="text-lg text-gray-700">
                Dive into a world where your ambitions are understood, your
                potential is recognised, and your achievements are celebrated.
                Welcome to where the future leaders connect, innovate, and
                thrive.
              </p>
            </motion.div>

            {/* Feature list with animations */}
            <motion.div variants={revealFromLeft} className="pt-6">
              <h4 className="text-xl font-semibold mb-6 text-theme font-display">
                Supporting SME Businesses
              </h4>
              <div className="space-y-4">
                {[
                  "Access to Resources: Market research, funding opportunities, training programs",
                  "Collaboration Opportunities: Joint ventures, co-marketing efforts",
                  "Strength in Numbers: Better terms with suppliers, group discounts",
                  "Knowledge Sharing: Best practices, industry insights",
                  "Networking and Partnerships: New connections and opportunities",
                  "Peer Support and Mentorship: Navigate obstacles and grow",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 text-theme bg-theme/10 p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={revealFromLeft}>
              <MagneticButton className="mt-8 bg-theme text-white hover:bg-theme/90 font-display">
                Become a Member
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right image column with 3D tilt effect */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <TiltCard
              className="rounded-2xl overflow-hidden"
              intensity={isLowPerformance ? 5 : 10}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                {/* Decorative elements */}
                <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-theme rounded-full opacity-20 z-10" />
                <div className="absolute -left-16 -top-16 w-32 h-32 bg-theme rounded-full opacity-20 z-10" />

                {/* Image Slider */}
                <motion.div
                  className="absolute inset-0 w-full h-full safari-optimize"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full">
                    {/* Image slider */}
                    {images.map((src, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0 safari-optimize"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isMounted && index === currentImage ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{
                          // Always keep all images in the DOM, just hide them
                          // This prevents issues with images not loading
                          opacity: isMounted && index === currentImage ? 1 : 0,
                          willChange: "transform, opacity",
                          WebkitTransform: "translateZ(0)",
                        }}
                        suppressHydrationWarning
                      >
                        <Image
                          src={src}
                          alt={`Clubhouse workspace ${index + 1}`}
                          fill
                          priority={index === 0}
                          className="object-cover rounded-2xl"
              
                          unoptimized
                        />
                      </motion.div>
                    ))}

                    {/* Slider navigation arrows */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                      <motion.button
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 shadow-lg safari-optimize"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevImage}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </motion.button>

                      <motion.button
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 shadow-lg"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextImage}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.button>
                    </div>

                    {/* Slider indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                      {images.map((_, index) => (
                        <motion.button
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            isMounted && index === currentImage
                              ? "bg-white"
                              : "bg-white/40"
                          }`}
                          suppressHydrationWarning
                          whileHover={{ scale: 1.5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setCurrentImage(index)}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-theme/30 to-transparent rounded-2xl" />
              </div>
            </TiltCard>

            {/* Floating stats cards - always visible with performance optimizations */}
            <>
              {/* Top-right card */}
              <motion.div
                className="absolute -right-10 -top-10 bg-white rounded-xl shadow-xl p-4 z-30 flex items-center gap-4 safari-optimize"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                style={optimizedTransform}
              >
                <div className="w-12 h-12 bg-theme/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-theme"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Members</p>
                  <p className="text-xl font-bold text-theme font-display">
                    2,500+
                  </p>
                </div>
              </motion.div>

              {/* Bottom-left card */}
              <motion.div
                className="absolute -left-10 bottom-20 bg-white rounded-xl shadow-xl p-4 z-30 flex items-center gap-4 safari-optimize"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                style={optimizedTransform}
              >
                <div className="w-12 h-12 bg-theme/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-theme"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Locations</p>
                  <p className="text-xl font-bold text-theme font-display">
                    Prime Areas
                  </p>
                </div>
              </motion.div>

              {/* Bottom-right card */}
              <motion.div
                className="absolute right-20 bottom-10 bg-white rounded-xl shadow-xl p-4 z-30 flex items-center gap-4 safari-optimize"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                style={optimizedTransform}
              >
                <div className="w-12 h-12 bg-theme/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-theme"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Brand Partners</p>
                  <p className="text-xl font-bold text-theme font-display">
                    50+
                  </p>
                </div>
              </motion.div>

              {/* Top-left card */}
              <motion.div
                className="absolute left-20 top-10 bg-white rounded-xl shadow-xl p-4 z-30 flex items-center gap-4 safari-optimize"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                style={optimizedTransform}
              >
                <div className="w-12 h-12 bg-theme/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-theme"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Yearly Events</p>
                  <p className="text-xl font-bold text-theme font-display">
                    150+
                  </p>
                </div>
              </motion.div>
            </>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
