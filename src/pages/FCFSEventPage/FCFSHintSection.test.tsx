import React from "react";
import { render, screen } from "../../utils/test-utils";
import FCFSHintSection from "./FCFSHintSection";

describe("FCFSHintSection Component", () => {
  test("isShow가 true일 때, 화면에 7개의 설명 요소가 표시되어야 한다.", () => {
    render(<FCFSHintSection isShow={true} />);

    const expScreen = screen.getAllByRole("listitem");
    expect(expScreen.length).toBe(7);
  });

  test("isShow가 false이면, 화면에서 요소가 보이지 않아야 한다.", () => {
    render(<FCFSHintSection isShow={false} />);

    const expScreen = screen.queryAllByAltText("listitem");
    expect(expScreen).not.toBeInTheDocument();
  });
});
