import React from "react";
import car from "../../../../common/assets/images/whiteRight.png?as=webp"; // car 이미지 경로

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
      className="flex h-[6.625rem] flex-col items-center justify-end"
    >
      <div className="relative mt-[6.25rem] flex h-1.5 w-[94rem] items-center rounded-[0.625rem] bg-gray-900 p-0.5">
        <div
          className="h-full rounded-[0.625rem] bg-[#FFA800] transition-all duration-[400ms] ease-in-out"
          style={{ width: progressWidth }}
        ></div>
        <img
          src={car}
          alt="셀토스 측면 이미지"
          className="absolute bottom-2.5 h-[4.375rem] w-40 transform transition-all duration-[400ms] ease-in-out"
          style={{
            left: `calc(${progressWidth} - 5rem)`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
