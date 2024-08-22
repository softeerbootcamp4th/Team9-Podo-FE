import React from "react";
import { TooltipInterface } from "../../../types/RandomEvent";

const Tooltip = ({ isVisible, content }: TooltipInterface) => {
  return (
    <div
      className={`absolute -top-[4.5rem] right-0 text-nowrap rounded-full bg-[#4B7C83] px-6 py-3 transition-opacity duration-200 flex-center ${isVisible ? "opacity-100" : "animate-fadeOut"}`}
    >
      {content}
      <div
        style={{
          position: "absolute",
          transform: "rotate(90deg)",
          top: "50%",
          left: "80%",
          border: "solid transparent",
          borderTopColor: "#4B7C83",
          borderWidth: "20px",
          marginLeft: "-20px",
          pointerEvents: "none",
          content: '""',
        }}
      />
    </div>
  );
};

export default Tooltip;
