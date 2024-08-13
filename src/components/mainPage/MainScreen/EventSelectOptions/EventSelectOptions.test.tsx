import React from "react";
import { render, screen } from "@testing-library/react";
import EventSelectOptions from "./EventSelectOptions";
import { expect } from "@storybook/test";
import userEvent from "@testing-library/user-event";

const setHoveredIndex = jest.fn();

describe("EventSelectOption Component", () => {
  test("EventSelectOption 은 올바르게 랜더링되어야 한다. ", () => {
    render(
      <EventSelectOptions
        index={0}
        hoveredIndex={null}
        setHoveredIndex={setHoveredIndex}
        title="event 1."
        description={`매일 선착순 100명! \n퀴즈 풀고 스타벅스 커피 받아가자!`}
        img={""}
        buttonInfo={{ size: "small", isEnabled: true, onClick: () => {} }}
      />,
    );

    expect(
      screen.getByText("매일 선착순 100명! 퀴즈 풀고 스타벅스 커피 받아가자!"),
    ).toBeInTheDocument();
  });
  test("참여하기 버튼을 누르면 해당 이벤트 페이지로 스크롤 되어야 한다.", async () => {
    const handleClick = jest.fn();

    render(
      <EventSelectOptions
        index={0}
        hoveredIndex={null}
        setHoveredIndex={setHoveredIndex}
        title="event 1."
        description={`매일 선착순 100명! \n퀴즈 풀고 스타벅스 커피 받아가자!`}
        img={""}
        buttonInfo={{ size: "small", isEnabled: true, onClick: handleClick }}
      />,
    );

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toBeCalled();
  });
});
