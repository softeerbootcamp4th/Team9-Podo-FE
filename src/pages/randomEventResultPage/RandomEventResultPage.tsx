import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useAppContext } from "../../providers/AppProvider";
import RandomMainSection from "./RandomMainSection/RandomMainSection";
import RandomExpectations from "./RandomExpectations/RandomExpectations";
import Roulette from "../../components/randomEventPage/Roulette/Roulette";
import car from "../../assets/images/mainCar.png";
import { DRIVER_TYPE_LIST } from "../../constants/RandomEventData";
import {
  AnswerInterface,
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

  const postAnswers = async (
    answers: AnswerInterface,
  ): Promise<RandomQuizResponseInterface | null> => {
    try {
      const response = await fetch("/v1/lots/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..Wv4DNiAP2hL36vDs.AOwY0A-a8JH6lJWR9T_P3pTgB5o8JaMUwrehYQjpCD1uFhs3aFoWJ-wDLgnX5Jx_YT6dHfJPIXbpG3Oycammh6VQH97U2UtNChPr_t3F9ILqbXAaBcMoWYUx0YqtbgVbOybS6FTMDp7QGhXRZNzXz06gQi46AqbTPOTnVUDICYHHqRq_3efphiRNjTu4JP2OFKq9jIunoLNHCcPZFFidVBafs9R4Z9nEPD-W__uuZOuG111wD4vqjBdshkxs46Y.UyhO03YoDwLvAMmPXHV70g",
        },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error posting answers:", error);
      return null;
    }
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
      const response = await postAnswers(answer);

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
