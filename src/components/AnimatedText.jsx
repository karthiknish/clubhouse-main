"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({ 
  text, 
  className = "", 
  once = true,
  delay = 0,
  type = "words" // "words" or "chars"
}) {
  // Split text into words or characters
  const items = type === "words" 
    ? text.split(" ").map(word => word)
    : text.split("");
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: type === "words" ? 0.12 : 0.04, 
        delayChildren: delay,
      },
    }),
  };
  
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -20,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <motion.span
            variants={child}
            className="inline-block"
            style={{ 
              transformStyle: "preserve-3d",
              display: type === "words" ? "inline-block" : "inline"
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
