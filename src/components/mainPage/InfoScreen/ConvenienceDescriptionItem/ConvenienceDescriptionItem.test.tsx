import React from "react";
import { render, screen } from "../../../../utils/test-utils";
import { convenienceInfoData } from "../../../../constants/InfoData";
import ConvenienceDescriptionItem from "./ConvenienceDescriptionItem";
const defaultProps = {
  title: convenienceInfoData[0].title,
  description: convenienceInfoData[0].description,
  img: convenienceInfoData[0].image,
};

describe("ConvenienceDescriptionItem 렌더링 테스트", () => {
  test("props로 전달받은 제목이 렌더링 되야 한다.", () => {
    render(<ConvenienceDescriptionItem {...defaultProps} />);

    const title = screen.getByText(defaultProps.title);
    expect(title).toBeInTheDocument();
  });

  test("props로 전달받은 설명이 렌더링 되야 한다.", () => {
    render(<ConvenienceDescriptionItem {...defaultProps} />);

    const description = screen.getByText(defaultProps.description);
    expect(description).toBeInTheDocument();
  });

  test("props로 전달받은 이미지가 렌더링 되야 한다.", () => {
    render(<ConvenienceDescriptionItem {...defaultProps} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", defaultProps.img);
  });
});
