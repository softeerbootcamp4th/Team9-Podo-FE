import React from "react";
import car from "../../../assets/images/whiteRight.png"; // car 이미지 경로

interface ProgressBarInterface {
  quizIndex: number;
  maxIndex: number;
}

const ProgressBar = ({ quizIndex, maxIndex }: ProgressBarInterface) => {
  const progressPercentage = (quizIndex / maxIndex) * 100;
  const progressWidth = `${progressPercentage}%`;

  return (
    <div
      role="progressbar"
      className="relative flex h-1.5 w-[94rem] bg-gray-900"
    >
      <div
        className="h-1.5 bg-[#FFA800]"
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
