import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Toast from "./Toast";
import { expect } from "@storybook/test";

describe("Toast Component", () => {
  test("토스트는 올바르게 랜더링 되어야 한다.", async () => {
    render(<Toast content="content" />);

    expect(screen.getByRole("dialog")).toHaveTextContent("content");
  });
});
