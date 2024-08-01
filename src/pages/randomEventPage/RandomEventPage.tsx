import React from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import ProgressBar from "../../components/randomEventPage/ProgressBar/ProgressBar";
import { quizList } from "../../constants/RandomEventData";

const RandomEventPage = () => {
  const navigate = useNavigate();
  const { quizIndex } = useParams();

  const currentIndex = quizIndex ? parseInt(quizIndex, 10) : 0;
  const maxIndex = quizList.length;
  const quizInfo = quizList[currentIndex];

  const handleClick = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const nextQuizIndex = currentIndex + 1;

        if (nextQuizIndex < quizList.length) {
          navigate(`/event2/${nextQuizIndex}`);
        } else {
          navigate("/event2/result");
        }

        resolve();
      }, 1000);
    });
  };

  return (
    <div
      className="h-screen w-screen"
      style={{ backgroundImage: `url(${quizInfo.background})` }}
    >
      <ProgressBar currentIndex={currentIndex} maxIndex={maxIndex} />
      <Outlet context={{ quizInfo, onClick: handleClick }} />
    </div>
  );
};

export default RandomEventPage;
