import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import FCFSEventPage from "../pages/FCFSEventPage/FCFSEventPage";
import FCFSEventResultPage from "../pages/FCFSEventResultPage/FCFSEventResultPage";
import RandomEventPage from "../pages/randomEventPage/RandomEventPage";
import RandomEventResultPage from "../pages/randomEventResultPage/randomEventResultPage";
import AuthModal from "../pages/authModal/AuthModal";
import React from "react";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/event1",
    element: <FCFSEventPage />,
    children: [
      {
        path: "quiz1",
        element: <></>,
      },
      {
        path: "quiz2",
        element: <></>,
      },
      {
        path: "quiz3",
        element: <></>,
      },
      {
        path: "quiz4",
        element: <></>,
      },
    ],
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
        path: "quiz1",
        element: <></>,
      },
      {
        path: "quiz2",
        element: <></>,
      },
      {
        path: "quiz3",
        element: <></>,
      },
      {
        path: "quiz4",
        element: <></>,
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
