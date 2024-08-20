import React, { ForwardedRef, forwardRef, useState } from "react";
import Timer from "../../../../components/mainPage/MainScreen/Timer/Timer";
import EventHeader from "../../../../components/mainPage/MainScreen/EventHeader/EventHeader";
import Button from "../../../../components/common/Button/Button";
import e1Gift from "../../../../../common/assets/images/e1Gift.png";
import {
  FCFS_EVENT_DATA,
  FCFS_PARTICIPATION_STEPS,
  FCFS_PERIOD_INFO,
  FCFS_TIPS,
} from "../../../../constants/EventData";
import { useLocation, useNavigate } from "react-router";
import { useAppContext } from "../../../../providers/AppProvider";
import { BUTTON_TEXT } from "../../../../constants/common";
import {
  calculateLeftTime,
  calculateLeftTimeToEnd,
} from "../../../../utils/util";

interface FCFSEventSectionProps {
  isVisible: boolean;
  onInfoClick: () => void;
}

const FCFSEventSection = (
  { isVisible, onInfoClick }: FCFSEventSectionProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const navigate = useNavigate();
  const { isAuth, isFCFSEnd } = useAppContext();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const onEndHandler = () => {
    setIsOpen(true);
  };

  const setText = () => {
    if (isAuth === false) return BUTTON_TEXT.NO_AUTH;
    if (isFCFSEnd === true) return BUTTON_TEXT.EVENT_END;
    if (calculateLeftTime() < 1000 * 60 * 50) return BUTTON_TEXT.EVENT_END;
    if (calculateLeftTimeToEnd() === 0) return BUTTON_TEXT.EVENT_END;
    if (isOpen === false) return BUTTON_TEXT.REMAIN_TIME;
    if (isOpen === true) return BUTTON_TEXT.START_EVENT;
    return "";
  };

  return (
    <div
      role="region"
      className={`relative flex h-screen w-screen snap-start snap-always flex-col items-center justify-around transition-all duration-200 ${!isVisible && "opacity-0"}`}
      ref={ref}
    >
      <img
        src={e1Gift}
        alt="Event"
        className="pointer-events-none absolute z-10 h-[5.75rem] w-[3.375rem] translate-x-[16rem] translate-y-20"
      />
      <EventHeader
        title={FCFS_EVENT_DATA.TITLE}
        description={FCFS_EVENT_DATA.DESCRIPTION}
      />
      <div className="flex min-h-[30rem] flex-1 flex-col items-end justify-between">
        <Timer onEndHandler={onEndHandler} />
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
            isAuth
              ? navigate("event1")
              : navigate("auth-modal", {
                  state: { background: location, event: 1, isOpen: isOpen },
                });
          }}
          size="big"
          isEnabled={isOpen || isAuth === false}
          defaultText={setText()}
          disabledText={setText()}
        />
      </div>
    </div>
  );
};

export default forwardRef(FCFSEventSection);
