import React from "react";
import car from "../../../assets/images/whiteRight.png"; // car 이미지 경로

interface ProgressBarInterface {
  currentIndex: number;
  maxIndex: number;
}

/**
 * 퀴즈 진행 상황을 나타내는 컴포넌트
 * @param currentIndex 현재 인덱스
 * @param maxIndex 최대 인덱스
 * @returns 컴포넌트
 */
const ProgressBar = ({ currentIndex, maxIndex }: ProgressBarInterface) => {
  const progressPercentage = (currentIndex / maxIndex) * 100;
  const progressWidth = `${progressPercentage}%`;

  return (
    <div
      role="progressbar"
      className="relative flex h-1.5 w-[94rem] items-center rounded-[0.625rem] bg-gray-900 p-0.5"
    >
      <div
        className="h-full rounded-[0.625rem] bg-[#FFA800]"
        style={{ width: progressWidth }}
      ></div>
      <img
        src={car}
        alt="자동차"
        className="absolute bottom-2.5 h-[4.375rem] w-40 transform"
        style={{
          left: `calc(${progressWidth} - 5rem)`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
