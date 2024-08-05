import React from "react";
import Button from "../../../components/common/Button/Button";
import { useAppContext } from "../../../providers/AppProvider";

interface RandomMainInterface {
  description: Array<string>;
  scenarioList: Array<ScenarioInterface>;
}

interface ScenarioInterface {
  img: string;
  title: string;
  content: string;
}

const RandomMainSection = ({
  description,
  scenarioList,
}: RandomMainInterface) => {
  const appContext = useAppContext();
  const { isAuth, isRandomEnd } = appContext;

  return (
    <div className="w-[94rem]">
      <div className="relative flex h-[36.25rem] w-[94rem] flex-col gap-6 rounded-[2.5rem] border-white border-opacity-15 bg-white bg-opacity-10 p-10 backdrop-blur-lg">
        <div className="absolute right-0 flex gap-8">
          <div>다시하기</div>
          <div>공유하기</div>
        </div>
        <div className="font-kia-signature-bold text-title-3 text-gray-400">
          {description}
        </div>
        <hr className="h-[1px] bg-gray-400" />
        <div className="flex gap-6">
          {scenarioList.map((scenario, index) => (
            <div className="flex flex-col gap-3">
              <p className="font-kia-signature-bold text-body-1-bold text-gray-50">{`${index + 1}.`}</p>
              <img
                src={scenario.img}
                alt="시나리오"
                className="h-[15.25rem] w-[28.75rem] rounded-xl"
              />
              <p className="font-kia-signature-bold text-title-4 text-gray-50">
                {scenario.title}
              </p>
              <p className="w-[26rem] font-kia-signature text-body-1-regular text-gray-300">
                {scenario.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-9 flex flex-col gap-4">
        <p className="font-kia-signature text-gray-200 flex-center">
          이벤트 응모하고&nbsp;
          <span className="font-kia-signature-bold text-gray-50">
            {"시그니엘 숙박권"}
          </span>
          &nbsp;받자!!
        </p>
        <Button
          size="long"
          onClick={() => {}}
          defaultText="본인인증하고 이벤트 참여하기"
          disabledText="이벤트 참여 완료"
          isEnabled={true}
        ></Button>
      </div>
    </div>
  );
};

export default RandomMainSection;
