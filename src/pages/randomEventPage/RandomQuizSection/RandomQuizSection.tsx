import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import Option from "../../../components/randomEventPage/Option/Option";
import {
  AnswerInterface,
  RandomQuizSectionInterface,
} from "../../../types/RandomEvent";

const ANIMATION_CLASS = {
  next: "opacity-0 translate-x-[40rem]",
  current: "opacity-100",
  prev: "opacity-0 -translate-x-[40rem]",
};

const RandomQuizSection = () => {
  const { quizInfo, answer, currentIndex, onClick } =
    useOutletContext<RandomQuizSectionInterface>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setSelectedIndex(null);
    startAnimation();
  }, [quizInfo]);

  const startAnimation = () => {
    setAnimationClass(ANIMATION_CLASS.next);
    const timeout = setTimeout(() => {
      setAnimationClass(ANIMATION_CLASS.current);
    }, 200);
    return () => clearTimeout(timeout);
  };

  const handleAnswerChange = (newAnswer: string): AnswerInterface => {
    const updatedAnswer = { ...answer };

    const answerKey = `answer${currentIndex + 1}` as keyof AnswerInterface;

    updatedAnswer[answerKey] = newAnswer;

    return updatedAnswer;
  };

  const onClickHandler = (index: number) => {
    setAnimationClass(ANIMATION_CLASS.prev);
    setSelectedIndex(index);

    const answerValue = index === 0 ? "A" : "B";
    onClick(handleAnswerChange(answerValue));
  };

  const renderOptions = () =>
    quizInfo.optionList.map((option, index) => (
      <Option
        key={index}
        label={option.label}
        content={option.content}
        state={selectedIndex === index ? "selected" : "default"}
        onClick={() => onClickHandler(index)}
      />
    ));

  return (
    <div
      role="region"
      className={`flex h-full flex-col items-center justify-evenly transition-all duration-[500ms] ease-in-out ${animationClass}`}
    >
      <p className="w-[43rem] break-keep text-center font-kia-signature text-title-2 text-white">
        {quizInfo.question}
      </p>
      <div className="flex flex-row gap-8">{renderOptions()}</div>
    </div>
  );
};

export default RandomQuizSection;
