import React from "react";
import { RouterProvider, Routes, useLocation } from "react-router-dom";
import Router from "./router/router";
import { AppProvider } from "./providers/AppProvider";
import ErrorBoundary from "./providers/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Router />
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
