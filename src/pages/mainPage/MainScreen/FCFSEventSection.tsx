import React, { forwardRef } from "react";
import Timer from "./Timer";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import Button from "../../../components/common/Button/Button";
import e1Gift from "../../../assets/images/e1Gift.png";

const eventData = {
  title: "Event 1.",
  description: `소형 SUV 부문 압도적 판매량 1위!\nNo.1 셀토스가 매일 1시 선착순 100명에게 스타벅스 커피를 쏩니다!`,
};

const periodInfo = [
  { title: "이벤트 기간", details: "2024.09.02.~2024.09.06 매일 오후 1시" },
  { title: "당첨자 발표", details: "응모 후 결과 즉시 확인 가능" },
];

const participationSteps = [
  { step: "Step 1.", description: "이벤트 참여를 위해\n본인인증을 한다." },
  { step: "Step 2.", description: '1시가 되면 "참여하기"\n버튼을 누른다.' },
  { step: "Step 3.", description: "The 2025 셀토스 관련\n퀴즈를 푼다." },
  { step: "Step 4.", description: "답변을 제출한다." },
];

const tips = [
  {
    text: "Tip! 퀴즈를 풀기 전 미리 차량 정보를 예습해볼까요?",
    buttonText: "예습하러가기>>",
  },
  { text: "Tip! 본인인증을 미리 해두면 빠른 이벤트 참여가 가능해요" },
];

const FCFSEventSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className="h-screen w-screen snap-start flex-col flex-center"
      ref={ref}
    >
      <EventHeader
        title={eventData.title}
        description={eventData.description}
      />
      <div className="flex h-[30rem] flex-col justify-between">
        <Timer />
        <img
          src={e1Gift}
          alt="Event"
          className="h-[5.75rem] w-[3.375rem] -translate-y-36 translate-x-60"
        />
      </div>
      <div className="h-[16.375rem] gap-4 text-gray-50 flex-center">
        <div className="flex h-full w-[26.5rem] flex-col gap-4 text-body-1-regular">
          {periodInfo.map((info, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-center gap-3 rounded-[2rem] border border-white border-opacity-20 bg-black px-5 py-3"
            >
              <p className="font-bold">{info.title}</p>
              <p>{info.details}</p>
            </div>
          ))}
        </div>
        <div className="flex h-full flex-col justify-center gap-6 rounded-[2rem] border border-white border-opacity-20 bg-black p-6">
          <div className="font-kia-signature-bold text-body-1-bold">
            참여방법
          </div>
          <div className="flex gap-9 font-kia-signature-bold">
            {participationSteps.map((step, index) => (
              <div
                key={index}
                className="flex w-[10rem] flex-col items-center justify-start gap-2"
              >
                <p className="text-center text-body-2-bold">{step.step}</p>
                <p className="whitespace-pre text-center text-body-1-bold">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <hr className="border border-gray-800" />
          <div className="flex flex-col gap-2">
            {tips.map((tip, index) => (
              <div key={index} className="flex gap-2">
                <div className="text-body-2-regular text-gray-400">
                  {tip.text}
                </div>
                {tip.buttonText && (
                  <button className="text-body-2-regular text-gray-200">
                    {tip.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={() => {}}
          size="big"
          isEnabled={true}
          defaultText="참여하기"
        />
      </div>
    </div>
  );
});

export default FCFSEventSection;
