"use client";

import { motion } from "framer-motion"; // Keep for image slider
import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";
import MagneticButton from "@/components/MagneticButton";
// Removed TiltCard and optimizedTransform imports

export default function AboutSection() {
  // Initialize states with safe defaults for SSR
  const [currentImage, setCurrentImage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Only run client-side effects after hydration
  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true);

    // Auto-rotate images (always enable rotation regardless of device)
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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

  // Removed staggerContainer and revealFromLeft variants

  return (
    <section
      id="about"
      className="w-full py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background geometric shapes - Static */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <>
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-theme/10 opacity-20" />
          <div className="absolute -left-40 bottom-20 w-[500px] h-[500px] rounded-full bg-theme/5 opacity-10" />
        </>
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
          {/* Left content column - Static */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-theme font-display">
                An Exclusive Members' Club
              </h3>
              <p className="text-lg text-gray-700">
                An exclusive members' club and rewards program designed for the
                innovative minds shaping our world.
              </p>
              <p className="text-lg text-gray-700">
                With a community of visionaries, entrepreneurs, and business
                executives from across the globe, Clubhouse is more than a
                membership—it's a gateway to unparalleled opportunities. Here,
                members enjoy access to premium benefits from leading travel,
                lifestyle, and business brands, fostering both personal and
                professional growth.
              </p>
              <p className="text-lg text-gray-700">
                Dive into a world where your ambitions are understood, your
                potential is recognised, and your achievements are celebrated.
                Welcome to where the future leaders connect, innovate, and
                thrive.
              </p>
            </div>

            {/* Feature list - Static */}
            <div className="pt-6">
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
                  <div key={index} className="flex items-start gap-3">
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
                  </div>
                ))}
              </div>
            </div>

            {/* Static Button */}
            <div>
              <MagneticButton className="mt-8 bg-theme text-white hover:bg-theme/90 font-display">
                Become a Member
              </MagneticButton>
            </div>
          </div>

          {/* Right image column - Static wrapper */}
          <div className="lg:col-span-7 relative">
            {/* Removed TiltCard */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {" "}
              {/* Added shadow */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                {/* Decorative elements */}
                <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-theme rounded-full opacity-20 z-10" />
                <div className="absolute -left-16 -top-16 w-32 h-32 bg-theme rounded-full opacity-20 z-10" />

                {/* Image Slider - Kept motion for fade effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
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
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isMounted && index === currentImage ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                          opacity: isMounted && index === currentImage ? 1 : 0,
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

                    {/* Slider navigation arrows - Kept motion for hover/tap */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                      <motion.button
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 shadow-lg"
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

                    {/* Slider indicators - Kept motion for hover/tap */}
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
            </div>

            {/* Floating stats cards - Static */}
            <>


              {/* Bottom-left card */}
              <div className="absolute -left-10 bottom-20 bg-white rounded-xl shadow-xl p-4 z-30 flex items-center gap-4">
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
              </div>

              {/* Bottom-right card */}
              <div className="absolute right-20 bottom-10 bg-white rounded-xl shadow-xl p-4 z-30 flex items-center gap-4">
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
              </div>


            </>
          </div>
        </div>
      </div>
    </section>
  );
}
