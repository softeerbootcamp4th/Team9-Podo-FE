import React, { useEffect, useRef, useState } from "react";
import FCFSHintSection from "./FCFSHintSection/FCFSHintSection";
import FCFSQuizSection from "./FCFSQuizSection/FCFSQuizSection";
import { fetchFCFSQuizInfo } from "../../api/fetch";
import { QuizInfo } from "../../types/FCFSEvent";
import useAnimation from "../../hooks/useAnimation";
import { showUp, goDown } from "../../styles/keyframes";
import { FCFSHintOptions } from "../../styles/options";
import Glow from "../../components/common/Glow/Glow";

const FCFSEventPage = () => {
  const [quizInfo, setQuizInfo] = useState<QuizInfo | null>(null);

  const { elementRef, startAnimation, stopAnimation } =
    useAnimation<HTMLDivElement>({
      startKeyframes: showUp,
      cancelKeyframes: goDown,
      startOptions: FCFSHintOptions,
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
    setQuizInfo(quizData.result);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center overflow-hidden bg-black">
      <div className="z-10">
        <Glow />
      </div>
      <div className="z-20 flex flex-grow flex-col items-center justify-center">
        {quizInfo && <FCFSQuizSection quizInfo={quizInfo} />}
        <FCFSHintSection
          ref={elementRef}
          onMouseEnter={startAnimation}
          onMouseLeave={stopAnimation}
        />
      </div>
    </div>
  );
};

export default FCFSEventPage;
