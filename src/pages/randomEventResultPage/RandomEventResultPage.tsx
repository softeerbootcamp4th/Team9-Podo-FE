import React from "react";
import RandomMainSection from "./RandomMainSection";
import RandomExpectations from "./RandomExpectations";

const RandomEventResultPage = () => {
  return (
    <div>
      <div>
        <p>당신의 운잔자 유형은?</p>
        <div>무슨무슨 유형</div>
      </div>
      <img src="" alt="자동차" />
      <RandomMainSection />
      <div>
        <p>이벤트 응모하고 시그니엘 숙박권 받자!!</p>
        <button>이벤트 참여하기</button>
      </div>
      <RandomExpectations />
    </div>
  );
};

export default RandomEventResultPage;
