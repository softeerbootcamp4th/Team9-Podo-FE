import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import FCFSEventPage from "../pages/FCFSEventPage/FCFSEventPage";
import FCFSEventResultPage from "../pages/FCFSEventResultPage/FCFSEventResultPage";
import RandomEventPage from "../pages/randomEventPage/RandomEventPage";
import RandomEventResultPage from "../pages/randomEventResultPage/RandomEventResultPage";
import AuthModal from "../pages/authModal/AuthModal";
import RandomQuizSection from "../pages/randomEventPage/RandomQuizSection/RandomQuizSection";
import { ErrorBoundary } from "react-error-boundary";
import FallbackPage from "../pages/fallbackPage/FallbackPage";

const RouterWithModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  return (
    <ErrorBoundary FallbackComponent={FallbackPage}>
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/event1" element={<FCFSEventPage />} />
        <Route path="/event1/result" element={<FCFSEventResultPage />} />
        <Route path="/event2" element={<RandomEventPage />}>
          <Route path=":quizIndex" element={<RandomQuizSection />} />
        </Route>
        <Route path="/event2/result" element={<RandomEventResultPage />} />
        <Route path="/auth-modal" element={<AuthModal />} />
        <Route
          path="*"
          element={
            <FallbackPage error="404" resetErrorBoundary={() => navigate(-1)} />
          }
        />
      </Routes>
      {background && (
        <Routes>
          <Route path="/auth-modal" element={<AuthModal />} />
        </Routes>
      )}
    </ErrorBoundary>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <RouterWithModal />
    </BrowserRouter>
  );
};

export default Router;
