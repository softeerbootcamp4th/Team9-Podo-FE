import React from "react";
import { render, screen } from "../../../../utils/TestUtils";
import InsideSection from "./InsideSection";
import Interior from "../../../../../common/assets/images/Interior.webp";

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
describe("InsideSection Component", () => {
  test("화면에 내장 설명 이미지가 보여야 한다.", () => {
    render(<InsideSection />);

    const image = screen.getByRole("img", { name: /셀토스 내부 뷰/i });
    expect(image).toHaveAttribute("src", Interior);
  });

  test("화면에 내장 설명 텍스트가 보여야 한다.", () => {
    render(<InsideSection />);

    const title = screen.getByText("내장");
    const descriptoin = screen.getByText("하이엔드 감성의 차별화된 고급스러움");

    expect(title).toBeInTheDocument();
    expect(descriptoin).toBeInTheDocument();
  });
});
