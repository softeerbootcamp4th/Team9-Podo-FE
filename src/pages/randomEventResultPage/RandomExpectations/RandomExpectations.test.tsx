import React from "react";
import { render, screen } from "@testing-library/react";
import { expect } from "@storybook/test";
import RandomExpectations from "./RandomExpectations";
import userEvent from "@testing-library/user-event";

const ERROR_MSG = {
  short: "20자 이상 답변을 작성해주세요.",
  inappropriate: "부적절한 답변입니다. 다시 작성해주세요.",
};

describe("RandomExpectations", () => {
  test("RandomExpectations 는 올바르게 랜더링되어야 한다. ", () => {
    render(<RandomExpectations />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "참여하기" }),
    ).toBeInTheDocument();
  });

  test("20자 이하의 답변을 작성하면 20자 이상 적어달라는 토스트를 띄워야 한다. ", async () => {
    render(<RandomExpectations />);

    const textBox = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "참여하기" });

    await userEvent.type(textBox, "짧은 답변");
    await userEvent.click(button);

    expect(screen.getByText(ERROR_MSG.short)).toBeInTheDocument();
  });

  test("올바르지 않은 답변을 작성하면 부적절한 답변이라는 토스트를 띄워야 한다. ", async () => {
    render(<RandomExpectations />);

    const textBox = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "참여하기" });

    await userEvent.type(textBox, "부적절한 답변");
    await userEvent.click(button);

    expect(screen.getByText(ERROR_MSG.inappropriate)).toBeInTheDocument();
  });

  test("작성하기 버튼을 누르면 기대평이 저장되고 text area 를 비워야 한다.", async () => {
    render(<RandomExpectations />);

    const textBox = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "참여하기" });

    await userEvent.type(textBox, "적절한 답변입니다. 충분히 긴 답변입니다.");
    await userEvent.click(button);

    expect(textBox).toHaveValue("");
  });
});
