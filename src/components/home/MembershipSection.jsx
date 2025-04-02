"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Plane,
  LandPlot,
  GraduationCap,
  Globe,
  Heart,
} from "lucide-react";

import TiltCard from "@/components/TiltCard";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";
import MagneticButton from "@/components/MagneticButton";

export default function MembershipSection() {
  // Default to low performance for SSR

  return (
    <section
      id="membership"
      className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background decorative elements - only loaded for high-performance devices */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        <motion.div
          className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-theme/10 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated text */}
        <div className="text-center mb-16 md:mb-20">
          <AnimatedText
            text="Membership Benefits"
            className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 font-display text-theme"
            type="words"
          />
          {/* Use a simpler animation for the subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-display font-light px-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Joining Clubhouse is not just about gaining access to an exclusive
            network; it's about becoming part of a dynamic ecosystem designed to
            elevate your professional and personal life.
          </motion.p>
          <AnimatedDivider color="bg-theme" className="mt-6 md:mt-8" />
        </div>

        {/* Interactive 3D membership cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative z-10">
          {[
            {
              title: "Club Savings",
              description:
                "Supercharge Your Business Growth. Tap into the power of collaboration and resources with Clubhouse membership.",
              icon: <Building2 className="h-8 w-8" />,
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "Airport Lounge Access",
              description:
                "Not Just an Idea, a Thriving Business. Get the tools and support you need to scale with a Clubhouse membership.",
              icon: <Plane className="h-8 w-8" />,
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "Golf Pass",
              description:
                "Your SME Success Story Starts Here. Join the Clubhouse network and unlock your business's full potential.",
              icon: <LandPlot className="h-8 w-8" />,
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "Clubhouse Education",
              description:
                "Knowledge is Power. Collaboration is Growth. Unleash the benefits of a supportive SME community with Clubhouse.",
              icon: <GraduationCap className="h-8 w-8" />,
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "SEO & Content Marketing",
              description:
                "Strength in Numbers. Gain leverage, resources, and opportunities through Clubhouse membership.",
              icon: <Globe className="h-8 w-8" />,
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "Club Wellbeing",
              description:
                "Success Doesn't Happen Alone. Find mentorship, support, and growth within the Clubhouse network.",
              icon: <Heart className="h-8 w-8" />,
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
          ].map((benefit, index) => (
            <TiltCard key={index} className="h-full" intensity={5}>
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-xl h-full group hover:shadow-2xl transition-shadow duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                {/* Card header with gradient */}
                <div
                  className={`h-24 bg-gradient-to-r ${benefit.color} flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Animated background particles */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, Math.random() * 50 - 25],
                        y: [0, Math.random() * 50 - 25],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  ))}

                  {/* Icon */}
                  <div
                    className={`w-28 h-28 ${benefit.iconBg} rounded-full flex items-center justify-center ${benefit.textColor} z-10`}
                  >
                    <div className="scale-150">{benefit.icon}</div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 ${benefit.textColor} font-display`}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <MagneticButton
            onClick={() => {
              window.location.href = "/contact";
            }}
            className="bg-theme text-white hover:bg-theme/90 px-8 py-4 text-lg font-display"
            intensity={10}
          >
            Explore Membership Options
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
