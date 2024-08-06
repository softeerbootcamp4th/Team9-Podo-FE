import React from "react";

interface ToastInterface {
  content: string;
  position: "bottom" | "top" | "-bottom" | "-top";
  value: number;
}

const Toast = ({ content, position, value }: ToastInterface) => {
  const positionStyle = `${position}-${value}`; //작동안함 => 직접 테일윈드에 작성한 적이 있는 스타일은 적용됨

  return (
    <div
      role="dialog"
      className={`absolute ${positionStyle} left-1/2 h-fit w-fit -translate-x-1/2 rounded-3xl bg-tertiary px-6 py-3 font-kia-signature-bold text-body-1-bold text-gray-50`}
    >
      {content}
    </div>
  );
};

export default Toast;
