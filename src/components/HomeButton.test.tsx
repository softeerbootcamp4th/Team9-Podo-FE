import { expect, userEvent } from "@storybook/test";
import React from "react";
import HomeButton from "./HomeButton";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
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
