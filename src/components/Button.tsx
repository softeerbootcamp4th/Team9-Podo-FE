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
        return "w-60 h-20";
      default:
        return "";
    }
  };
  const getEnabledClasses = () => {
    switch (isEnabled) {
      case true:
        return "bg-primary";
      case false:
        return "bg-secondary";
    }
  };

  return (
    <button
      className={`flex-center ${getSizeClasses()} rounded-3xl ${getEnabledClasses()}`}
      onClick={onClick}
    >
      <p className="font-kia-signature text-title-3">
        {isEnabled ? defaultText : disabledText}
      </p>
      <img src={car} alt="" />
    </button>
  );
};

export default Button;
