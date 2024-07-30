import React from "react";

interface RandomMainInterface {
  driverType: "1" | "2" | "3" | "4";
  scenarioList: Array<ScenarioInterface>;
}

interface ScenarioInterface {
  img: string;
  title: string;
  content: string;
}

const RandomMainSection = () => {
  const driverType = "1";
  const scenarioList = [{ img: "path", title: "title", content: "content" }];

  return (
    <div>
      <div>
        <div>다시하기</div>
        <div>공유하기</div>
      </div>
      <div>
        <div>{driverType}</div>
        <div>
          {scenarioList.map((scenario) => (
            <div>
              <img src={scenario.img} alt="시나리오" />
              <p>{scenario.title}</p>
              <p>{scenario.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomMainSection;
