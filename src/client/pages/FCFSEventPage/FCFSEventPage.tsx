import React, { useEffect, useRef, useState } from "react";
import FCFSHintSection from "./FCFSHintSection/FCFSHintSection";
import FCFSQuizSection from "./FCFSQuizSection/FCFSQuizSection";
import { checkAndRefreshToken, fetchFCFSQuizInfo } from "../../api/fetch";
import { QuizInfo } from "../../types/FCFSEvent";
import useAnimation from "../../hooks/useAnimation";
import { showUp, goDown } from "../../styles/keyframes";
import { FCFSHintOptions } from "../../styles/options";
import Glow from "../../components/common/Glow/Glow";
import HomeButton from "../../components/common/HomeButton/HomeButton";
import AuthTooltip from "../../components/common/AuthTooltip/AuthTooltip";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useAppContext } from "../../providers/AppProvider";
import { useErrorBoundary } from "react-error-boundary";
import { calculateLeftTime, calculateLeftTimeToEnd } from "../../utils/util";

const FCFSEventPage = () => {
  const { showBoundary } = useErrorBoundary();
  const [quizInfo, setQuizInfo] = useState<QuizInfo | null>(null);
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAppContext();
  const { elementRef, startAnimation, stopAnimation } =
    useAnimation<HTMLDivElement>({
      startKeyframes: showUp,
      cancelKeyframes: goDown,
      startOptions: FCFSHintOptions,
    });

  useEffect(() => {
    const tryFetch = async () => {
      try {
        await fetchData();
        await checkToken();
      } catch (error) {
        showBoundary(error);
      }
    };
    tryFetch();
    if (!isAuth) navigate("/");
    if (calculateLeftTimeToEnd() < 0 || calculateLeftTime() > 0) {
      navigate("/");
    }
  }, []);

  const fetchData = async () => {
    const quizData = await fetchFCFSQuizInfo();
    setQuizInfo(quizData.result);
  };

  const checkToken = async () => {
    const response = await checkAndRefreshToken();
    if (response.code === 200) {
      setIsAuth(true);
      Cookies.set("auth", response.result.accessToken, { expires: 1 / 24 });
    } else {
      setIsAuth(false);
      Cookies.remove("auth");
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center overflow-hidden bg-black">
      <HomeButton />
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
      <AuthTooltip />
    </div>
  );
};

export default FCFSEventPage;
