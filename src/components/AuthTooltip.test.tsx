import React from "react";
import { render, screen } from "@testing-library/react";
import AuthTooltip from "./AuthTooltip";
import { expect } from "@storybook/test";

describe("AuthTooltip Component", () => {
  test("ToolTip must in the document", () => {
    render(<AuthTooltip />);

    const authToolTip = screen.getByRole("timer");
    expect(authToolTip).toBeInTheDocument();
  });
});
