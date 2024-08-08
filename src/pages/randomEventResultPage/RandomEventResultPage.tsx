import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../providers/AppProvider";
import RandomMainSection from "./RandomMainSection/RandomMainSection";
import RandomExpectations from "./RandomExpectations/RandomExpectations";
import Roulette from "../../components/randomEventPage/Roulette/Roulette";
import car from "../../assets/images/mainCar.png";
import { DRIVER_TYPE_LIST } from "../../constants/RandomEventData";
interface ApiResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    result: string;
    type: string;
    description: string;
    scenarioList: {
      title: string;
      subtitle: string;
      image: string;
    }[];
  };
}
interface AnswerInterface {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

const RandomEventResultPage = () => {
  const driverType = "다이나믹한 모험가";
  const description = [
    { content: "복잡한 도심 속 ", highlited: false },
    { content: "안전하고 즐거운 주행경험", highlited: true },
    { content: "을 제공하는 ", highlited: false },
    { content: "The 2025 셀토스 ", highlited: true },
  ];
  const scenarioList = [
    {
      image: "path",
      title: "차로 이탈 시 경고 / 자동 조항 보조",
      subtitle:
        "정신 없이 바쁜 일상 속에서도 셀토스는 일정 속도 이상 주행 중 방향지시등 스위치 조작 없이 차로 이탈 시 경고 및 자동 조향 보조 기능으로 사용자의 안전을 지켜줍니다.",
    },
    {
      image: "path",
      title: "원격 제어 주차 및 출차",
      subtitle:
        "원격 제어를 통한 주차 및 출차 기능으로 사용자가 좁은 골목길에서도 걱정없이 주차 할 수 있게 돕습니다. ",
    },
    {
      image: "path",
      title: "네비게이션 기반 크루즈 컨트롤",
      subtitle:
        "네비게이션 기반 크루즈 컨트롤을 통해 고속도로 주행 시, 도로 상황에 맞춰 안전한 속도로 주행하도록 도와줍니다.",
    },
  ];

  const ROULETTE_END_CONTAINER_CLASSES = {
    true: "justify-start pt-[16rem]",
    false: "justify-center",
  };

  const ROULETTE_END_HEADER_CLASSES = {
    true: "gap-4 top-12",
    false: "gap-6 top-[16rem]",
  };

  const [isRouletteEnd, setIsRouletteEnd] = useState(false);
  const [animation, setAnimation] = useState(false);
  const appContext = useAppContext();
  const { isAuth } = appContext;
  const randomExpectationsRef = useRef<HTMLDivElement>(null);

  const headerStyle = ROULETTE_END_HEADER_CLASSES[`${isRouletteEnd}`];
  const EX_ANSWER = {
    answer1: "A",
    answer2: "A",
    answer3: "A",
    answer4: "A",
  };

  const postAnswers = async (
    answers: AnswerInterface,
  ): Promise<ApiResponse | null> => {
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

      console.log(response);

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

    const fetchData = async () => {
      const response = await postAnswers(EX_ANSWER);

      console.log(response);
    };

    fetchData();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(animationTimeout);
    };
  }, []);

  useEffect(() => {
    if (isAuth && randomExpectationsRef.current) {
      // RandomExpectations 요소로 스크롤
      randomExpectationsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isAuth]);

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
            targetText={driverType}
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
              description={description}
              scenarioList={scenarioList}
            />
            {isAuth && <RandomExpectations ref={randomExpectationsRef} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomEventResultPage;
