import React from "react";
import { convenienceInfoData } from "../../../../constants/InfoData";
import { act, render, screen } from "../../../../utils/TestUtils";
import ConvenienceSection from "./ConvenienceSection";

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

describe("ConvenienceSection component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  convenienceInfoData.forEach((convenience, index) => {
    test(`${convenience.title}의 정보를 담은 화면에 표시 되어야 한다.`, () => {
      render(<ConvenienceSection />);

      const title = screen.getByText(convenience.title);
      const description = screen.getByText(convenience.description);

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  test("ConvenienceSection에 들어오면 스크롤이 좌에서 오른쪽으로 오는 애니메이션이 발생해야 한다.", () => {
    render(<ConvenienceSection />);

    const items = screen.getAllByRole("article");

    items.forEach((item) => {
      expect(item).toHaveClass("translate-x-3/4");
      expect(item).not.toHaveClass("translate-x-0");
    });

    act(() => {
      (IntersectionObserver as jest.Mock).mock.calls[0][0]([
        { isIntersecting: true },
      ]);
    });

    items.forEach((item) => {
      expect(item).toHaveClass("translate-x-0");
      expect(item).not.toHaveClass("translate-x-3/4");
    });
  });
});
