import React from "react";

interface FCFSNoticeBannerProps {
  className: string;
}

const FCFSNoticeBanner = ({ className }: FCFSNoticeBannerProps) => {
  return (
    <svg
      className={className}
      width="993"
      height="264"
      viewBox="0 0 993 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bi_2430_444)">
        <path
          d="M0 79.587V708C0 732.301 19.6995 752 44 752H949C973.301 752 993 732.301 993 708V80.5942C993 59.4248 977.922 41.2107 957.058 37.6306C573.329 -28.2137 204.591 6.06347 34.725 37.1926C14.3484 40.9267 0 58.8711 0 79.587Z"
          fill="black"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_bi_2430_444"
          x="-16"
          y="-16"
          width="1025"
          height="784"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2430_444"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2430_444"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2430_444"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default FCFSNoticeBanner;
