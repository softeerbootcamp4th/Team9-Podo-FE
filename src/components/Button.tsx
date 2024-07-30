import React, { MouseEventHandler } from "react";
import car from "../assets/images/whiteRight.png";

interface ButtonInterface {
  size: "small" | "big" | "long";
  onClick: MouseEventHandler<HTMLButtonElement>;
  isEnabled: boolean;
  defaultText: string;
  disabledText?: string;
}

const SIZE_CLASSES = {
  small: "h-20 w-[22.5rem]",
  big: "h-[16.375rem] w-[15.625rem]",
  long: "h-[6.25rem] w-[94rem]",
};

const ENABLED_CLASSES = {
  true: "bg-primary text-gray-950",
  false: "bg-secondary text-gray-300 pointer-events-none",
};

const MOVE_DESTINATIONS = {
  small: "group-hover:translate-x-[30rem]",
  big: "group-hover:translate-x-[30rem]",
  long: "group-hover:translate-x-[100rem]",
};

const CAR_POSITION = {
  small: "top-2",
  big: "bottom-2",
  long: "top-2",
};

/**
 * @param size 버튼 크기
 * @param onClick 클릭 시 실행할 콜백 함수
 * @param defaultText 활성화 상태일 때 표시할 텍스트
 * @param disabledText 비활성화 상태일 때 표시할 텍스트
 * @param isEnabled 활성화 상태인지
 * @returns 버튼 컴포넌트
 */
const Button = ({
  size,
  onClick,
  defaultText,
  disabledText,
  isEnabled,
}: ButtonInterface) => {
  const sizeClasses = SIZE_CLASSES[size];
  const enabledClasses = ENABLED_CLASSES[`${isEnabled}`];
  const moveDestination = MOVE_DESTINATIONS[size];
  const carPosition = CAR_POSITION[size];

  return (
    <button
      className={`relative flex-center ${sizeClasses} rounded-3xl ${enabledClasses} group overflow-hidden`}
      onClick={onClick}
      disabled={!isEnabled}
    >
      <p className="font-kia-signature text-title-3">
        {isEnabled ? defaultText : disabledText}
      </p>
      {isEnabled && (
        <img
          src={car}
          alt="car"
          className={`absolute ${carPosition} -left-28 h-[5.875rem] w-[13.5rem] transition-transform duration-300 ${moveDestination}`}
        />
      )}
    </button>
  );
};

export default Button;
