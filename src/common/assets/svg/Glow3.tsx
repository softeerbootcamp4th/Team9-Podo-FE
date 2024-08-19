import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";

interface GlowProps extends ComponentPropsWithRef<"svg"> {}

const Glow3 = (
  { className, ...attributes }: GlowProps,
  ref: ForwardedRef<SVGSVGElement>,
) => {
  return (
    <svg
      ref={ref}
      role="img"
      className={className}
      aria-label="glow-effect"
      width="960"
      height="1080"
      viewBox="0 0 1282 1126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_2046_988)">
        <ellipse
          cx="425.653"
          cy="570.413"
          rx="425.653"
          ry="570.413"
          transform="matrix(0.815659 -0.578533 0.726907 0.686736 -121 417.509)"
          fill="url(#paint0_radial_2046_988)"
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2046_988"
          x="0.0133057"
          y="0.220215"
          width="1281.62"
          height="1125.51"
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
            result="effect1_foregroundBlur_2046_988"
          />
        </filter>
        <radialGradient
          id="paint0_radial_2046_988"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(425.653 570.413) rotate(90) scale(570.413 425.653)"
        >
          <stop stopColor="#F2F2F2" />
          <stop offset="1" stopColor="#111B1D" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default forwardRef(Glow3);
