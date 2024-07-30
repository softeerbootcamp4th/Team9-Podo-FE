import React from "react";
import RefreshButton from "../assets/svg/RefreshButton";

interface AuthTooltipProps {
  isAuth: boolean;
}

const AuthTooltip = ({ isAuth }: AuthTooltipProps) => {
  return (
    <div role="timer">
      <span>59:59</span>
      <RefreshButton></RefreshButton>
    </div>
  );
};

export default AuthTooltip;
