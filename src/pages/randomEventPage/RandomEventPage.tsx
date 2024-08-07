import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import ProgressBar from "../../components/randomEventPage/ProgressBar/ProgressBar";
import { quizList } from "../../constants/RandomEventData";

const RandomEventPage = () => {
  const navigate = useNavigate();
  const { quizIndex } = useParams();

  const currentIndex = quizIndex ? parseInt(quizIndex, 10) : 0;
  const maxIndex = quizList.length - 1;
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
      }, 200);
    });
  };

  return (
    <div
      className="flex h-screen w-screen flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{
        background: `
          linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 50%, #000 100%),
          url(${quizInfo.background})`,
      }}
    >
      <ProgressBar currentIndex={currentIndex} maxIndex={maxIndex} />
      <Outlet context={{ quizInfo, onClick: handleClick }} />
    </div>
  );
};

export default RandomEventPage;
