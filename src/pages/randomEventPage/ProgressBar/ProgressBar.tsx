import React from "react";

interface ProgressBarInterface {
  quizIndex: number;
  maxIndex: number;
}

const ProgressBar = ({ quizIndex, maxIndex }: ProgressBarInterface) => {
  return <div role="progressbar"></div>;
};

export default ProgressBar;
