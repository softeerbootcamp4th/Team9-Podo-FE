import React from "react";
import { useNavigate } from "react-router";
import home from "../assets/svg/Home.png";

const HomeButton = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <button className="flex-col gap-1 flex-center" onClick={onClickHandler}>
      <img src={home} alt="home" />
      <p>홈으로</p>
    </button>
  );
};

export default HomeButton;
