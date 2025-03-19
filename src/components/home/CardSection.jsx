"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import AnimatedDivider from "@/components/AnimatedDivider";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";

export default function CardSection() {
  const features = [
    {
      title: "Exclusive Discounts",
      description: "Access special rates and offers from our premium partners across retail, travel, and lifestyle brands.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Digital Wallet",
      description: "Store your membership details, track rewards, and access digital payment options all in one place.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Contactless Access",
      description: "Seamlessly enter Clubhouse locations and access member-only areas with a simple tap of your card.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Reward Points",
      description: "Earn points with every transaction and interaction, redeemable for exclusive experiences and benefits.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-32 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-blue-50 opacity-50" />
        <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-blue-50 opacity-50" />
        
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated text */}
        <div className="text-center mb-20">
          <AnimatedText
            text="The Clubhouse Card"
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
            Unlock a world of exclusive benefits and seamless experiences with our premium membership card.
          </motion.p>
          <AnimatedDivider color="bg-theme" className="mt-8" />
        </div>
        
        {/* Card and features layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Card visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <TiltCard intensity={15} className="max-w-md mx-auto">
              <div className="relative aspect-[1.586/1] w-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Card background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
                
                {/* Card pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="800" height="500" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Card content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Card header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white text-2xl font-bold font-display tracking-wider">CLUBHOUSE</h3>
                      <p className="text-white/70 text-sm">PREMIUM MEMBERSHIP</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Card chip and contactless */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-10 bg-yellow-200/90 rounded-md flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 flex flex-col">
                        <div className="h-1/3 bg-yellow-400/30" />
                        <div className="h-1/3 bg-yellow-400/20" />
                        <div className="h-1/3 bg-yellow-400/10" />
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  {/* Card number */}
                  <div className="text-white font-mono tracking-widest text-lg">
                    •••• •••• •••• 4242
                  </div>
                  
                  {/* Card footer */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/70 text-xs uppercase">Member Since</p>
                      <p className="text-white font-medium">03/25</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs uppercase">Valid Thru</p>
                      <p className="text-white font-medium">03/30</p>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs uppercase">Member</p>
                      <p className="text-white font-medium">JOHN DOE</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-100 z-0"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-purple-100 z-0"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Card features */}
          <div>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 font-display mb-6">Elevate Your Experience</h3>
              
              {features.map((feature, index) => (
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
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 font-display">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
              
              <div className="pt-6">
                <MagneticButton 
                  className="bg-theme text-white hover:bg-theme/90 font-display"
                >
                  Request Your Card
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
