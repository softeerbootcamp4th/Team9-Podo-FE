import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App.tsx";
test("App", () => {
  render(<App />);

  screen.getByText("MainPage");
});
