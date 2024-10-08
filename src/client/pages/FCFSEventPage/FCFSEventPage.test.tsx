import React, { useContext } from "react";
import { MockContext, render, screen } from "../../utils/TestUtils";
import FCFSEventPage from "./FCFSEventPage";
import { userEvent } from "@storybook/test";
import { showUp, goDown } from "../../styles/keyframes";
import { FCFSHintOptions } from "../../styles/options";
import { act } from "@testing-library/react";

jest.mock("../../providers/AppProvider", () => ({
  useAppContext: jest.fn().mockImplementation(() => {
    return useContext(MockContext);
  }),
}));

Element.prototype.animate = jest.fn().mockImplementation(() => {
  return 1;
});

describe("FCFSEventPage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("FCFS 이벤트 페이지에 들어오면 서버에서 가져온 퀴즈 정보를 보여줘야 한다.", async () => {
    render(<FCFSEventPage />);

    const quizItems = await screen.findAllByText(/^\d+\.\s/);
    expect(quizItems.length).toBe(4);
  });

  test("아래 힌트 화면을 호버하면 퀴즈 힌트가 올라와야 한다.", async () => {
    render(<FCFSEventPage />);

    const hintContainer = screen.getByRole("dialog");
    await act(async () => {
      await userEvent.hover(hintContainer);
    });

    expect(hintContainer.animate).toHaveBeenCalledWith(showUp, FCFSHintOptions);
  });

  test("힌트 화면에서 마우스가 빠져나오면 힌트가 원래대로 돌아가야 한다.", async () => {
    render(<FCFSEventPage />);

    const hintContainer = screen.getByRole("dialog");

    await act(async () => {
      await userEvent.hover(hintContainer);
    });

    await act(async () => {
      await userEvent.unhover(hintContainer);
    });

    expect(hintContainer.animate).toHaveBeenCalledWith(goDown, FCFSHintOptions);
  });
});
