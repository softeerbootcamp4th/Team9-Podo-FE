import React from "react";
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
