"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";
import MagneticButton from "@/components/MagneticButton";

export default function MembershipSection() {
  return (
    <section
      id="membership"
      className="w-full py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated text */}
        <div className="text-center mb-20">
          <AnimatedText
            text="Membership Benefits"
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
            Joining Clubhouse is not just about gaining access to an exclusive
            network; it's about becoming part of a dynamic ecosystem designed to
            elevate your professional and personal life.
          </motion.p>
          <AnimatedDivider color="bg-theme" className="mt-8" />
        </div>

        {/* Interactive 3D membership cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative z-10">
          {[
            {
              title: "Club Savings",
              description:
                "Supercharge Your Business Growth. Tap into the power of collaboration and resources with Clubhouse membership.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              ),
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "Airport Lounge Access",
              description:
                "Not Just an Idea, a Thriving Business. Get the tools and support you need to scale with a Clubhouse membership.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "Golf Pass",
              description:
                "Your SME Success Story Starts Here. Join the Clubhouse network and unlock your business's full potential.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              ),
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "Clubhouse Education",
              description:
                "Knowledge is Power. Collaboration is Growth. Unleash the benefits of a supportive SME community with Clubhouse.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              ),
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "SEO & Content Marketing",
              description:
                "Strength in Numbers. Gain leverage, resources, and opportunities through Clubhouse membership.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              color: "from-theme to-theme/80",
              iconBg: "bg-theme/10",
              textColor: "text-theme",
            },
            {
              title: "Club Wellbeing",
              description:
                "Success Doesn't Happen Alone. Find mentorship, support, and growth within the Clubhouse network.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ),
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
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
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
                    className={`w-16 h-16 ${benefit.iconBg} rounded-full flex items-center justify-center ${benefit.textColor} z-10`}
                  >
                    {benefit.icon}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <MagneticButton
            onClick={() => {
              window.location.href = "/contact";
            }}
            className="bg-theme text-white hover:bg-theme/90 px-8 py-4 text-lg font-display"
          >
            Explore Membership Options
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
