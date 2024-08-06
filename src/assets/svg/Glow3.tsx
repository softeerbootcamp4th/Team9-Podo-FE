import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";

interface GlowProps extends ComponentPropsWithRef<"svg"> {}

const Glow3 = (
  { className, ...attributes }: GlowProps,
  ref: ForwardedRef<SVGSVGElement>,
) => {
  return (
    <svg
      className={className}
      role="img"
      aria-label="glow-effect"
      width="1326"
      height="1256"
      viewBox="0 0 1326 1256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_2046_989)">
        <ellipse
          cx="541.589"
          cy="549.138"
          rx="541.589"
          ry="549.138"
          transform="matrix(0.963744 0.266827 -0.381866 0.924217 350.394 -23.9995)"
          fill="url(#paint0_radial_2046_989)"
          fillOpacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2046_989"
          x="-0.000488281"
          y="0.202637"
          width="1325.3"
          height="1255.66"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_2046_989"
          />
        </filter>
        <radialGradient
          id="paint0_radial_2046_989"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(541.589 549.138) rotate(90) scale(549.138 541.589)"
        >
          <stop stopColor="#1B3F72" />
          <stop offset="1" stopColor="#111B1D" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default forwardRef(Glow3);
