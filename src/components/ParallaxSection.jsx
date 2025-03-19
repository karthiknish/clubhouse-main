"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection({ 
  children, 
  className = "", 
  bgImage,
  bgColor = "bg-blue-950",
  overlayColor = "bg-blue-950/40",
  speed = 0.5 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y }}
      >
        {bgImage ? (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        ) : (
          <div className={`absolute inset-0 w-full h-full ${bgColor}`} />
        )}
        <div className={`absolute inset-0 w-full h-full ${overlayColor}`} />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
