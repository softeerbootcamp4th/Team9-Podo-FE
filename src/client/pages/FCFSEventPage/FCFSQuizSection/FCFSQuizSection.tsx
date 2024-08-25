import React, { useState } from "react";
import { ErrorToastKey, QuizInfo } from "../../../types/FCFSEvent";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import Button from "../../../components/common/Button/Button";
import { useAppContext } from "../../../providers/AppProvider";
import Toast from "../../../components/common/Toast/Toast";
import { MESSAGE } from "../../../constants/FCFSEventResultData";
import Cookies from "js-cookie";
import { fetchFCFSResult } from "../../../api/fetch";
import { useErrorBoundary } from "react-error-boundary";

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
  const { isAuth, setIsFCFSEnd } = useAppContext();
  const location = useLocation();
  const { showBoundary } = useErrorBoundary();

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [toastKey, setToastKey] = useState(0);
  const [isError, setIsError] = useState<ErrorToastKey | null>(null);
  const [isWin, setIsWin] = useState(false);

  const { choice1, choice2, choice3, choice4, answer, question } = quizInfo;

  const choices = [choice1, choice2, choice3, choice4];

  const fetchResultData = async () => {
    const quizData = await fetchFCFSResult();
    if (quizData.message === "이미 응모한 전화번호입니다.") {
      setIsError("DUPLICATE_APPLY");
      setToastKey((current) => current + 1);
    }
    if (quizData.result.success === true) {
      setIsWin(true);
      setIsFCFSEnd(true);
      navigate("/event1/result", {
        state: { leftTime: location.state.leftTime, isWin: true },
      });
    } else if (
      quizData.result.success === false &&
      quizData.result.grade === -1
    ) {
      setIsFCFSEnd(true);
      navigate("/event1/result", {
        state: { leftTime: location.state.leftTime, isWin: false },
      });
    }
  };
  // 선택지 클릭 핸들러
  const handleChoiceClick = (index: number) => {
    setSelectedIndex(index);
  };

  // 제출버튼 클릭 핸들러
  const handleSubmitClick = async () => {
    if (selectedIndex + 1 === parseInt(answer)) {
      try {
        await fetchResultData();
      } catch (error) {
        showBoundary(error);
      }
    } else {
      if (selectedIndex === -1) {
        setIsError("NO_ANSWER");
      } else {
        setIsError("WRONG_ANSWER");
      }
      setToastKey((current) => current + 1);
    }
  };

  return (
    <>
      <div className="flex-col gap-[4rem] flex-center">
        <div className="flex-col gap-700 flex-center">
          <header
            className="relative h-[4.125rem] w-[12rem] flex-center before:-inset-[0] before:content-none before:gradient-mask"
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
              className={` ${selectedIndex === index ? "bg-white/20" : "bg-white/10"} flex h-[5.75rem] w-[22rem] cursor-pointer items-center justify-start rounded-[2rem] border border-white/15 px-800 font-kia-signature-bold text-title-4 text-gray-50 hover:bg-white/20 active:scale-95`}
              key={choice}
              onClick={() => handleChoiceClick(index)}
            >
              {index + 1}. {choice}
            </li>
          ))}
        </ol>
        <div className="relative">
          {isError && (
            <Toast
              key={toastKey}
              content={MESSAGE[isError]}
              position="-top"
              value={14}
              delay={4000}
              duration={1000}
            />
          )}
          <Button
            isEnabled={true}
            size="small"
            defaultText="답변 제출"
            disabledText=""
            onClick={() => handleSubmitClick()}
          />
        </div>
      </div>
      {/* <div>error toast</div> */}
    </>
  );
};

export default FCFSQuizSection;
