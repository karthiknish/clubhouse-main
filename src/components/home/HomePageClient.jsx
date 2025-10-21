"use client";

import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import {
  HeroSection,
  AboutSection,
  MembershipSection,
  LocationsSection,
  TestimonialsSection,
  AppSection,
  CTASection,
  FAQSection,
  Footer,
} from "@/components/home";

export default function HomePageClient({ content }) {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroContent = content?.hero ?? {};
  const aboutContent = content?.about ?? {};
  const membershipContent = content?.membership ?? {};

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Navbar />
      {mounted ? (
        <CustomCursor mousePosition={mousePosition} cursorVariant={cursorVariant} />
      ) : null}

      <section id="hero" className="h-screen w-full">
        <HeroSection
          content={heroContent}
          onButtonEnter={() => setCursorVariant("button")}
          onButtonLeave={() => setCursorVariant("default")}
        />
      </section>

      <section id="about" className="w-full">
        <AboutSection
          content={aboutContent}
          onCtaEnter={() => setCursorVariant("button")}
          onCtaLeave={() => setCursorVariant("default")}
        />
      </section>

      <section id="membership" className="w-full">
        <MembershipSection content={membershipContent} />
      </section>

      <section id="locations" className="w-full">
        <LocationsSection />
      </section>

      <section id="app" className="w-full">
        <AppSection />
      </section>

      <section id="testimonials" className="w-full">
        <TestimonialsSection />
      </section>

      <section id="faq" className="w-full">
        <FAQSection />
      </section>

      <section id="cta" className="w-full">
        <CTASection />
      </section>

      <Footer />
    </main>
  );
}
