import React, { useEffect, useState } from "react";
import RefreshButton from "../../../assets/svg/RefreshButton";

interface AuthTooltipProps {
  isAuth: boolean;
}

const AuthTooltip = ({ isAuth }: AuthTooltipProps) => {
  const MINUTES_IN_MS = 60 * 60 * 1000 - 1000;
  const INTERVAL = 1000;
  const [leftTime, setLeftTime] = useState<number>(MINUTES_IN_MS);

  const minutes = String(Math.floor((leftTime / (1000 * 60)) % 60)).padStart(
    2,
    "0",
  );
  const second = String(Math.floor((leftTime / 1000) % 60)).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setLeftTime((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (leftTime <= 0) {
      clearInterval(timer);
      // 종료 로직
    }

    return () => {
      clearInterval(timer);
    };
  }, [leftTime]);

  return (
    <>
      {isAuth ? (
        <div
          role="timer"
          className="h-16 w-[9.5rem] flex-col gap-1 rounded-bl-3xl rounded-br-3xl border-b border-l border-r border-[rgba(255,255,255,0.18)] bg-[rgba(126,126,126,0.20)] px-5 py-2 flex-center"
        >
          <div className="font-kia-signature text-body-2-regular">
            본인인증 만료시간
          </div>
          <div className="gap-2 flex-center">
            <span className="text-center font-kia-signature-bold text-body-2-bold">
              {minutes} : {second}
            </span>
            <RefreshButton
              onClick={() => setLeftTime(MINUTES_IN_MS)}
            ></RefreshButton>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AuthTooltip;
//styleName: Body 1_Bold(16pt, 140%);
