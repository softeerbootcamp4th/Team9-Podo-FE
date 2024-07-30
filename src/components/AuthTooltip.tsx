import React, { useState } from "react";
import RefreshButton from "../assets/svg/RefreshButton";

interface AuthTooltipProps {
  isAuth: boolean;
}

const AuthTooltip = ({ isAuth }: AuthTooltipProps) => {
  const [leftTime, setLeftTime] = useState("59:00");
  return (
    <div role="timer">
      <span>{leftTime}</span>
      <RefreshButton onClick={() => setLeftTime("59:59")}></RefreshButton>
    </div>
  );
};

export default AuthTooltip;
