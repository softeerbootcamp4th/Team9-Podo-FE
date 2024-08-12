import React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import MainScreen from "./MainScreen/MainScreen";
import NotificationScreen from "./NotificationScreen/NotificationScreen";
import InfoScreen from "./InfoScreen/InfoScreen";

const MainPage = () => {
  return (
    <div>
      <MainScreen />
      <InfoScreen />
      <NotificationScreen />
      <NavigationBar />
    </div>
  );
};

export default MainPage;
