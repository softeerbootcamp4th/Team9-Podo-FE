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

  const { answer, question } = quizInfo;

  const handleChoiceClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSubmitClick = () => {
    if (selectedIndex + 1 === parseInt(answer)) {
      navigate("/event1/result");
      console.log("changed");
    }
  };

  return (
    <>
      <header role="banner">오늘의 퀴즈</header>
      <h2>{question}</h2>
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
      <button onClick={handleSubmitClick}>Submit</button>
      <div>error toast</div>
    </>
  );
};

export default FCFSQuizSection;
