import React, { useState } from "react";
import { QuizInfo } from "../../types/FCFSEvent";
import { useNavigate } from "react-router";

interface FCFSQuizSectionProps {
  quizInfo: QuizInfo;
}

const IS_SELECTED = {
  true: "",
  false: "",
};

const FCFSQuizSection = ({ quizInfo }: FCFSQuizSectionProps) => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const choices = [
    quizInfo.choice1,
    quizInfo.choice2,
    quizInfo.choice3,
    quizInfo.choice4,
  ];

  const handleChoiceClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <header role="banner">오늘의 퀴즈</header>
      <h2>{quizInfo.question}</h2>
      <ol>
        {choices.map((choice, index) => (
          <li
            className={IS_SELECTED[`${index === selectedIndex}`]}
            key={choice}
            onClick={() => handleChoiceClick(index)}
          >
            {choice}
          </li>
        ))}
      </ol>
      <button onClick={() => navigate("/event1/result")}>Submit</button>
      <div>error toast</div>
    </>
  );
};

export default FCFSQuizSection;
