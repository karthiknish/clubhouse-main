"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { isSafari, optimizedTransform } from "@/lib/motion";

export default function AnimatedText({ 
  text, 
  className = "", 
  once = true,
  delay = 0,
  type = "words" // "words" or "chars"
}) {
  const [mounted, setMounted] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Use simpler animations on Safari and mobile
    setIsLowPerformance(
      isSafari() || (typeof window !== "undefined" && window.innerWidth < 1024)
    );
  }, []);

  // Split text into words or characters
  const items =
    type === "words" ? text.split(" ").map((word) => word) : text.split("");

  // Simplified container for better performance
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: isLowPerformance
          ? 0.05
          : type === "words"
          ? 0.12
          : 0.04,
        delayChildren: delay,
      },
    }),
  };

  // Optimized child animations
  const child = {
    hidden: {
      opacity: 0,
      y: isLowPerformance ? 10 : 20,
      ...(isLowPerformance ? {} : { rotateX: -20, filter: "blur(5px)" }),
    },
    visible: {
      opacity: 1,
      y: 0,
      ...(isLowPerformance ? {} : { rotateX: 0, filter: "blur(0px)" }),
      transition: {
        type: "spring",
        damping: isLowPerformance ? 20 : 12,
        stiffness: isLowPerformance ? 150 : 100,
        mass: isLowPerformance ? 0.5 : 1,
      },
    },
  };

  // If not yet mounted, return static text to prevent hydration issues
  if (!mounted) {
    return <div className={className}>{text}</div>;
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      style={optimizedTransform}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <motion.span
            variants={child}
            className="inline-block"
            style={{
              transformStyle: isLowPerformance ? "flat" : "preserve-3d",
              display: type === "words" ? "inline-block" : "inline",
              ...optimizedTransform,
            }}
          >
            {item}
          </motion.span>
          {type === "words" && index < items.length - 1 && (
            <span className="inline-block" style={{ width: "0.3em" }}></span>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
}
