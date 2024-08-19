import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventSelectOptions from "./EventSelectOptions";
import { EventSelectOptionsProps } from "../../../../types/InfoScreen";

const mockButtonClick = jest.fn();
const setHoveredIndex = jest.fn();

const defaultProps: EventSelectOptionsProps = {
  index: 0,
  hoveredIndex: null,
  setHoveredIndex: setHoveredIndex,
  title: "event 1.",
  description: "매일 선착순 100명! \n퀴즈 풀고 스타벅스 커피 받아가자!",
  img: "",
  buttonInfo: {
    onClick: mockButtonClick,
    size: "small",
    isEnabled: true,
  },
};

describe("EventSelectOptions Component", () => {
  test("defaultProps에 따라 올바르게 랜더링 되어야 한다.", () => {
    render(<EventSelectOptions {...defaultProps} />);

    expect(
      screen.getByText("매일 선착순 100명! 퀴즈 풀고 스타벅스 커피 받아가자!"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /참여하기/i }),
    ).toBeInTheDocument();
  });

  test("참여하기 버튼을 누르면 onClick 핸들러가 호출되어야 한다.", async () => {
    render(<EventSelectOptions {...defaultProps} />);

    const button = screen.getByRole("button", { name: /참여하기/i });
    await userEvent.click(button);

    expect(mockButtonClick).toHaveBeenCalled();
  });

  test("마우스가 요소 위로 올라가면 setHoveredIndex가 호출되어야 한다.", async () => {
    render(<EventSelectOptions {...defaultProps} />);

    const optionContainer = screen.getByText("event 1.").closest("div");

    await userEvent.hover(optionContainer!);
    expect(setHoveredIndex).toHaveBeenCalledWith(0);

    await userEvent.unhover(optionContainer!);
    expect(setHoveredIndex).toHaveBeenCalledWith(null);
  });

  test("hoveredIndex가 index와 맞지 않을 때 올바른 opacity가 적용되어야 한다.", () => {
    render(<EventSelectOptions {...defaultProps} hoveredIndex={1} />);

    const optionContainer = screen.getByRole("option");
    expect(optionContainer).toHaveClass("opacity-30");
  });
});
