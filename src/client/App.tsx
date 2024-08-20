import React from "react";
import Router from "./router/router";
import { AppProvider } from "./providers/AppProvider";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <AppProvider>
        <Router />
      </AppProvider>
    </ErrorBoundary>
  );
};

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h2>잘못된 접근 방식</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </div>
  );
};
export default App;
