import React from "react";
import { Outlet } from "react-router";

const RandomEventPage = () => {
  return (
    <div>
      <div>Progress Bar</div>
      <Outlet /> {/*QuizSection*/}
    </div>
  );
};

export default RandomEventPage;
