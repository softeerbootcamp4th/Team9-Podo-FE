import React, { useState } from "react";
import { QuizInfo } from "../../types/FCFSEvent";
import { useNavigate } from "react-router";
import Button from "../../components/common/Button/Button";

interface FCFSQuizSectionProps {
  quizInfo: QuizInfo;
}

// tailwind constant
const IS_SELECTED = {
  true: "bg-white/20",
  false: "bg-white/5",
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

  const { choice1, choice2, choice3, choice4, answer, question } = quizInfo;

  const choices = [choice1, choice2, choice3, choice4];

  // 선택지 클릭 핸들러
  const handleChoiceClick = (index: number) => {
    setSelectedIndex(index);
  };

  // 제출버튼 클릭 핸들러
  const handleSubmitClick = () => {
    if (selectedIndex + 1 === parseInt(answer)) {
      navigate("/event1/result");
    } else {
      // 에러 토스트 추후 처리
    }
  };

  return (
    <>
      <div className="flex-col gap-[4rem] flex-center">
        <div className="flex-col gap-700 flex-center">
          <header
            className="before:gradient-mask relative h-[4.125rem] w-[12rem] flex-center before:-inset-[0] before:content-none"
            role="banner"
          >
            <p className="text-center font-kia-signature-bold text-title-3 gradient-text">
              오늘의 퀴즈
            </p>
          </header>
          <h2 className="font-kia-signature-bold text-title-2 text-gray-50">
            {question}
          </h2>
        </div>
        <ol className="flex gap-800">
          {choices.map((choice, index) => (
            <li
              className={` ${selectedIndex === index ? "bg-white/20" : "bg-white/10"} flex h-[5.75rem] w-[22rem] items-center justify-start rounded-[2rem] border border-white/15 px-800 font-kia-signature-bold text-title-4 text-gray-50 hover:bg-white/20`}
              key={choice}
              onClick={() => handleChoiceClick(index)}
            >
              {index + 1}. {choice}
            </li>
          ))}
        </ol>
        <Button
          isEnabled={true}
          size="small"
          defaultText="답변 제출"
          disabledText=""
          onClick={() => handleSubmitClick()}
        />
      </div>
      {/* <div>error toast</div> */}
    </>
  );
};

export default FCFSQuizSection;
