import React, { ForwardedRef, forwardRef } from "react";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import Button from "../../../components/common/Button/Button";
import e2Gift1 from "../../../assets/images/e2Gift1.png";
import e2Gift2 from "../../../assets/images/e2Gift2.png";
import e2Gift3 from "../../../assets/images/e2Gift3.png";

interface RandomEventSectionProps {
  isVisible: boolean;
}

const RandomEventSection = (
  { isVisible }: RandomEventSectionProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const images = [e2Gift1, e2Gift2, e2Gift3];

  const eventData = {
    title: "Event 2.",
    description: `내 운전자 유형에 맞는 셀토스 라이프스타일\n추천받고 경품 응모하기`,
  };

  const periodInfo = [
    {
      title: "이벤트 기간",
      details: "2024.09.02.~2024.09.06",
      note: "(경품 응모는 기간 내 1회만 가능)",
    },
    {
      title: "당첨자 발표",
      details: "2024.09.13",
      note: "(당첨자 연락처를 통한 개별 안내)",
    },
  ];

  const prizeInfo = [
    "1등. 시그니엘 서울 2인 숙박권 (1명)",
    "2등. 파인다이닝 2인 식사권 (3명)",
    "3등. 현대백화점 상품권 5만원권 (10명)",
    "4등. 현대백화점 상품권 1만원권 (30명)",
  ];

  const steps = [
    "Step 1. 내 셀토스 운전자 유형 확인하기",
    "Step 2. 본인인증 후 이벤트 응모 완료하기",
    "Step 3. 기대평을 입력하면 당첨 확률 up!",
  ];

  return (
    <div
      className={`h-screen w-screen snap-start flex-col transition-all duration-200 flex-center ${!isVisible && "opacity-0"}`}
      ref={ref}
    >
      <EventHeader
        title={eventData.title}
        description={eventData.description}
      />
      <div className="flex h-[30rem]">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gift ${index + 1}`}
            className="w-1/3"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            }}
          />
        ))}
      </div>
      <div className="h-[16.375rem] gap-4 text-gray-50 flex-center">
        <div className="flex h-full w-[22rem] flex-col gap-4 text-body-1-regular">
          {periodInfo.map((info, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-center gap-3 rounded-[2rem] border border-white border-opacity-20 bg-black px-5 py-3"
            >
              <p className="font-bold">{info.title}</p>
              <p>{info.details}</p>
              <p className="text-gray-300">{info.note}</p>
            </div>
          ))}
        </div>

        <div className="flex h-full w-[26.5rem] flex-col justify-start gap-6 rounded-[2rem] border border-white border-opacity-20 bg-black p-6 font-kia-signature-bold text-body-1-bold">
          <div className="font-kia-signature-bold">경품 안내</div>
          <div className="flex flex-col gap-4">
            {prizeInfo.map((prize, index) => (
              <p key={index} className={`${index === 0 && "text-title-4"}`}>
                {prize}
              </p>
            ))}
          </div>
        </div>

        <div className="flex h-full w-[26.5rem] flex-col justify-start gap-6 rounded-[2rem] border border-white border-opacity-20 bg-black p-6 font-kia-signature-bold text-body-1-bold">
          <div className="font-kia-signature-bold">참여 방법</div>
          <div className="flex flex-col gap-9">
            {steps.map((step, index) => (
              <p key={index}>{step}</p>
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
};

export default forwardRef(RandomEventSection);
