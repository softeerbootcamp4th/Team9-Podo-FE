import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useAppContext } from "../../providers/AppProvider";
import { postEvent2Answers } from "../../api/post";
import RandomMainSection from "./RandomMainSection/RandomMainSection";
import RandomExpectations from "./RandomExpectations/RandomExpectations";
import Roulette from "../../components/randomEventPage/Roulette/Roulette";
import car from "../../../common/assets/images/mainCar.png";
import { DRIVER_TYPE_LIST } from "../../constants/RandomEventData";
import { RandomQuizResponseInterface } from "../../types/RandomEvent";
import { getDescriptionList } from "../../utils/util";
import { LONG_BUTTON_TEXT } from "../../constants/common";
import { useErrorBoundary } from "react-error-boundary";

const ANIMATION_DURATION = 5000;
const ROULETTE_END_DELAY = 6000;
const HEADER_TEXT = "당신의 운전자 유형은?";

const ROULETTE_END_CONTAINER_CLASSES = {
  true: "justify-start pt-[16rem]",
  false: "justify-center",
};

const ROULETTE_END_HEADER_CLASSES = {
  true: "gap-4 top-12",
  false: "gap-6 top-[16rem]",
};

const RandomEventResultPage = () => {
  const appContext = useAppContext();
  const location = useLocation();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const { showBoundary } = useErrorBoundary();
  const [resultData, setResultData] =
    useState<RandomQuizResponseInterface | null>(null);
  const randomExpectationsRef = useRef<HTMLDivElement>(null);

  const { isAuth } = appContext;
  const answer = location.state;

  const isRouletteEnd = timeElapsed >= ROULETTE_END_DELAY;
  const animation = timeElapsed >= ANIMATION_DURATION;

  const containerStyle = ROULETTE_END_CONTAINER_CLASSES[`${isRouletteEnd}`];
  const headerStyle = ROULETTE_END_HEADER_CLASSES[`${isRouletteEnd}`];

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
    const fetchData = async () => {
      const response = await postEvent2Answers(answer);
      setResultData(response);
    };

    const tryFetch = async () => {
      try {
        await fetchData();
      } catch (error) {
        showBoundary(error);
      }
    };
    tryFetch();
  }, []);

  useEffect(() => {
    if (isAuth && randomExpectationsRef.current) {
      randomExpectationsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isAuth]);

  if (resultData === null) return null;

  return (
    <div className="flex flex-col items-center transition-all duration-500">
      <div
        className={`relative flex h-screen w-screen flex-col items-center ${containerStyle} gap-16 overflow-scroll bg-black transition-all duration-300`}
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
              alt="자동차"
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
            {isAuth && <RandomExpectations ref={randomExpectationsRef} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomEventResultPage;
