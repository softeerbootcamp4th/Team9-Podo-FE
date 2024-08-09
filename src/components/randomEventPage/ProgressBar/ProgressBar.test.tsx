import React from "react";
import { render, screen } from "@testing-library/react";
import { expect } from "@storybook/test";
import ProgressBar from "./ProgressBar";

describe("ProgressBar Component", () => {
  test("ProgressBar는 올바르게 랜더링되어야 한다", () => {
    render(<ProgressBar currentIndex={0} maxIndex={3} />);

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
  });
});
