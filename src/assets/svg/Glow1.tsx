import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";

interface GlowProps extends ComponentPropsWithRef<"svg"> {}

const Glow1 = (
  { className, ...attributes }: GlowProps,
  ref: ForwardedRef<SVGSVGElement>,
) => {
  return (
    <svg
      ref={ref}
      className={className}
      role="img"
      aria-label="glow-effect"
      width="1312"
      height="1267"
      viewBox="0 0 1312 1267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_2046_990)">
        <ellipse
          cx="547.555"
          cy="540.726"
          rx="547.555"
          ry="540.726"
          transform="matrix(0.987096 -0.160127 0.235292 0.971925 -12 195.358)"
          fill="url(#paint0_radial_2046_990)"
          fillOpacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2046_990"
          x="0.331055"
          y="0.33252"
          width="1310.77"
          height="1265.78"
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
            result="effect1_foregroundBlur_2046_990"
          />
        </filter>
        <radialGradient
          id="paint0_radial_2046_990"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(547.555 540.726) rotate(90) scale(540.726 547.555)"
        >
          <stop stopColor="#4B7C83" />
          <stop offset="1" stopColor="#111B1D" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default forwardRef(Glow1);
