import React from "react";
import { render, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";
import { expect } from "@storybook/test";

describe("Tooltip Component", () => {
  test("isVisible 이 true 일 때 content가 잘 보여야 한다.", () => {
    render(<Tooltip content="HI" isVisible={true} />);

    expect(screen.getByText("HI")).toBeInTheDocument();
  });

  test("isVisible 이 false 일 때 content가 보이지 않아야 한다.", () => {
    render(<Tooltip content="HI" isVisible={false} />);

    expect(screen.getByText("HI")).toHaveClass("animate-fadeOut");
  });
});
