import React from "react";
import { render, screen } from "@testing-library/react";
import { expect } from "@storybook/test";
import Roulette from "./Roulette";
import { DRIVER_TYPE_LIST } from "../../../constants/RandomEventData";

describe("Roulette Component", () => {
  test("Roulette는 올바르게 랜더링되어야 한다.", () => {
    render(<Roulette targetText="target" textList={DRIVER_TYPE_LIST} />);

    // const roulette = screen.getByText("roulette");
    // expect(roulette).toBeInTheDocument();
  });
});
