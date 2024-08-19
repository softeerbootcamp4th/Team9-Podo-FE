import React from "react";
import { RouterProvider, Routes, useLocation } from "react-router-dom";
import Router from "./router/router";
import { AppProvider } from "./providers/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
