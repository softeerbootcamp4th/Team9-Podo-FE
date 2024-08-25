import React from "react";
import { render, screen } from "../../../../utils/TestUtils";
import { driveInfoData } from "../../../../constants/InfoData";
import DriveDescriptionItem from "./DriveDescriptionItem";
const defaultProps = {
  title: driveInfoData[0].title,
  img: driveInfoData[0].image,
  description: driveInfoData[0].description,
};

describe("DriveDescriptionItem 렌더링 테스트", () => {
  test("props로 전달받은 제목이 렌더링 되야 한다.", () => {
    render(<DriveDescriptionItem {...defaultProps} />);

    const title = screen.getByText(defaultProps.title);
    expect(title).toBeInTheDocument();
  });

  test("props로 전달받은 이미지가 렌더링 되야 한다.", () => {
    render(<DriveDescriptionItem {...defaultProps} />);

    const article = screen.getByRole("figure");
    expect(article).toBeInTheDocument();
  });

  test("아무 요소도 선택되지 않았다면 텍스트가 보이지 않고, 이미지가 렌더링 되야 한다.", () => {
    render(<DriveDescriptionItem {...defaultProps} />);

    const article = screen.getByRole("figure");

    expect(article).toHaveClass("text-opacity-0");
    expect(article).toHaveStyle(`background: url(${defaultProps.img})`);
  });

  test("요소가 선택되지 않았다면 텍스트가 보이지 않고, 투명도가 적용된 이미지가 렌더링 되야 한다.", () => {
    render(<DriveDescriptionItem {...defaultProps} isSelected={false} />);

    const article = screen.getByRole("figure");

    expect(article).toHaveClass("text-opacity-0");
    expect(article).toHaveStyle(
      `background: linear-gradient(180deg,  rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%, rgba(0, 0, 0, 0.00) 100%), url(${defaultProps.img})`,
    );
  });

  test("요소가 선택되지 않았다면 텍스트가 보이고, 투명도가 적용된 이미지가 렌더링 되야 한다.", () => {
    render(<DriveDescriptionItem {...defaultProps} isSelected={false} />);

    const article = screen.getByRole("figure");

    expect(article).toHaveClass("text-opacity-0");
    expect(article).toHaveStyle(
      `background: linear-gradient(180deg,  rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(${defaultProps.img})`,
    );
  });
});
