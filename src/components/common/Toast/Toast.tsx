import React, { useEffect, useState } from "react";

interface ToastInterface {
  content: string;
  position: "bottom" | "top" | "-bottom" | "-top";
  value: number;
  delay: number;
  duration: number;
}

const Toast = ({
  content,
  position,
  value,
  delay,
  duration,
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

  const positionStyle = `${position}-${value}`; //작동안함 => 직접 테일윈드에 작성한 적이 있는 스타일은 적용됨

  return (
    <div
      role="dialog"
      className={`absolute ${positionStyle} left-1/2 h-fit w-fit -translate-x-1/2 rounded-3xl bg-tertiary px-6 py-3 font-kia-signature-bold text-body-1-bold text-gray-50 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${isDisable ? "hidden" : ""}`}
    >
      {content}
    </div>
  );
};

export default Toast;
