import React, { useState } from "react";
import RandomMainSection from "./RandomMainSection/RandomMainSection";
import RandomExpectations from "./RandomExpectations/RandomExpectations";
import { useAppContext } from "../../providers/AppProvider";
import car from "../../assets/images/mainCar.png";

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
      img: "path",
      title: "차로 이탈 시 경고 / 자동 조항 보조",
      content:
        "정신 없이 바쁜 일상 속에서도 셀토스는 일정 속도 이상 주행 중 방향지시등 스위치 조작 없이 차로 이탈 시 경고 및 자동 조향 보조 기능으로 사용자의 안전을 지켜줍니다.",
    },
    {
      img: "path",
      title: "원격 제어 주차 및 출차",
      content:
        "원격 제어를 통한 주차 및 출차 기능으로 사용자가 좁은 골목길에서도 걱정없이 주차 할 수 있게 돕습니다. ",
    },
    {
      img: "path",
      title: "네비게이션 기반 크루즈 컨트롤",
      content:
        "네비게이션 기반 크루즈 컨트롤을 통해 고속도로 주행 시, 도로 상황에 맞춰 안전한 속도로 주행하도록 도와줍니다.",
    },
  ];

  const [isRouletteEnd, setIsRouletteEnd] = useState(false);
  const appContext = useAppContext();
  const { isAuth } = appContext;

  return (
    <div className="h-screen w-screen flex-col bg-black flex-center">
      <div className="flex w-[36.5rem] flex-col items-center gap-6">
        <p>당신의 운잔자 유형은?</p>
        <div>{driverType}</div>
      </div>
      <img src={car} alt="자동차" />
      {isRouletteEnd && (
        <RandomMainSection
          description={description}
          scenarioList={scenarioList}
        />
      )}
      {isRouletteEnd && isAuth && <RandomExpectations />}
    </div>
  );
};

export default RandomEventResultPage;
