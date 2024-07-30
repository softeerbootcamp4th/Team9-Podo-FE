import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { expect, userEvent } from "@storybook/test";
import HomeButton from "./HomeButton";
import { MemoryRouter } from "react-router";

describe("HomeButton Component", () => {
  test("should ", async () => {
    render(
      <MemoryRouter>
        <HomeButton />
      </MemoryRouter>,
    );

    userEvent.click(screen.getByRole("button"));

    waitFor(() => {
      const mainText = screen.findByText("MainPage");
      expect(mainText).toBeInTheDocument();
    });
  });
});
