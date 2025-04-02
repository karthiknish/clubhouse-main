/**
 * Optimized motion settings for better performance across browsers, especially Safari
 */

// Default transition settings optimized for performance
export const optimizedTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.35,
};

// Optimized spring settings for smooth animations with better performance
export const optimizedSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Optimized transform settings for Safari hardware acceleration
export const optimizedTransform = {
  willChange: "transform",
  transform: "translateZ(0)",
};

// Optimized opacity settings for Safari hardware acceleration
export const optimizedOpacity = {
  willChange: "opacity",
};

// The viewport settings to trigger animations with better performance
export const optimizedViewport = {
  once: true,
  amount: 0.3,
  margin: "-100px 0px",
};

// Should we use heavy animations?
export const canUseHeavyAnimations = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 1024;
};

// Factory function to create optimized animation variants
export const createOptimizedAnimations = (customVariants) => {
  const baseTransition = optimizedTransition;

  return {
    hidden: {
      opacity: 0,
      ...(customVariants?.hidden || {}),
    },
    visible: {
      opacity: 1,
      transition: baseTransition,
      ...(customVariants?.visible || {}),
    },
    exit: {
      opacity: 0,
      transition: {
        ...baseTransition,
        duration: baseTransition.duration / 2,
      },
      ...(customVariants?.exit || {}),
    },
  };
};
