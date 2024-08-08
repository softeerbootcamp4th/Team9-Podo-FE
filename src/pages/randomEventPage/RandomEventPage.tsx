import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import ProgressBar from "../../components/randomEventPage/ProgressBar/ProgressBar";
import { QUIZ_LIST } from "../../constants/RandomEventData";
import { AnswerInterface } from "../../types/RandomEvent";

const RandomEventPage = () => {
  const navigate = useNavigate();
  const { quizIndex } = useParams();
  const [answer, setAnswer] = useState<AnswerInterface>({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });

  const currentIndex = quizIndex ? parseInt(quizIndex, 10) : 0;
  const maxIndex = QUIZ_LIST.length - 1;
  const quizInfo = QUIZ_LIST[currentIndex];

  const handleClick = (newAnswer: AnswerInterface) => {
    setAnswer(newAnswer);
    console.log(newAnswer);
    setTimeout(() => {
      const nextQuizIndex = currentIndex + 1;

      if (nextQuizIndex < QUIZ_LIST.length) {
        navigate(`/event2/${nextQuizIndex}`);
      } else {
        navigate("/event2/result", { state: newAnswer });
      }
    }, 200);
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
      <Outlet
        context={{
          quizInfo,
          currentIndex,
          answer,
          onClick: handleClick,
        }}
      />
    </div>
  );
};

export default RandomEventPage;
