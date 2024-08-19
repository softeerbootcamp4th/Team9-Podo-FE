import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect } from "@storybook/test";
import Button from "./Button";

test("버튼이 활성화 되어 있을 때 누를 수 있다", async () => {
  const handleClick = jest.fn();

  render(
    <Button
      size="small"
      onClick={handleClick}
      isEnabled={true}
      defaultText="Click me"
    />,
  );

  await userEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalled();
});

test("버튼이 비활성화 되어 있을 때 누를 수 없다", async () => {
  const handleClick = jest.fn();
  render(
    <Button
      size="small"
      onClick={handleClick}
      isEnabled={false}
      defaultText="Click me"
      disabledText="Disabled"
    />,
  );
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});
