import React from "react";
import { Outlet, useParams } from "react-router";
import ProgressBar from "../../components/randomEventPage/ProgressBar/ProgressBar";

const RandomEventPage = () => {
  const { quizIndex } = useParams();
  const maxIndex = 4; //api를 통해 받아오는 값
  const currentIndex = quizIndex ? parseInt(quizIndex, 10) : 0;

  return (
    <div>
      <ProgressBar currentIndex={currentIndex} maxIndex={maxIndex} />
      <Outlet /> {/*RandomQuizSection*/}
    </div>
  );
};

export default RandomEventPage;
