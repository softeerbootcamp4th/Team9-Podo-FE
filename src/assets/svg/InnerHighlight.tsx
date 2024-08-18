import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import { InsideInfo } from "../../types/InfoScreen";

interface InnerHighlightProps {
  setDescriptionStates: Dispatch<SetStateAction<Record<InsideInfo, boolean>>>;
  descriptionStates: Record<InsideInfo, boolean>;
  setMouseInfo: Dispatch<SetStateAction<Record<"x" | "y", number>>>;
  mouseInfo: Record<"x" | "y", number>;
}

const InnerHighlight = ({
  setDescriptionStates,
  descriptionStates,
  setMouseInfo,
  mouseInfo,
}: InnerHighlightProps) => {
  const mouseLeaveHandler = (event: MouseEvent<SVGCircleElement>) => {
    const target = event.currentTarget;
    setDescriptionStates((prev) => {
      return { ...prev, [target?.id]: false };
    });
  };

  const mouseEnterHandler = (event: MouseEvent<SVGCircleElement>) => {
    const target = event.currentTarget;
    if (!descriptionStates[target?.id as InsideInfo]) {
      setDescriptionStates((prev) => {
        return { ...prev, [target?.id]: true };
      });
      setMouseInfo({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className={`block h-screen w-screen`}
    >
      <rect width="1920" height="1080" fill="black" fillOpacity="0.7" />
      <circle
        id="light"
        cx="1346"
        cy="586"
        r="46"
        fill="url(#paint0_radial_3376_453)"
        className={`${descriptionStates["light"] ? "opacity-100" : "opacity-50"} transition-opacity`}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      />
      <circle
        id="dial"
        cx="975"
        cy="740"
        r="46"
        fill="url(#paint1_radial_3376_453)"
        className={`${descriptionStates["dial"] ? "opacity-100" : "opacity-50"} transition-opacity`}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      />
      <circle
        id="display"
        cx="1125"
        cy="345"
        r="46"
        fill="url(#paint2_radial_3376_453)"
        className={`${descriptionStates["display"] ? "opacity-100" : "opacity-50"} transition-opacity`}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      />
      <circle
        id="blow"
        cx="1608"
        cy="376"
        r="46"
        fill="url(#paint3_radial_3376_453)"
        className={`${descriptionStates["blow"] ? "opacity-100" : "opacity-50"} transition-opacity`}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      />
      <circle
        id="headup"
        cx="558"
        cy="156"
        r="46"
        fill="url(#paint4_radial_3376_453)"
        className={`${descriptionStates["headup"] ? "opacity-100" : "opacity-50"} transition-opacity`}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      />
      <defs>
        <radialGradient
          id="paint0_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1346 586) rotate(90) scale(46)"
        >
          <stop stopColor="#A3B5C7" />
          <stop offset="1" stopColor="#A3B5C7" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(975 740) rotate(90) scale(46)"
        >
          <stop stopColor="#A3B5C7" />
          <stop offset="1" stopColor="#A3B5C7" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1125 345) rotate(90) scale(46)"
        >
          <stop stopColor="#A3B5C7" />
          <stop offset="1" stopColor="#A3B5C7" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1608 376) rotate(90) scale(46)"
        >
          <stop stopColor="#A3B5C7" />
          <stop offset="1" stopColor="#A3B5C7" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(558 156) rotate(90) scale(46)"
        >
          <stop stopColor="#A3B5C7" />
          <stop offset="1" stopColor="#A3B5C7" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default InnerHighlight;
