import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App.jsx";
test("App", () => {
  render(<App />);

  screen.getByText("MainPage");
});
