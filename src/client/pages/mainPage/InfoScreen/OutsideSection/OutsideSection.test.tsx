import React from "react";
import { outsideInfoData } from "../../../../constants/InfoData";
import { act, render, screen } from "../../../../utils/TestUtils";
import OutsideSection from "./OutsideSection";

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

describe("OutsideSection component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  outsideInfoData.forEach((outside) => {
    test(`${outside.title}의 정보를 담은 화면에 표시 되어야 한다.`, () => {
      render(<OutsideSection />);

      const title = screen.getByText(outside.title);
      const description = screen.getByText(outside.content);

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  test("OutsideSection의 이미지가 intersectino이 되면 이미지가 화면 전체로 커지는 애니메이션이 발생해야 한다.", () => {
    render(<OutsideSection />);

    const items = screen.getAllByRole("img", { name: /셀토스 외부 뷰/i });

    items.forEach((item) => {
      expect(item).toHaveClass("scale-90");
      expect(item).not.toHaveClass("scale-100");
    });

    act(() => {
      (IntersectionObserver as jest.Mock).mock.calls[1][0]([
        { isIntersecting: true },
      ]);
    });

    items.forEach((item) => {
      expect(item).toHaveClass("scale-100");
      expect(item).not.toHaveClass("scale-90");
    });
  });
});
