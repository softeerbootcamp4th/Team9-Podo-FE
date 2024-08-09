import React, { MouseEventHandler } from "react";

interface FCFSKeyButtonProps {
  onClick: MouseEventHandler<SVGSVGElement>;
  className: string;
}

const FCFSKeyButton = ({ onClick, className }: FCFSKeyButtonProps) => {
  return (
    <svg
      role="button"
      aria-label="car-key"
      className={className}
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="46" cy="46" r="46" fill="url(#paint0_radial_2430_433)" />
      <defs>
        <radialGradient
          id="paint0_radial_2430_433"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46 46) rotate(90) scale(46)"
        >
          <stop stopColor="#A3B5C7" />
          <stop offset="1" stopColor="#A3B5C7" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default FCFSKeyButton;
