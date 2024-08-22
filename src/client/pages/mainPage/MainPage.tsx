import React, { useEffect, useRef } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import MainScreen from "./MainScreen/MainScreen";
import NotificationScreen from "./NotificationScreen/NotificationScreen";
import InfoScreen from "./InfoScreen/InfoScreen";
import { useAppContext } from "../../providers/AppProvider";
import { checkAndRefreshToken } from "../../api/fetch";
import Cookies from "js-cookie";
import { useErrorBoundary } from "react-error-boundary";

const MainPage = () => {
  const infoRef = useRef<HTMLDivElement>(null);
  const { setIsAuth } = useAppContext();
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const tryFetch = async () => {
      try {
        await checkToken();
      } catch (error) {
        showBoundary(error);
      }
    };
    tryFetch();
  }, []);

  const checkToken = async () => {
    const response = await checkAndRefreshToken();
    if (response.code === 200) {
      setIsAuth(true);
      Cookies.set("auth", response.result.accessToken, { expires: 1 / 24 });
    } else {
      setIsAuth(false);
      Cookies.remove("auth");
    }
  };

  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-auto">
      <MainScreen ref={infoRef} />
      <InfoScreen ref={infoRef} />
      <NotificationScreen />
      <NavigationBar />
    </div>
  );
};

export default MainPage;
