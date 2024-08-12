import React from "react";
import { render, screen } from "@testing-library/react";
import { expect } from "@storybook/test";
import Toast from "./Toast";

describe("Toast Component", () => {
  test("토스트는 올바르게 랜더링 되어야 한다.", async () => {
    render(
      <Toast
        content="content"
        position="bottom"
        value={4}
        delay={4000}
        duration={1000}
      />,
    );

    expect(screen.getByRole("alert")).toHaveTextContent("content");
  });
});
