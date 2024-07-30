import React from "react";
import LandingScreen from "./LandingScreen";
import NavigationBar from "./NavigationBar";
import MainScreen from "./MainScreen";
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
