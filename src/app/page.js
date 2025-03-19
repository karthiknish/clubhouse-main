"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

// Import all home components
import {
  HeroSection,
  AboutSection,
  MembershipSection,
  LocationsSection,
  TestimonialsSection,
  CardSection,
  AppSection,
  CTASection,
  FAQSection,
  Footer,
} from "@/components/home";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const enterButton = () => setCursorVariant("button");
  const enterText = () => setCursorVariant("text");
  const leaveButton = () => setCursorVariant("default");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      {/* Custom cursor */}
      <CustomCursor
        mousePosition={mousePosition}
        cursorVariant={cursorVariant}
      />

      {/* Hero Section */}
      <section id="hero" className="w-full h-screen">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="w-full">
        <AboutSection />
      </section>

      {/* Membership Benefits Section */}
      <section id="membership" className="w-full">
        <MembershipSection />
      </section>

      {/* Locations Section */}
      <section id="locations" className="w-full">
        <LocationsSection />
      </section>

      {/* Testimonials Section */}

      {/* Card Section */}
      <section id="card" className="w-full">
        <CardSection />
      </section>

      {/* App Section */}
      <section id="app" className="w-full">
        <AppSection />
      </section>
      <section id="testimonials" className="w-full">
        <TestimonialsSection />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full">
        <FAQSection />
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="w-full">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
