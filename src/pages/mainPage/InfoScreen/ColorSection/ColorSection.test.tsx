import React from "react";
import { render, screen } from "../../../../utils/TestUtils";
import { colorInfoData } from "../../../../constants/InfoData";
import ColorSection from "./ColorSection";
import userEvent from "@testing-library/user-event";

Element.prototype.scrollTo = jest.fn();

describe("ColorSection Component", () => {
  colorInfoData.forEach((color, index) => {
    test(`${color.koTitle}의 색상 정보를 담은 화면에 표시 되어야 한다.`, () => {
      render(<ColorSection />);

      const koTitle = screen.getAllByText(color.koTitle);
      const engTitle = screen.getAllByText(color.engTitle);

      expect(koTitle[0]).toBeInTheDocument();
      expect(engTitle[0]).toBeInTheDocument();
    });
  });

  test("클릭할 수 있는 컬러 파레트가 화면에 표시 되어야 한다.", () => {
    render(<ColorSection />);

    const palleteInfo = screen.getAllByRole("navigation");

    expect(palleteInfo[0]).toBeInTheDocument();
  });

  test("컬러 파레트를 클릭하면 해당 화면으로 스크롤 되어야 한다.", async () => {
    render(<ColorSection />);

    const palleteItems = screen.getAllByRole("button");

    palleteItems.forEach(async (item) => {
      await userEvent.click(item);

      expect(item.parentElement?.parentElement?.scrollTo).toHaveBeenCalledWith({
        behavior: "smooth",
        top: 0,
      });
    });
  });
});
