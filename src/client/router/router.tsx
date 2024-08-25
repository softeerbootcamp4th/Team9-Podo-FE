import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import { ErrorBoundary } from "react-error-boundary";
import FallbackPage from "../pages/fallbackPage/FallbackPage";
import LoadingSpinner from "../pages/fallbackPage/LoadingSpinner";

const FCFSEventPage = lazy(
  () => import("../pages/FCFSEventPage/FCFSEventPage"),
);
const FCFSEventResultPage = lazy(
  () => import("../pages/FCFSEventResultPage/FCFSEventResultPage"),
);
const RandomEventPage = lazy(
  () => import("../pages/randomEventPage/RandomEventPage"),
);
const RandomEventResultPage = lazy(
  () => import("../pages/randomEventResultPage/RandomEventResultPage"),
);
const AuthModal = lazy(() => import("../pages/authModal/AuthModal"));
const RandomQuizSection = lazy(
  () => import("../pages/randomEventPage/RandomQuizSection/RandomQuizSection"),
);

const RouterWithModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  return (
    <ErrorBoundary FallbackComponent={FallbackPage}>
      <Suspense fallback={<LoadingSpinner />}>
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
              <FallbackPage
                error="404"
                resetErrorBoundary={() => navigate(-1)}
              />
            }
          />
        </Routes>
        {background && (
          <Routes>
            <Route path="/auth-modal" element={<AuthModal />} />
          </Routes>
        )}
      </Suspense>
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
