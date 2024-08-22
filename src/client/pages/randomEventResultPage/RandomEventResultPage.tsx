import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useErrorBoundary } from "react-error-boundary";
import Cookies from "js-cookie";
import { useAppContext } from "../../providers/AppProvider";
import { checkAndRefreshToken, postEvent2Answers } from "../../api/fetch";
import { getDescriptionList } from "../../utils/util";
import GlowBackground from "../../components/common/GlowBackground/GlowBackground";
import HomeButton from "../../components/common/HomeButton/HomeButton";
import AuthTooltip from "../../components/common/AuthTooltip/AuthTooltip";
import Roulette from "../../components/randomEventPage/Roulette/Roulette";
import RandomMainSection from "./RandomMainSection/RandomMainSection";
import RandomExpectations from "./RandomExpectations/RandomExpectations";
import car from "../../../common/assets/images/mainCar.webp";
import {
  AnswerInterface,
  RandomQuizResponseInterface,
} from "../../types/RandomEvent";
import {
  ANIMATION_DURATION,
  DRIVER_TYPE_LIST,
  HEADER_TEXT,
  ROULETTE_END_DELAY,
} from "../../constants/RandomEventData";

const ROULETTE_END_CONTAINER_CLASSES = {
  true: "justify-start pt-[16rem]",
  false: "justify-center",
};

const ROULETTE_END_HEADER_CLASSES = {
  true: "gap-4 top-12",
  false: "gap-6 top-[16rem]",
};

const RandomEventResultPage = () => {
  const { isAuth, setIsAuth, isRandomEnd } = useAppContext();
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [answer, setAnswer] = useState<AnswerInterface | null>(null);
  const [resultData, setResultData] =
    useState<RandomQuizResponseInterface | null>(null);
  const randomExpectationsRef = useRef<HTMLDivElement>(null);

  const isRouletteEnd = timeElapsed >= ROULETTE_END_DELAY;
  const animation = timeElapsed >= ANIMATION_DURATION;

  const containerStyle = ROULETTE_END_CONTAINER_CLASSES[`${isRouletteEnd}`];
  const headerStyle = ROULETTE_END_HEADER_CLASSES[`${isRouletteEnd}`];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1000);
    }, 1000);

    if (timeElapsed >= ROULETTE_END_DELAY) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeElapsed]);

  useEffect(() => {
    if (isRandomEnd && randomExpectationsRef.current) {
      randomExpectationsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isRandomEnd]);

  useEffect(() => {
    const savedAnswer = sessionStorage.getItem("answer");
    if (!savedAnswer) {
      navigate("/event2/0");
      return;
    }

    setAnswer(JSON.parse(savedAnswer));

    const fetchData = async () => {
      const response = await postEvent2Answers(JSON.parse(savedAnswer));
      setResultData(response);
    };

    const tryFetch = async () => {
      try {
        await fetchData();
        await checkToken();
      } catch (error) {
        if (error.message === "Failed to fetch") return;
        showBoundary(error);
      }
    };

    tryFetch();
  }, []);

  return (
    <div className="flex flex-col items-center transition-all duration-500">
      <HomeButton />
      <AuthTooltip />
      <GlowBackground />
      {resultData && (
        <div
          className={`relative flex h-screen w-screen flex-col items-center ${containerStyle} gap-16 overflow-scroll transition-all duration-300`}
        >
          <div
            className={`absolute flex w-[36.5rem] flex-col items-center duration-500 ${headerStyle}`}
          >
            <p className="text-center font-kia-signature-bold text-title-3 text-gray-50">
              {HEADER_TEXT}
            </p>
            <Roulette
              textList={DRIVER_TYPE_LIST}
              targetText={resultData?.result.type}
            />
            {!isRouletteEnd && (
              <img
                src={car}
                alt="2024년 모델 셀토스"
                className={`${animation && "animate-fadeOut"}`}
              />
            )}
          </div>
          {isRouletteEnd && (
            <div className="animate-moveSection">
              <RandomMainSection
                resultTypeId={resultData.result.resultId}
                description={getDescriptionList(resultData?.result.description)}
                scenarioList={resultData?.result.scenarioList}
              />
              {isAuth && isRandomEnd && (
                <RandomExpectations ref={randomExpectationsRef} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RandomEventResultPage;
