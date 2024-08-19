import React, { useRef } from "react";

export interface UseAnimationProps {
  startKeyframes: Keyframe[];
  cancelKeyframes?: Keyframe[];
  afterStartKeyframes?: Keyframe[];
  startOptions: KeyframeAnimationOptions;
  cancelOptions?: KeyframeAnimationOptions;
  afterStartOptions?: KeyframeAnimationOptions;
}

/**
 * 애니메이션 사용 Custom Hook
 * @template T - ref로 전달할 요소의 Element 정보 ex) HTMLDivELement HTMLButtonElement SVGSVGElement
 * @param {Object} props - The properties object.
 * @param {Keyframe[]} props.startKeyframes - 시작 시 적용할 keyframe 배열
 * @param {Keyframe[]} props.cancelKeyframes - 종료 시 적용할 keyframe 배열
 * @param {Keyframe[]} props.afterStartKeyframes - 시작 종료 시 적용할 keyframe 배열
 * @param {KeyframeAnimationOptions} props.startOptions - 시작 시 적용할 keyframe 배열
 * @param {KeyframeAnimationOptions} props.cancelOptions - 종료 시 적용할 keyframe 배열
 * @param {KeyframeAnimationOptions} props.afterStartOptions - 시작 종료 시 적용할 keyframe 배열
 * @returns
 * @example
 * const AnimatedComponent = () => {
 *   const { elementRef, startAnimation } = useAnimation({
 *     startKeyframes: [
 *       { transform: 'translateX(0px)', opacity: 0 },
 *       { transform: 'translateX(100px)', opacity: 1 }
 *     ],
 *     startOptions: { duration: 1000, fill: 'forwards' }
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
  afterStartKeyframes = [],
  startOptions,
  cancelOptions,
  afterStartOptions,
}: UseAnimationProps) => {
  const elementRef = useRef<T | null>(null);
  const animationRef = useRef<Animation | null>(null);

  const startAnimation = async () => {
    const element = elementRef.current;
    if (!element) return;
    animationRef.current = element.animate(startKeyframes, startOptions);

    if (afterStartKeyframes.length > 0 && animationRef.current) {
      await animationRef.current.finished;
      element.animate(afterStartKeyframes, afterStartOptions);
    }
  };

  const stopAnimation = () => {
    const element = elementRef.current;
    const animation = animationRef.current;
    if (!element || !animation) return;

    animationRef.current = element.animate(
      cancelKeyframes,
      cancelOptions ?? startOptions,
    );
  };

  return { elementRef, animationRef, startAnimation, stopAnimation };
};

export default useAnimation;
