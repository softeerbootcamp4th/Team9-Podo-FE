import React, { MouseEventHandler } from "react";
import car from "../assets/images/whiteRight.png";

interface ButtonInterface {
  size: "small" | "big" | "long";
  onClick: MouseEventHandler<HTMLButtonElement>;
  isEnabled: boolean;
  defaultText: string;
  disabledText?: string;
}

const Button = ({
  size,
  onClick,
  defaultText,
  disabledText,
  isEnabled,
}: ButtonInterface) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "h-20 w-[22.5rem]";
      case "big":
        return "h-[16.375rem] w-[15.625rem]";
      case "long":
        return "h-[6.25rem] w-[94rem]";
    }
  };
  const getEnabledClasses = () => {
    switch (isEnabled) {
      case true:
        return "bg-primary text-gray-950";
      case false:
        return "bg-secondary text-gray-300 pointer-events-none";
    }
  };
  const getMoveDestination = () => {
    switch (size) {
      case "small":
        return "group-hover:translate-x-[30rem]";
      case "big":
        return "group-hover:translate-x-[30rem]";
      case "long":
        return "group-hover:translate-x-[100rem]";
    }
  };

  return (
    <button
      className={`relative flex-center ${getSizeClasses()} rounded-3xl ${getEnabledClasses()} group overflow-hidden`}
      onClick={onClick}
    >
      <p className="font-kia-signature text-title-3">
        {isEnabled ? defaultText : disabledText}
      </p>
      {isEnabled ? (
        <img
          src={car}
          alt="car"
          className={`absolute ${size === "big" ? "bottom-2" : "top-2"} -left-28 h-[5.875rem] w-[13.5rem] transition-transform duration-300 ${getMoveDestination()}`}
        />
      ) : null}
    </button>
  );
};

export default Button;
