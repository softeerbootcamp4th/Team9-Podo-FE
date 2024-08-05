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

  const [selectedIndex, setSelectedIndex] = useState(1);

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
    console.log(selectedIndex);
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
      <div className="flex-col gap-[4rem] flex-center">
        <div className="flex-col gap-700 flex-center">
          <header
            className="h-[4.125rem] w-[12rem] rounded-[12rem] border p-500 px-800 text-center font-kia-signature-bold text-title-3 flex-center"
            style={{
              backgroundImage:
                "linear-gradient(#fff, #fff), linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box, text",
              border: "1px solid transparent",
            }}
            role="banner"
          >
            <span
              style={{
                backgroundImage:
                  "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              오늘의 퀴즈
            </span>
          </header>
          <h2 className="font-kia-signature-bold text-title-2 text-gray-50">
            {question}
          </h2>
        </div>
        <ol className="flex gap-800">
          {choices.map((choice, index) => (
            <li
              className={
                IS_SELECTED[`${index === selectedIndex}`] +
                " border-white/18 flex h-[5.75rem] w-[22rem] items-center justify-start rounded-[2rem] border bg-white/5 p-500 px-800 font-kia-signature-bold text-title-4 text-gray-50 hover:bg-white/20"
              }
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
