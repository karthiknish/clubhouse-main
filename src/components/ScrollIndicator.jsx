"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContent = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-30"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.5,
          duration: 0.5,
        },
      }}
      onClick={scrollToContent}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={
          mounted
            ? {
                y: [0, 5, 0],
              }
            : { y: 0 }
        }
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <p className="text-white text-sm font-medium mb-2">SCROLL</p>
        <ChevronDown className="text-white w-6 h-6" />
      </motion.div>
    </motion.div>
  );
}
