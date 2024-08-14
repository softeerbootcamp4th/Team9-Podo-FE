import React, { ForwardedRef, forwardRef } from "react";
import Timer from "./Timer";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import Button from "../../../components/common/Button/Button";
import e1Gift from "../../../assets/images/e1Gift.png";
import {
  FCFS_EVENT_DATA,
  FCFS_PARTICIPATION_STEPS,
  FCFS_PERIOD_INFO,
  FCFS_TIPS,
} from "../../../constants/EventData";
import { useNavigate } from "react-router";

interface FCFSEventSectionProps {
  isVisible: boolean;
  onInfoClick: () => void;
}

const FCFSEventSection = (
  { isVisible, onInfoClick }: FCFSEventSectionProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const navigate = useNavigate();
  return (
    <div
      className={`h-screen w-screen snap-start flex-col transition-all duration-200 flex-center ${!isVisible && "opacity-0"}`}
      ref={ref}
    >
      <EventHeader
        title={FCFS_EVENT_DATA.TITLE}
        description={FCFS_EVENT_DATA.DESCRIPTION}
      />
      <div className="flex h-[30rem] flex-col justify-between">
        <Timer />
        <img
          src={e1Gift}
          alt="Event"
          className="pointer-events-none z-10 h-[5.75rem] w-[3.375rem] -translate-y-12 translate-x-60"
        />
      </div>
      <div className="h-[16.375rem] gap-4 text-gray-50 flex-center">
        <div className="flex h-full w-[26.5rem] flex-col gap-4 text-body-1-regular">
          {FCFS_PERIOD_INFO.map((info, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-center gap-3 rounded-[2rem] border border-white border-opacity-20 bg-black px-5 py-3"
            >
              <p className="font-bold">{info.TITLE}</p>
              <p>{info.DETAILS}</p>
            </div>
          ))}
        </div>
        <div className="flex h-full flex-col justify-center gap-6 rounded-[2rem] border border-white border-opacity-20 bg-black p-6">
          <div className="font-kia-signature-bold text-body-1-bold">
            참여방법
          </div>
          <div className="flex gap-9 font-kia-signature-bold">
            {FCFS_PARTICIPATION_STEPS.map((step, index) => (
              <div
                key={index}
                className="flex w-[10rem] flex-col items-center justify-start gap-2"
              >
                <p className="text-center text-body-2-bold">{step.STEP}</p>
                <p className="whitespace-pre text-center text-body-1-bold">
                  {step.DESCRIPTION}
                </p>
              </div>
            ))}
          </div>
          <hr className="border border-gray-800" />
          <div className="flex flex-col gap-2">
            {FCFS_TIPS.map((tip, index) => (
              <div key={index} className="flex gap-2">
                <div className="text-body-2-regular text-gray-400">
                  {tip.TEXT}
                </div>
                {tip.BUTTON_TEXT && (
                  <button
                    className="text-body-2-regular text-gray-200"
                    onClick={onInfoClick}
                  >
                    {tip.BUTTON_TEXT}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={() => {
            navigate("event1");
          }}
          size="big"
          isEnabled={true}
          defaultText="참여하기"
        />
      </div>
    </div>
  );
};

export default forwardRef(FCFSEventSection);
