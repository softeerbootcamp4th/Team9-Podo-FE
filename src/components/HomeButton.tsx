import React from "react";
import home from "../assets/svg/Home.png";

const HomeButton = () => {
  return (
    <button className="flex-col gap-1 flex-center">
      <img src={home} alt="" />
      <p>홈으로</p>
    </button>
  );
};

export default HomeButton;
