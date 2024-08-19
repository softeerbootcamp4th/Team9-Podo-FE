import React from "react";
import { expect } from "@storybook/test";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Option from "./Option";

describe("Option Component", () => {
  test("Option 은 올바르게 랜더링 되어야 한다.", () => {
    const handleClick = jest.fn();

    render(
      <Option
        label={"A."}
        content={"당장 앞지르고 달려나간다"}
        state={"default"}
        onClick={handleClick}
      />,
    );

    const option = screen.getByRole("button");
    expect(option).toBeInTheDocument();
  });

  test("Option 을 누르면 onClick 함수가 실행되어야 한다.", async () => {
    const handleClick = jest.fn();

    render(
      <Option
        label={"A."}
        content={"당장 앞지르고 달려나간다"}
        state={"default"}
        onClick={handleClick}
      />,
    );

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
