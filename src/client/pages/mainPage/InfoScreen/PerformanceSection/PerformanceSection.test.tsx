import React from "react";
import { act, render, screen } from "../../../../utils/TestUtils";
import PerformanceSection from "./PerformanceSection";

IntersectionObserver = jest.fn().mockImplementation((callback) => {
  return {
    observe: jest.fn((element) => {
      callback([
        {
          isIntersecting: false,
          target: element,
          intersectionRect: { top: 0, left: 0 },
        },
      ]);
    }),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
});

Element.prototype.scrollTo = jest.fn();

describe("PerformanceSection component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Performance 가솔린 정보가 올바르게 렌더링 되야 한다.", () => {
    render(<PerformanceSection />);

    const gasoline = screen.getAllByText(/가솔린/);

    expect(gasoline.length).toBe(2);
  });

  test("Performance 전자식 4WD 정보가 올바르게 렌더링 되야 한다.", () => {
    render(<PerformanceSection />);

    const gasoline = screen.getAllByText(/전자식 4WD/i);

    expect(gasoline.length).toBe(1);
  });

  test("DriveSection에 들어오면 차 이미지가 왼쪽에서 오른쪽으로 이동하는 애니메이션이 발생해야 한다.", () => {
    render(<PerformanceSection />);

    const image = screen.getByRole("img", { name: /셀토스/i });

    expect(image).toHaveClass("translate-x-80");

    act(() => {
      (IntersectionObserver as jest.Mock).mock.calls[0][0]([
        { isIntersecting: true },
      ]);
    });

    expect(image).toHaveClass("translate-x-0");
  });
});
