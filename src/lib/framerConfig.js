"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { isSafari } from "./motion";

// Reduced motion settings for performance concerns
const reducedMotionSettings = {
  // Set to true for all reduced motion
  forceReducedMotion: false,
};

// Safari-specific settings for better performance
if (typeof window !== "undefined" && isSafari()) {
  reducedMotionSettings.transformPagePoint = (point) => {
    // Simplify precision for Safari calculations
    return {
      x: Math.round(point.x),
      y: Math.round(point.y),
    };
  };
}

// Optimized MotionConfig provider to be used at app root level
export function OptimizedMotion({ children }) {
  return (
    <LazyMotion features={domAnimation} {...reducedMotionSettings}>
      {children}
    </LazyMotion>
  );
}

// Helper for lazy-loaded animations with optimizations
export const MotionDiv = m.div;
export const MotionSpan = m.span;
export const MotionPath = m.path;

// Example usage:
// 1. Wrap your app with <OptimizedMotion>
// 2. Use MotionDiv instead of motion.div
