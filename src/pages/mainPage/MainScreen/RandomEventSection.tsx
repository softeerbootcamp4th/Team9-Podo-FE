import React, { ForwardedRef, forwardRef } from "react";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import Button from "../../../components/common/Button/Button";
import e2Gift1 from "../../../assets/images/e2Gift1.png";
import e2Gift2 from "../../../assets/images/e2Gift2.png";
import e2Gift3 from "../../../assets/images/e2Gift3.png";
import {
  RANDOM_EVENT_DATA,
  RANDOM_PERIOD_INFO,
  RANDOM_PRIZE_INFO,
  RANDOM_STEPS,
} from "../../../constants/EventData";
import { useNavigate } from "react-router";

interface RandomEventSectionProps {
  isVisible: boolean;
}

const RandomEventSection = (
  { isVisible }: RandomEventSectionProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const images = [e2Gift1, e2Gift2, e2Gift3];
  const navigate = useNavigate();

  return (
    <div
      className={`flex h-screen w-screen snap-start flex-col items-center justify-around transition-all duration-200 ${!isVisible && "opacity-0"}`}
      ref={ref}
    >
      <EventHeader
        title={RANDOM_EVENT_DATA.TITLE}
        description={RANDOM_EVENT_DATA.DESCRIPTION}
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
          {RANDOM_PERIOD_INFO.map((info, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-center gap-3 rounded-[2rem] border border-white border-opacity-20 bg-black px-5 py-3"
            >
              <p className="font-bold">{info.TITLE}</p>
              <p>{info.DETAILS}</p>
              <p className="text-gray-300">{info.NOTE}</p>
            </div>
          ))}
        </div>

        <div className="flex h-full w-[26.5rem] flex-col justify-start gap-6 rounded-[2rem] border border-white border-opacity-20 bg-black p-6 font-kia-signature-bold text-body-1-bold">
          <div className="font-kia-signature-bold">경품 안내</div>
          <div className="flex flex-col gap-4">
            {RANDOM_PRIZE_INFO.map((prize, index) => (
              <p key={index} className={`${index === 0 && "text-title-4"}`}>
                {prize}
              </p>
            ))}
          </div>
        </div>

        <div className="flex h-full w-[26.5rem] flex-col justify-start gap-6 rounded-[2rem] border border-white border-opacity-20 bg-black p-6 font-kia-signature-bold text-body-1-bold">
          <div className="font-kia-signature-bold">참여 방법</div>
          <div className="flex flex-col gap-9">
            {RANDOM_STEPS.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </div>

        <Button
          onClick={() => {
            navigate("event2/0");
          }}
          size="big"
          isEnabled={true}
          defaultText="참여하기"
        />
      </div>
    </div>
  );
};

export default forwardRef(RandomEventSection);
