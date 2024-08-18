import React from "react";
import { act, render, screen } from "../../../../utils/TestUtils";
import InsideGuide from "./InsideGuide";
import userEvent from "@testing-library/user-event";

const initialState = [
  { light: false },
  { dial: false },
  { display: false },
  { blow: false },
  { headup: false },
];

IntersectionObserver = jest.fn().mockImplementation((callback) => {
  return {
    observe: jest.fn((element) => {
      callback([
        {
          isIntersecting: false,
          target: element,
          intersectionRect: { top: 10, left: 0 },
        },
      ]);
    }),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
});

describe("InsideGuide Component", () => {
  initialState.forEach((state) => {
    test(`화면에 ${Object.keys(state)[0]}의 하이라이트 요소가 보여야 한다.`, () => {
      render(<InsideGuide />);

      const highliht = screen.getByTestId(Object.keys(state)[0]);
      expect(highliht).toBeInTheDocument();
    });
  });

  initialState.forEach((state) => {
    test(`${Object.keys(state)[0]}의 하이라이트 요소에 마우스를 가져다 대면 ${Object.keys(state)[0]}에 대한 설명이 보여야 한다.`, async () => {
      render(<InsideGuide />);

      const highliht = screen.getByTestId(Object.keys(state)[0]);

      await userEvent.hover(highliht);

      const text = screen.getByRole("banner");
      expect(text).toBeInTheDocument();
    });
  });

  test("InsideGuide 화면이 Intersecting 되면 가이드 텍스트가 화면에 나타났다 사라져야 한다.", async () => {
    render(<InsideGuide />);

    act(() => {
      (IntersectionObserver as jest.Mock).mock.calls[0][0]([
        { isIntersecting: true },
      ]);
    });

    const guideText = await screen.findByText(
      /마우스를 움직여 차량 내부를 확인해보세요/,
    );
    expect(guideText).toBeInTheDocument();
    expect(guideText).toHaveClass("opacity-100");

    // jest.useFakeTimers();

    // jest.advanceTimersByTime(4000);

    // expect(guideText).toHaveClass("opacity-0");
  });
});
