import React, { MouseEventHandler, useState } from "react";
import Option from "../../components/randomEventPage/Option/Option";

interface RandomQuizSectionInterface {
  quizInfo: QuizInfoInterface;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface QuizInfoInterface {
  background: string;
  question: string;
  optionList: Array<OptionInterface>;
}

interface OptionInterface {
  label: string;
  content: string;
}

const RandomQuizSection = ({
  quizInfo,
  onClick,
}: RandomQuizSectionInterface) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const onClickHandler = (index: number) => {
    setSelectedIndex(index);

    onClick;
  };

  return (
    <div role="region">
      <img src={quizInfo.background} alt="" />
      <p>{quizInfo.question}</p>
      <div>
        {quizInfo.optionList.map((option, index) => (
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
