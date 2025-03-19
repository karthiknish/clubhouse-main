"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function MagneticButton({ 
  children, 
  className = "", 
  variant = "default",
  size = "default",
  magneticEffect = true,
  ...props 
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);
  const magneticStrength = 30; // Adjust the magnetic pull strength

  const handleMouseMove = (e) => {
    if (!buttonRef.current || !magneticEffect) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from mouse to center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Calculate the magnetic pull (stronger when closer)
    setPosition({ 
      x: distanceX * 0.4, 
      y: distanceY * 0.4 
    });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || !magneticEffect) return;
    
    const handleMouseEnter = () => {
      document.addEventListener("mousemove", handleMouseMove);
    };
    
    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      resetPosition();
    };
    
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [magneticEffect]);

  return (
    <motion.div
      ref={buttonRef}
      className="inline-block"
      animate={{ 
        x: position.x, 
        y: position.y 
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    >
      <Button
        className={`relative overflow-hidden group ${className}`}
        variant={variant}
        size={size}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        
        {/* Animated background effect */}
        <motion.div 
          className="absolute inset-0 bg-white/10"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      </Button>
    </motion.div>
  );
}
