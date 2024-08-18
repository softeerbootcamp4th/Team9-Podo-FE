import React from "react";
import { driveInfoData } from "../../../../constants/InfoData";
import { act, render, screen } from "../../../../utils/TestUtils";
import DriveSection from "./DriveSection";

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

describe("DriveSection component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  driveInfoData.forEach((drive) => {
    test(`${drive.title}의 정보를 담은 화면에 표시 되어야 한다.`, () => {
      render(<DriveSection />);

      const koTitle = screen.getByText(drive.title);

      expect(koTitle).toBeInTheDocument();
    });
  });

  test("DriveSection에 들어오면 투명도가 100이 되고 scale이 커지는 애니메이션이 발생해야 한다.", () => {
    render(<DriveSection />);

    const items = screen.getAllByRole("article");

    items.forEach((item) => {
      expect(item).toHaveClass("opacity-0 scale-90");
      expect(item).not.toHaveClass("opacity-100 scale-100");
    });

    act(() => {
      (IntersectionObserver as jest.Mock).mock.calls[0][0]([
        { isIntersecting: true },
      ]);
    });

    items.forEach((item) => {
      expect(item).toHaveClass("opacity-100 scale-100");
      expect(item).not.toHaveClass("opacity-0 scale-90");
    });
  });
});
