import React from "react";
import { render, screen } from "../../../../utils/test-utils";
import { driveInfoData } from "../../../../constants/InfoData";
import DriveDescriptionItem from "./DriveDescriptionItem";
const defaultProps = {
  title: driveInfoData[0].title,
  img: driveInfoData[0].image,
};

describe("DriveDescriptionItem 렌더링 테스트", () => {
  test("props로 전달받은 제목이 렌더링 되야 한다.", () => {
    render(<DriveDescriptionItem {...defaultProps} />);

    const title = screen.getByText(defaultProps.title);
    expect(title).toBeInTheDocument();
  });

  test("props로 전달받은 이미지가 렌더링 되야 한다.", () => {
    render(<DriveDescriptionItem {...defaultProps} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", defaultProps.img);
  });
});
