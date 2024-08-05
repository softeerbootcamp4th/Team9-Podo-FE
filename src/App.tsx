import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { AppProvider } from "./pages/providers     /AppProvider";

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>;
    </AppProvider>
  );
};

export default App;
