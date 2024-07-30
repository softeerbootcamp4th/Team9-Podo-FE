import React from "react";
import LandingScreen from "./LandingScreen/LandingScreen";
import NavigationBar from "./NavigationBar/NavigationBar";
import MainScreen from "./MainScreen/MainScreen";
import NotificationScreen from "./NotificationScreen";
import InfoScreen from "./InfoScreen";

const MainPage = () => {
  return (
    <div>
      <LandingScreen />
      <NavigationBar />
      <MainScreen />
      <InfoScreen />
      <NotificationScreen />
    </div>
  );
};

export default MainPage;
