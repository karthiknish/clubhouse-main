"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";

export default function TestimonialsSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const testimonials = [
    {
      quote:
        "Clubhouse has opened doors I never even knew existed. The quality of connections I've made here is unmatched. From securing new clients to finding the perfect mentor, this community has propelled my business forward in ways I couldn't have imagined.",
      name: "S.M.",
      title: "Member",
    },
    {
      quote:
        "The resources and support available through Clubhouse are invaluable. The curated events, expert talks, and mentorship opportunities have not only enhanced my skills but also expanded my mindset. I'm a better leader and strategist thanks to this community.",
      name: "A.P.",
      title: "Member",
    },
    {
      quote:
        "Clubhouse is so much more than professional networking. The exclusive events, access to incredible travel deals, and the camaraderie among members have elevated both my career and my personal life. I've built lasting friendships and experienced things I never would have otherwise.",
      name: "M.R.",
      title: "Member",
    },
  ];

  return (
    <section className="w-full py-32 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-40 -bottom-40 w-[500px] h-[500px] rounded-full bg-theme/5 opacity-50"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-theme/5 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="10"
                cy="10"
                r="1"
                fill="currentColor"
                className="text-theme"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated text */}
        <div className="text-center mb-20">
          <AnimatedText
            text="What Our Members Say"
            className="text-5xl font-bold mb-6 font-display text-theme"
            type="words"
          />
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto font-display font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hear from the visionaries and industry leaders who call The
            Clubhouse home.
          </motion.p>
          <AnimatedDivider color="bg-theme" className="mt-8" />
        </div>

        {/* Testimonials with staggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Large quote mark decoration */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-theme/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
          </div>

          {/* Testimonial cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.215, 0.61, 0.355, 1],
                    },
                  },
                }}
                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative z-10"
              >
                {/* Testimonial content */}
                <div className="mb-6">
                  {/* Small quote mark */}
                  <svg
                    className="w-8 h-8 text-theme/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>

                  <p className="text-gray-700 italic mb-4">
                    {testimonial.quote}
                  </p>

                  {/* Rating stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimonial author */}
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
