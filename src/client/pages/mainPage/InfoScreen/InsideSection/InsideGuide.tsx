import React, { forwardRef, useEffect, useState } from "react";
import InnerHighlight from "../../../../../common/assets/svg/InnerHighlight";
import useInView from "../../../../hooks/useInView";
import {
  INSIDE_INFO_DATA,
  InsideGuideTextAnimationTime,
  InsideGuideTextShowTime,
} from "../../../../constants/InfoData";
import { InsideInfo } from "../../../../types/InfoScreen";

const initialState: Record<InsideInfo, boolean> = {
  light: false,
  dial: false,
  display: false,
  blow: false,
  headup: false,
};

const InsideGuide = () => {
  const [showText, setShowText] = useState(true);
  const [isAnimation, setIsAnimation] = useState(false);
  const [descriptionStates, setDescriptionStates] = useState(initialState);
  const [mouseInfo, setMouseInfo] = useState({ x: 0, y: 0 });

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
      {Object.keys(descriptionStates).map((key) => {
        if (descriptionStates[key as InsideInfo]) {
          return (
            <div
              role="banner"
              key={key}
              style={{
                top: `${mouseInfo.y + 80}px`,
                left: `${mouseInfo.x - 150}px`,
              }}
              className={`absolute flex w-[25rem] flex-col gap-2 break-keep ${descriptionStates[key as InsideInfo] ? "opacity-100" : "opacity-0"} transition-all duration-700`}
            >
              <div className="font-kia-signature-bold text-title-3 text-gray-50">
                {INSIDE_INFO_DATA[key as InsideInfo].title}
              </div>
              <div className="font-kia-signature-bold text-body-1-regular text-gray-300">
                {INSIDE_INFO_DATA[key as InsideInfo].description}
              </div>
            </div>
          );
        }
      })}
      <InnerHighlight
        mouseInfo={mouseInfo}
        setMouseInfo={setMouseInfo}
        descriptionStates={descriptionStates}
        setDescriptionStates={setDescriptionStates}
      />
    </div>
  );
};

export default forwardRef(InsideGuide);
