import React from "react";
import RandomMainSection from "./RandomMainSection";
import RandomExpectations from "./RandomExpectations";

const RandomEventResultPage = () => {
  const driverType = "다이나믹한 모험가";
  const description = "description";
  const scenarioList = [{ img: "path", title: "title", content: "content" }];

  return (
    <div>
      <div>
        <p>당신의 운잔자 유형은?</p>
        <div>{driverType}</div>
      </div>
      <img src="" alt="자동차" />
      <RandomMainSection
        description={description}
        scenarioList={scenarioList}
      />
      <div>
        <p>이벤트 응모하고 시그니엘 숙박권 받자!!</p>
        <button>이벤트 참여하기</button>
      </div>
      <RandomExpectations />
    </div>
  );
};

export default RandomEventResultPage;
