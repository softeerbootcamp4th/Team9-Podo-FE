import React from "react";
import userEvent from "@testing-library/user-event";
import RandomExpectations from "./RandomExpectations";
import { ERROR_MSG } from "../../../constants/RandomEventData";
import { postComment } from "../../../api/fetch";
import { render, screen } from "../../../utils/TestUtils";

jest.mock("../../../api/fetch", () => ({
  postComment: jest.fn(),
}));

describe("RandomExpectations", () => {
  test("RandomExpectations는 올바르게 렌더링되어야 한다.", () => {
    render(<RandomExpectations />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "참여하기" }),
    ).toBeInTheDocument();
  });

  test("20자 이하의 답변을 작성하면 20자 이상 적어달라는 토스트를 띄워야 한다.", async () => {
    render(<RandomExpectations />);

    const textBox = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "참여하기" });

    await userEvent.type(textBox, "짧은 답변");
    await userEvent.click(button);

    expect(await screen.findByText(ERROR_MSG.short)).toBeInTheDocument();
  });

  test("작성하기 버튼을 누르면 기대평이 저장되고 textarea를 비워야 한다.", async () => {
    (postComment as jest.Mock).mockResolvedValue({});

    render(<RandomExpectations />);

    const textBox = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "참여하기" });

    await userEvent.type(textBox, "적절한 답변입니다. 충분히 긴 답변입니다.");
    await userEvent.click(button);

    expect(textBox).toHaveValue("");

    expect(postComment).toHaveBeenCalledWith(
      "적절한 답변입니다. 충분히 긴 답변입니다.",
    );
  });
});
