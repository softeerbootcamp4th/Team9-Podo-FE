import React from "react";
import { act, render, screen } from "@testing-library/react";
import Roulette from "./Roulette";
import { expect } from "@storybook/test";

jest.useFakeTimers();

describe("Roulette 컴포넌트", () => {
  const textList = ["Text1", "Text2", "Text3", "Text4"];
  const targetText = "FinalText";
  test("룰렛 애니메이션 후 targetText를 렌더링한다", () => {
    // render(<Roulette textList={textList} targetText={targetText} />);
    // expect(screen.queryByText(targetText)).toHaveClass("-translate-y-16");
    // act(() => {
    //   jest.advanceTimersByTime(2100 * 50);
    // });
    // expect(screen.getByText(targetText)).not.toHaveClass("-translate-y-16");
  });
});
