import React, { useEffect, useState } from "react";
import { className } from "../../../styles/tailwind";
import { TailwindPosition } from "../../../types/tailwind";

interface ToastInterface {
  content: string;
  position: TailwindPosition;
  value: number;
  delay: number;
  duration: number;
  color?: string;
}

const Toast = ({
  content,
  position,
  value,
  delay,
  duration,
  color,
}: ToastInterface) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    const animationTimer = setTimeout(() => {
      setIsDisable(true);
    }, delay + duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, []);

  if (isDisable) {
    return null;
  }

  const positionStyle = className[position][value];

  return (
    <div
      role="alert"
      className={`absolute z-10 ${positionStyle} left-1/2 h-fit w-fit -translate-x-1/2 whitespace-nowrap rounded-3xl ${color || "bg-tertiary"} px-6 py-3 font-kia-signature-bold text-body-1-bold text-gray-50 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isDisable ? "hidden" : ""}`}
    >
      {content}
    </div>
  );
};

export default Toast;
