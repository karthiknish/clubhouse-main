"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";
import MagneticButton from "@/components/MagneticButton";

const AppSection = () => {
  const sectionRef = useRef(null);

  // Parallax effect for app screenshots
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -50]);

  const appFeatures = [
    {
      title: "GP Help Line",
      description:
        "Unlimited 24/7 access to medical professionals via telephone or the internet.",
      icon: (
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
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "Confidential Counselling",
      description:
        "Up to 6 sessions per year with qualified therapists for issues like bereavement, relationship issues, addiction, and more.",
      icon: (
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
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Support & Advice",
      description:
        "Access support and advice on financial worries, health concerns, family issues, legal matters, and more.",
      icon: (
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
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Mental Health Support",
      description:
        "24/7 support telephone line available for you and your family whenever you need it.",
      icon: (
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
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-32 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-50/50 rounded-bl-[100px]" />
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-blue-50/50 rounded-tr-[100px]" />

        {/* Static decorative elements */}
        <div className="absolute right-1/4 top-1/4 w-64 h-64 rounded-full bg-blue-100/30" />
        <div className="absolute left-1/4 bottom-1/4 w-48 h-48 rounded-full bg-blue-100/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated text */}
        <div className="text-center mb-20">
          <AnimatedText
            text="Clubhouse Benefits App"
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
            Your app for smarter health and wellbeing. Here for you and your
            family night and day, whenever you need it.
          </motion.p>
          <AnimatedDivider color="bg-theme" className="mt-8" />
        </div>

        {/* App showcase and features layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* App screenshots */}
          <div className="relative h-[600px] mx-auto">
            {/* Phone mockups with app screenshots */}
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              style={{ y: y1 }}
            >
              <div className="relative w-[220px] h-[450px] rounded-[36px] border-8 border-gray-800 bg-gray-800 shadow-xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-10" />
                <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col">
                    {/* Mock app screen - Home */}
                    <div className="h-12 bg-gray-800/10 backdrop-blur-sm flex items-center px-4">
                      <div className="w-8 h-8 rounded-full bg-white/20" />
                      <div className="ml-3 flex-1">
                        <div className="h-3 w-24 bg-white/30 rounded-full" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/20" />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="h-32 bg-white/10 rounded-xl mb-4" />
                      <div className="h-4 w-3/4 bg-white/20 rounded-full mb-2" />
                      <div className="h-3 w-1/2 bg-white/15 rounded-full mb-6" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-24 bg-white/10 rounded-xl" />
                        <div className="h-24 bg-white/10 rounded-xl" />
                        <div className="h-24 bg-white/10 rounded-xl" />
                        <div className="h-24 bg-white/10 rounded-xl" />
                      </div>
                    </div>
                    <div className="h-16 bg-gray-800/10 backdrop-blur-sm flex justify-around items-center px-4">
                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                      <div className="w-10 h-10 bg-white/30 rounded-full" />
                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20"
              style={{ y: y2 }}
            >
              <div className="relative w-[240px] h-[490px] rounded-[40px] border-8 border-gray-800 bg-gray-800 shadow-xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-10" />
                <div className="absolute inset-0 rounded-[28px] overflow-hidden">
                  {/* Using the actual app screen image */}
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/app-screen.png"
                      alt="Clubhouse Benefits App Screen"
                      fill={true}
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              style={{ y: y3 }}
            >
              <div className="relative w-[220px] h-[450px] rounded-[36px] border-8 border-gray-800 bg-gray-800 shadow-xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-10" />
                <div className="absolute inset-0 rounded-[24px] overflow-hidden">
                  <div className="w-full h-full bg-gray-50 flex flex-col">
                    {/* Mock app screen - Profile */}
                    <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-end pb-4">
                      <div className="w-20 h-20 rounded-full bg-white border-4 border-white" />
                      <div className="mt-2 h-4 w-32 bg-white/80 rounded-full" />
                      <div className="mt-1 h-3 w-24 bg-white/50 rounded-full" />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-around mb-6">
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-300 rounded-full mb-1" />
                          <div className="h-3 w-12 bg-gray-300 rounded-full" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-300 rounded-full mb-1" />
                          <div className="h-3 w-12 bg-gray-300 rounded-full" />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-300 rounded-full mb-1" />
                          <div className="h-3 w-12 bg-gray-300 rounded-full" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 bg-white rounded-xl shadow-sm flex items-center px-3">
                          <div className="w-6 h-6 rounded-full bg-gray-200" />
                          <div className="ml-3 h-3 w-32 bg-gray-200 rounded-full" />
                          <div className="ml-auto w-4 h-4 bg-gray-200 rounded-full" />
                        </div>
                        <div className="h-12 bg-white rounded-xl shadow-sm flex items-center px-3">
                          <div className="w-6 h-6 rounded-full bg-gray-200" />
                          <div className="ml-3 h-3 w-32 bg-gray-200 rounded-full" />
                          <div className="ml-auto w-4 h-4 bg-gray-200 rounded-full" />
                        </div>
                        <div className="h-12 bg-white rounded-xl shadow-sm flex items-center px-3">
                          <div className="w-6 h-6 rounded-full bg-gray-200" />
                          <div className="ml-3 h-3 w-32 bg-gray-200 rounded-full" />
                          <div className="ml-auto w-4 h-4 bg-gray-200 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="h-16 bg-white border-t border-gray-200 flex justify-around items-center px-4">
                      <div className="w-6 h-6 bg-gray-300 rounded-full" />
                      <div className="w-6 h-6 bg-gray-300 rounded-full" />
                      <div className="w-6 h-6 bg-gray-300 rounded-full" />
                      <div className="w-6 h-6 bg-theme rounded-full" />
                      <div className="w-6 h-6 bg-gray-300 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* App features */}
          <div>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 font-display mb-6">
                Comprehensive Health & Wellbeing Support
              </h3>

              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-theme">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 font-display">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-8 flex flex-col gap-6">
                <p className="text-gray-700">
                  Download the application and register using your unique code
                  that will have been sent to you. You&apos;ll receive this code
                  after purchasing the application via the app store or through
                  your employer&apos;s benefits program.
                </p>
                <div className="flex flex-wrap gap-6">
                  <MagneticButton
                    onClick={() =>
                      window.open(
                        "https://apps.apple.com/gb/app/clubhouse-benefits/id6499525596",
                        "_blank"
                      )
                    }
                    className="bg-black text-white hover:bg-black/90 font-display flex items-center space-x-2"
                  >
                    <img
                      width={150}
                      height={150}
                      objectFit="contain"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0-VifLPKywOa4lSu4LWfOfsBb-lNBJrrRw&s"
                      alt="App Store"
                    />
                  </MagneticButton>

                  <MagneticButton
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.mydatalife.clubhousebenefits&gl=GB",
                        "_blank"
                      )
                    }
                    className="bg-black text-white hover:bg-black/90 font-display flex items-center"
                  >
                    <img
                      width={150}
                      height={150}
                      objectFit="contain"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                      alt="Google Play Store"
                    />
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
