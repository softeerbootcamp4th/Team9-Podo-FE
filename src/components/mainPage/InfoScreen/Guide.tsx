import React, {
  ComponentPropsWithRef,
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
} from "react";
import InnerHighlight from "../../../assets/svg/InnerHighlight";
import useInView from "../../../hooks/useInView";
import {
  InsideGuideTextAnimationTime,
  InsideGuideTextShowTime,
} from "../../../constants/InfoData";

const Guide = () => {
  const [showText, setShowText] = useState(true);
  const [isAnimation, setIsAnimation] = useState(false);
  const { isInView, elementRef } = useInView<HTMLDivElement>(0.9, () => {
    setShowText(true);
    setIsAnimation(false);
  });

  useEffect(() => {
    if (isInView) {
      const animationTimer = setTimeout(() => {
        setIsAnimation(true);
      }, InsideGuideTextShowTime);

      const hideTextTimer = setTimeout(() => {
        setShowText(false);
      }, InsideGuideTextShowTime + InsideGuideTextAnimationTime);

      return () => {
        clearTimeout(animationTimer);
        clearTimeout(hideTextTimer);
      };
    }
  }, [isInView]);

  return (
    <div
      ref={elementRef}
      className={`absolute top-0 h-screen w-screen ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    >
      {showText && (
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-kia-signature-bold text-title-2 text-white transition-opacity duration-500 ${
            isAnimation ? "opacity-0" : "opacity-100"
          }`}
        >
          마우스를 움직여 차량 내부를 확인해보세요
        </div>
      )}
      <InnerHighlight />
    </div>
  );
};

export default forwardRef(Guide);
