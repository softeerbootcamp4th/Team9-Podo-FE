import React, { MouseEventHandler } from "react";

interface RefreshButtonProps {
  onClick: MouseEventHandler<SVGSVGElement>;
}

const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      onClick={onClick}
      role="button"
    >
      <path
        d="M1.66602 6.99984C1.66602 10.2216 4.2776 12.8332 7.49935 12.8332C10.7211 12.8332 13.3327 10.2216 13.3327 6.99984C13.3327 3.77809 10.7211 1.1665 7.49935 1.1665V2.33317C8.59674 2.33326 9.659 2.72007 10.4995 3.42565C11.34 4.13124 11.9049 5.11045 12.0951 6.19124C12.2852 7.27203 12.0884 8.38525 11.5392 9.33533C10.99 10.2854 10.1235 11.0115 9.09207 11.3862C8.06061 11.7608 6.93011 11.7599 5.89922 11.3837C4.86832 11.0075 4.00298 10.2801 3.45523 9.32917C2.90747 8.37826 2.71235 7.26473 2.90414 6.18423C3.09594 5.10374 3.66237 4.12539 4.50393 3.42109L5.74935 4.6665V1.1665H2.24935L3.67618 2.59392C3.04454 3.14102 2.53808 3.81769 2.19122 4.57794C1.84437 5.33819 1.66524 6.1642 1.66602 6.99984Z"
        fill="#6D6D6D"
      />
    </svg>
  );
};

export default RefreshButton;
