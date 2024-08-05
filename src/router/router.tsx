import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import FCFSEventPage from "../pages/FCFSEventPage/FCFSEventPage";
import FCFSEventResultPage from "../pages/FCFSEventResultPage/FCFSEventResultPage";
import RandomEventPage from "../pages/randomEventPage/RandomEventPage";
import RandomEventResultPage from "../pages/randomEventResultPage/RandomEventResultPage";
import AuthModal from "../pages/authModal/AuthModal";
import RandomQuizSection from "../pages/randomEventPage/RandomQuizSection";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/event1",
    element: <FCFSEventPage />,
  },
  {
    path: "/event1/result",
    element: <FCFSEventResultPage />,
  },
  {
    path: "/event2",
    element: <RandomEventPage />,
    children: [
      {
        path: ":quizIndex",
        element: <RandomQuizSection />,
      },
    ],
  },
  {
    path: "/event2/result",
    element: <RandomEventResultPage />,
  },
  {
    path: "/auth-modal",
    element: <AuthModal />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);
