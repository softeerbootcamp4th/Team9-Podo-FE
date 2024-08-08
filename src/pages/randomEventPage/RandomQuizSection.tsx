import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import Option from "../../components/randomEventPage/Option/Option";
import {
  AnswerInterface,
  RandomQuizSectionInterface,
} from "../../types/RandomEvent";

const RandomQuizSection = () => {
  const { quizInfo, answer, currentIndex, onClick } =
    useOutletContext<RandomQuizSectionInterface>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [animationClass, setAnimationClass] = useState("");

  const ANIMATION_CLASS = {
    next: "opacity-0 translate-x-[40rem]",
    current: "opacity-100",
    prev: "opacity-0 -translate-x-[40rem]",
  };

  const onClickHandler = (index: number) => {
    setAnimationClass(ANIMATION_CLASS.prev);
    setSelectedIndex(index);

    if (index === 0) {
      onClick(handleAnswerChange("A"));
    } else if (index === 1) {
      onClick(handleAnswerChange("B"));
    }
  };

  const handleAnswerChange = (newAnswer: string) => {
    const updatedAnswer: AnswerInterface = { ...answer };

    switch (currentIndex) {
      case 0:
        updatedAnswer.answer1 = newAnswer;
        break;
      case 1:
        updatedAnswer.answer2 = newAnswer;
        break;
      case 2:
        updatedAnswer.answer3 = newAnswer;
        break;
      case 3:
        updatedAnswer.answer4 = newAnswer;
        break;
    }

    return updatedAnswer;
  };

  useEffect(() => {
    setSelectedIndex(null);
    setAnimationClass(ANIMATION_CLASS.next);
    const timeout = setTimeout(() => {
      setAnimationClass(ANIMATION_CLASS.current);
    }, 200);

    return () => clearTimeout(timeout);
  }, [quizInfo]);

  return (
    <div
      role="region"
      className={`flex h-full flex-col items-center justify-evenly transition-all duration-[500ms] ease-in-out ${animationClass} opacity-0`}
    >
      <p className="w-[43rem] break-keep text-center font-kia-signature text-title-2 text-white">
        {quizInfo.question}
      </p>
      <div className="flex flex-row gap-8">
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
