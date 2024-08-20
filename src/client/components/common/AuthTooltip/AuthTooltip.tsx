import React, { useEffect, useState } from "react";
import RefreshButton from "../../../../common/assets/svg/RefreshButton";
import useTimer from "../../../hooks/useTimer";
import { useAppContext } from "../../../providers/AppProvider";

const AuthTooltip = () => {
  const initialTime = 60 * 60 * 1000 - 1000;

  const { isAuth } = useAppContext();

  const { reset, minutes, seconds } = useTimer(initialTime);

  return (
    <div className="absolute right-7 top-0 z-50">
      {isAuth ? (
        <div
          role="timer"
          className="h-16 w-[9.5rem] flex-col gap-1 rounded-bl-3xl rounded-br-3xl border-b border-l border-r border-[rgba(255,255,255,0.18)] bg-[rgba(126,126,126,0.20)] px-5 py-2 flex-center"
        >
          <div className="font-kia-signature text-body-2-regular text-gray-100">
            본인인증 만료시간
          </div>
          <div className="gap-2 flex-center">
            <span className="text-center font-kia-signature-bold text-body-2-bold text-gray-300">
              {minutes} : {seconds}
            </span>
            <RefreshButton onClick={reset}></RefreshButton>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AuthTooltip;
