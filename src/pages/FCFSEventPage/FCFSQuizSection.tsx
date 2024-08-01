import React, { useState } from "react";
import { QuizInfo } from "../../types/FCFSEvent";
import { useNavigate } from "react-router";

interface FCFSQuizSectionProps {
  quizInfo: QuizInfo;
}

// tailwind constant
const IS_SELECTED = {
  true: "",
  false: "",
};

/**
 * 선착순 퀴즈 문제 섹션 컴포넌트
 * @param {QuizInfo} quizInfo - 퀴즈 정보 객체
 * @param {QuizInfo.question} quizInfo.question - 퀴즈 문제
 * @param {QuizInfo.question} quizInfo.choices - 퀴즈 선택지
 * @param {QuizInfo.question} quizInfo.answer - 퀴즈 정답
 * @returns
 */
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

  // 선택지 클릭 핸들러
  const handleChoiceClick = (index: number) => {
    setSelectedIndex(index);
  };

  // 제출버튼 클릭 핸들러
  const handleSubmitClick = () => {
    if (selectedIndex + 1 === parseInt(answer)) {
      navigate("/event1/result");
      console.log("changed");
    } else {
      // 에러 토스트 추후 처리
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
