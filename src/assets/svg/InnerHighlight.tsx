import React from "react";

interface InnerHighlightProps {
  tailwind?: string;
}

const InnerHighlight = ({ tailwind }: InnerHighlightProps) => {
  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className={`${tailwind} block`}
    >
      <rect width="1920" height="1080" fill="black" fill-opacity="0.7" />
      <circle
        cx="1346"
        cy="586"
        r="46"
        fill="url(#paint0_radial_3376_453)"
        fill-opacity="0.3"
      />
      <circle
        cx="985"
        cy="697"
        r="46"
        fill="url(#paint1_radial_3376_453)"
        fill-opacity="0.3"
      />
      <circle
        cx="1125"
        cy="345"
        r="46"
        fill="url(#paint2_radial_3376_453)"
        fill-opacity="0.3"
      />
      <circle
        cx="1608"
        cy="376"
        r="46"
        fill="url(#paint3_radial_3376_453)"
        fill-opacity="0.3"
      />
      <circle cx="558" cy="156" r="46" fill="url(#paint4_radial_3376_453)" />
      <defs>
        <radialGradient
          id="paint0_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1346 586) rotate(90) scale(46)"
        >
          <stop stop-color="#A3B5C7" />
          <stop offset="1" stop-color="#A3B5C7" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(985 697) rotate(90) scale(46)"
        >
          <stop stop-color="#A3B5C7" />
          <stop offset="1" stop-color="#A3B5C7" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1125 345) rotate(90) scale(46)"
        >
          <stop stop-color="#A3B5C7" />
          <stop offset="1" stop-color="#A3B5C7" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1608 376) rotate(90) scale(46)"
        >
          <stop stop-color="#A3B5C7" />
          <stop offset="1" stop-color="#A3B5C7" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_3376_453"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(558 156) rotate(90) scale(46)"
        >
          <stop stop-color="#A3B5C7" />
          <stop offset="1" stop-color="#A3B5C7" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default InnerHighlight;
