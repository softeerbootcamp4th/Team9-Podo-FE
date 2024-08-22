import React, { useEffect, useState } from "react";
import useTimer from "../../../../hooks/useTimer";
import { useErrorBoundary } from "react-error-boundary";

interface TimerInterface {
  onEndHandler: () => void;
  time: number;
}

const Timer = ({ onEndHandler, time }: TimerInterface) => {
  const { reset, hours, minutes, seconds, setLeftTime } = useTimer(
    0,
    onEndHandler,
  );

  useEffect(() => {
    setLeftTime(time);
  }, [time]);

  return (
    <div className="relative h-[13rem] w-[54rem] flex-center">
      <div className="relative h-full w-full flex-center before:-inset-[0] before:content-none before:gradient-mask">
        <p
          style={{
            backgroundImage:
              "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          className={`font-kia-signature-bold ${hours === "00" && minutes === "00" && seconds === "00" ? "text-7xl" : "text-[8rem]"}`}
        >
          {hours === "00" && minutes === "00" && seconds === "00"
            ? "이벤트가 진행 중입니다."
            : `${hours}:${minutes}:${seconds}`}
        </p>
      </div>
    </div>
  );
};

export default Timer;
