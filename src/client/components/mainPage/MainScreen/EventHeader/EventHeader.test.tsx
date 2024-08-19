import React from "react";
import { render, screen } from "@testing-library/react";
import EventHeader from "./EventHeader";

describe("EventHeader", () => {
  const title = "Test Title";
  const description = "This is a test description";

  test("제목은 title로 넘겨준 값이 올바르게 랜더링 되어야 한다", () => {
    render(<EventHeader title={title} description={description} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test("내용은 description으로 넘겨준 값이 올바르게 랜더링 되어야 한다", () => {
    render(<EventHeader title={title} description={description} />);

    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });
});
