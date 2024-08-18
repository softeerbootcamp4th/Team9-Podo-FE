import React from "react";
import { render, screen } from "../../../../utils/TestUtils";
import { outsideInfoData } from "../../../../constants/InfoData";
import OutsideDescriptionItem from "./OutsideDescriptionItem";
const defaultProps = {
  title: outsideInfoData[0].title,
  description: outsideInfoData[0].content,
  img: outsideInfoData[0].image,
};

describe("OutsideDescriptionItem 렌더링 테스트", () => {
  test("props로 전달받은 제목이 렌더링 되야 한다.", () => {
    render(<OutsideDescriptionItem {...defaultProps} />);

    const title = screen.getByText(defaultProps.title);
    expect(title).toBeInTheDocument();
  });

  test("props로 전달받은 이미지가 렌더링 되야 한다.", () => {
    render(<OutsideDescriptionItem {...defaultProps} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", defaultProps.img);
  });
});
