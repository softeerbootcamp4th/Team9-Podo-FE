import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: BrowserRouter, ...options });

export * from "@testing-library/react";
export { customRender as render };
