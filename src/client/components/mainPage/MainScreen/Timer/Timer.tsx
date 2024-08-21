import React, { useEffect, useState } from "react";
import useTimer from "../../../../hooks/useTimer";
import { useErrorBoundary } from "react-error-boundary";

interface TimerInterface {
  onEndHandler: () => void;
}

const Timer = ({ onEndHandler }: TimerInterface) => {
  const { reset, hours, minutes, seconds, setLeftTime } = useTimer(
    0,
    onEndHandler,
  );
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const tryFetch = () => {
      try {
        const eventSource = new EventSource(
          "https://www.hyundaiseltos.site/arrival/time",
        );

        eventSource.onmessage = (event) => {
          const date = JSON.parse(event.data);
          setLeftTime(date);
        };

        return eventSource;
      } catch (error) {
        showBoundary(error);
      }
    };

    const eventSource = tryFetch();

    return () => {
      eventSource?.close();
    };
  }, []);

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
          className="font-kia-signature-bold text-[8rem]"
        >
          {hours}:{minutes}:{seconds}
        </p>
      </div>
    </div>
  );
};

export default Timer;
