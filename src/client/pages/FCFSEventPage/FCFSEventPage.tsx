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

const FCFSEventPage = () => {
  const [quizInfo, setQuizInfo] = useState<QuizInfo | null>(null);
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAppContext();
  const [isError, setisError] = useState(false);
  const { elementRef, startAnimation, stopAnimation } =
    useAnimation<HTMLDivElement>({
      startKeyframes: showUp,
      cancelKeyframes: goDown,
      startOptions: FCFSHintOptions,
    });

  useEffect(() => {
    try {
      fetchData();
      checkToken();
    } catch (error) {
      setisError(true);
    }
  }, []);

  const fetchData = async () => {
    const quizData = await fetchFCFSQuizInfo();
    setQuizInfo(quizData.result);
  };

  const checkToken = async () => {
    const response = await checkAndRefreshToken();
    setIsAuth(true);
    Cookies.set("auth", response.result.accessToken, { expires: 1 / 24 });
  };

  if (!isAuth) navigate("/");
  if (isError) return <div>nono</div>;
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
