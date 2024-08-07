import React, { useRef } from "react";

interface UseAnimationProps {
  startKeyframes: Keyframe[];
  cancelKeyframes?: Keyframe[];
  options: KeyframeAnimationOptions;
}

const useAnimation = <T extends Element>({
  startKeyframes,
  cancelKeyframes = [],
  options,
}: UseAnimationProps) => {
  const elementRef = useRef<T | null>(null);
  const animationRef = useRef<Animation | null>(null);

  const startAnimation = () => {
    if (elementRef.current) {
      animationRef.current = elementRef.current.animate(
        startKeyframes,
        options,
      );
    }
  };

  const stopAnimation = () => {
    if (animationRef.current && elementRef.current) {
      animationRef.current = elementRef.current.animate(
        cancelKeyframes,
        options,
      );
    }
  };

  return { elementRef, animationRef, startAnimation, stopAnimation };
};

export default useAnimation;
