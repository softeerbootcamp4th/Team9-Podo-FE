import React from "react";
import { render, screen } from "@testing-library/react";
import AuthTooltip from "./AuthTooltip";
import { expect } from "@storybook/test";
import userEvent from "@testing-library/user-event";

describe("AuthTooltip Component", () => {
  test("isAuth가 true면 AuthTooltip이 화면에 표시되어야 한다.", () => {
    render(<AuthTooltip isAuth={true} />);

    const leftTimer = screen.getByRole("timer");
    expect(leftTimer).toBeInTheDocument();
  });

  test("isAuth가 true면 남은 시간이 MM:SS 형식으로 화면에 표시되어야 한다.", () => {
    render(<AuthTooltip isAuth={true} />);

    const timeRegex = /(0[0-9]|[1-5][0-9]):([0-5][0-9])/;

    const leftTimer = screen.getByRole("timer");
    expect(leftTimer).toHaveTextContent(timeRegex);
  });

  test("isAuth가 true이고 새로고침 버튼을 누르면 남은 시간이 59:59로 초기화 되어야 한다.", async () => {
    render(<AuthTooltip isAuth={true} />);

    const refreshButton = screen.getByRole("button");
    await userEvent.click(refreshButton);

    const leftTimer = screen.getByRole("timer");
    expect(leftTimer).toHaveTextContent("59:59");
  });
});
