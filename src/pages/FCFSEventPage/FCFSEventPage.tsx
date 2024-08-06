import React, { useEffect, useRef, useState } from "react";
import FCFSHintSection from "./FCFSHintSection";
import FCFSQuizSection from "./FCFSQuizSection";
import { fetchFCFSQuizInfo } from "../../api/fetch";
import { QuizInfo } from "../../types/FCFSEvent";
import useAnimation from "../../hooks/useAnimation";
import { showUp, goDown } from "../../styles/keyframes";
import { FCFSHintOptions } from "../../styles/options";

const FCFSEventPage = () => {
  const [quizInfo, setQuizInfo] = useState<QuizInfo | null>(null);

  const { elementRef, startAnimation, stopAnimation } =
    useAnimation<HTMLDivElement>({
      startKeyframes: showUp,
      cancelKeyframes: goDown,
      options: FCFSHintOptions,
    });

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchData = async () => {
    const quizData = await fetchFCFSQuizInfo();
    setQuizInfo(quizData);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center overflow-hidden bg-black">
      <div className="flex flex-grow flex-col items-center justify-center">
        {quizInfo && <FCFSQuizSection quizInfo={quizInfo} />}
        <FCFSHintSection
          ref={elementRef}
          onMouseEnter={startAnimation}
          onMouseLeave={stopAnimation}
        />
        {/* <div className="pt-[15.3rem] font-kia-signature-bold text-title-4 text-white">
          마우스를 올리면 힌트가 나와요
        </div> */}
      </div>
    </div>
  );
};

export default FCFSEventPage;
