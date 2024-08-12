import React from "react";
import LandingScreen from "./LandingScreen/LandingScreen";
import NavigationBar from "./NavigationBar/NavigationBar";
import MainScreen from "./MainScreen/MainScreen";
import NotificationScreen from "./NotificationScreen/NotificationScreen";
import InfoScreen from "./InfoScreen/InfoScreen";
import { useLocation, useNavigate } from "react-router";

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <button
        onClick={() =>
          navigate("/auth-modal", { state: { background: location } })
        }
      >
        AuthModal
      </button>
      <LandingScreen />
      <NavigationBar />
      <MainScreen />
      <InfoScreen />
      <NotificationScreen />
    </div>
  );
};

export default MainPage;
