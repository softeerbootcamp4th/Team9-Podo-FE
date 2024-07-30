import React from "react";
import { Outlet } from "react-router";

const RandomEventPage = () => {
  return (
    <div>
      <div>Progress Bar</div>
      <Outlet /> {/*RandomQuizSection*/}
    </div>
  );
};

export default RandomEventPage;
