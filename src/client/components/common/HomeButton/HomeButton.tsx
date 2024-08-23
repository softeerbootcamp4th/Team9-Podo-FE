import React from "react";
import { useNavigate } from "react-router";
import home from "../../../../common/assets/images/Home.png?as=webp";

const HomeButton = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <button
      className="absolute left-0 top-0 z-50 flex-col gap-1 p-[2rem] text-white/50 flex-center"
      onClick={onClickHandler}
    >
      <img src={home} alt="home" />
      <p>홈으로</p>
    </button>
  );
};

export default HomeButton;
