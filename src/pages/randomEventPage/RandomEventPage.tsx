import React from "react";
import { Outlet } from "react-router";
import ProgressBar from "./ProgressBar/ProgressBar";

const RandomEventPage = () => {
  return (
    <div>
      <ProgressBar />
      <Outlet /> {/*RandomQuizSection*/}
    </div>
  );
};

export default RandomEventPage;
