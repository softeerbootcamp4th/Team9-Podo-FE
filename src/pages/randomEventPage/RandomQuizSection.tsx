import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Option from "../../components/randomEventPage/Option/Option";
import { quizList } from "../../constants/RandomEventData";

const RandomQuizSection = () => {
  const { quizIndex } = useParams();
  const navigate = useNavigate();

  const currentIndex = quizIndex ? parseInt(quizIndex, 10) : 0;
  const quiz = quizList[currentIndex];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const onClickHandler = (index: number) => {
    setSelectedIndex(index);
    const nextQuizIndex = currentIndex + 1;
    if (nextQuizIndex < 4) {
      // 예시로 총 4개의 퀴즈가 있다고 가정
      navigate(`/event2/${nextQuizIndex}`);
    } else {
      navigate("/event2/result"); // 결과 페이지로 이동
    }
  };

  return (
    <div role="region">
      <img src={quiz.background} alt="" />
      <p>{quiz.question}</p>
      <div>
        {quiz.optionList.map((option, index) => (
          <Option
            key={index}
            label={option.label}
            content={option.content}
            state={
              selectedIndex === index
                ? "selected"
                : selectedIndex === null
                  ? "default"
                  : "unselected"
            }
            onClick={() => onClickHandler(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RandomQuizSection;
