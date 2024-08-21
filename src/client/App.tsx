import React from "react";
import Router from "./router/router";
import { AppProvider } from "./providers/AppProvider";
import { ErrorBoundary } from "react-error-boundary";
import FallbackPage from "./pages/fallbackPage/FallbackPage";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackPage}>
      <AppProvider>
        <Router />
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
