import React, { useRef } from "react";

interface UseAnimationProps {
  startKeyframes: Keyframe[];
  cancelKeyframes?: Keyframe[];
  options: KeyframeAnimationOptions;
  cancelOptions?: KeyframeAnimationOptions;
}

/**
 * 애니메이션 사용 Custom Hook
 * @template T - ref로 전달할 요소의 Element 정보 ex) HTMLDivELement HTMLButtonElement SVGSVGElement
 * @param {Object} props - The properties object.
 * @param {Keyframe[]} props.startKeyframes - 시작 시 적용할 keyframe 배열
 * @param {Keyframe[]} props.cancelKeyframes - 종료 시 적용할 keyframe 배열
 * @param {KeyframeAnimationOptions} props.options - 시작 시 적용할 keyframe 배열
 * @returns
 * @example
 * const AnimatedComponent = () => {
 *   const { elementRef, startAnimation } = useAnimation({
 *     startKeyframes: [
 *       { transform: 'translateX(0px)', opacity: 0 },
 *       { transform: 'translateX(100px)', opacity: 1 }
 *     ],
 *     options: { duration: 1000, fill: 'forwards' }
 *   });
 *
 *   return (
 *     <div>
 *       <button onClick={startAnimation}>Start Animation</button>
 *       <div ref={elementRef} style={{ width: 100, height: 100, backgroundColor: 'red' }}>
 *         Animate Me
 *       </div>
 *     </div>
 *   );
 * };
 */
const useAnimation = <T extends Element>({
  startKeyframes,
  cancelKeyframes = [],
  options,
  cancelOptions,
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
        cancelOptions ?? options,
      );
    }
  };

  return { elementRef, animationRef, startAnimation, stopAnimation };
};

export default useAnimation;
