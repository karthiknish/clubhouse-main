"use client";

import { motion } from "framer-motion";

export default function AnimatedDivider({ className = "", color = "bg-white" }) {
  return (
    <div className={`w-full flex items-center justify-center py-8 ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className={`h-px ${color} max-w-[120px] relative overflow-hidden`}
      >
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}
