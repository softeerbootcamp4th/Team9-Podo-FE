import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useAppContext } from "../../providers/AppProvider";
import { postEvent2Answers } from "../../api/post";
import RandomMainSection from "./RandomMainSection/RandomMainSection";
import RandomExpectations from "./RandomExpectations/RandomExpectations";
import Roulette from "../../components/randomEventPage/Roulette/Roulette";
import car from "../../assets/images/mainCar.png";
import { DRIVER_TYPE_LIST } from "../../constants/RandomEventData";
import {
  DescriptionInterface,
  RandomQuizResponseInterface,
} from "../../types/RandomEvent";

const RandomEventResultPage = () => {
  const appContext = useAppContext();
  const location = useLocation();
  const [isRouletteEnd, setIsRouletteEnd] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [resultData, setResultData] =
    useState<RandomQuizResponseInterface | null>(null);
  const randomExpectationsRef = useRef<HTMLDivElement>(null);

  const { isAuth } = appContext;
  const answer = location.state;

  const ROULETTE_END_CONTAINER_CLASSES = {
    true: "justify-start pt-[16rem]",
    false: "justify-center",
  };

  const ROULETTE_END_HEADER_CLASSES = {
    true: "gap-4 top-12",
    false: "gap-6 top-[16rem]",
  };

  const headerStyle = ROULETTE_END_HEADER_CLASSES[`${isRouletteEnd}`];

  const getDescription = (description: string): DescriptionInterface[] => {
    const descriptionList = description.split("/");
    let newDiscription: DescriptionInterface[] = [];

    descriptionList.forEach((element) => {
      if (element[0] === "h") {
        newDiscription.push({
          content: element.substring(1),
          highlighted: true,
        });
      } else if (element[0] === "d") {
        newDiscription.push({
          content: element.substring(1),
          highlighted: false,
        });
      }
    });

    return newDiscription;
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsRouletteEnd(true);
    }, 6000);

    const animationTimeout = setTimeout(() => {
      setAnimation(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(animationTimeout);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await postEvent2Answers(answer);

      setResultData(response);
    };

    fetchData();
  });

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
        className={`relative flex h-screen w-screen flex-col items-center ${ROULETTE_END_CONTAINER_CLASSES[`${isRouletteEnd}`]} gap-16 overflow-scroll bg-black transition-all duration-300`}
      >
        <div
          className={`absolute flex w-[36.5rem] flex-col items-center duration-500 ${headerStyle}`}
        >
          <p className="text-center font-kia-signature-bold text-title-3 text-gray-50">
            당신의 운전자 유형은?
          </p>
          <Roulette
            textList={DRIVER_TYPE_LIST}
            targetText={resultData?.result.type}
          ></Roulette>
          {!isRouletteEnd && (
            <img
              src={car}
              alt="자동차"
              className={`${animation ? "animate-fadeOut" : ""}`}
            />
          )}
        </div>
        {isRouletteEnd && (
          <div className="animate-moveSection">
            <RandomMainSection
              description={getDescription(resultData?.result.description)}
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
