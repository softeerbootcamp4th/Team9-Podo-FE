import React from "react";
import { outsideInfoData } from "../../../constants/InfoData";
import { render, screen } from "../../../utils/test-utils";
import OutsideDescriptionItem from "../../mainPage/InfoScreen/OutsideDescriptionItem/OutsideDescriptionItem";
import Carousel from "./Carousel";
import userEvent from "@testing-library/user-event";

const carouselItems = outsideInfoData.map(({ key, title, content, image }) => {
  return (
    <OutsideDescriptionItem
      key={key}
      title={title}
      description={content}
      img={image}
    />
  );
});

const onClickCase = Array.from({ length: outsideInfoData.length }, (_, i) => i);

describe("Carousel Component", () => {
  beforeEach(() => {
    IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn((element) => {
        callback([
          { isIntersecting: false, target: element },
          { isIntersecting: true, target: element },
          { isIntersecting: false, target: element },
        ]);
      }),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    Element.prototype.scrollTo = jest.fn();
  });

  test("props로 전달받은 아이템 숫자 만큼의 하위 요소를 렌더링 해야 한다.", () => {
    render(<Carousel items={carouselItems} />);

    const items = screen.getAllByRole("img");
    expect(items.length).toBe(outsideInfoData.length);
  });

  onClickCase.forEach((index) => {
    test(`props로 ${index}번 째 아이템을 누르면 ${index}번 째 요소로 스크롤 되고, 투명도가 100이 되어야 한다.`, async () => {
      render(<Carousel items={carouselItems} />);

      const items = screen.getAllByRole("img");
      await userEvent.click(items[index]);

      const carouselContainer = items[index].parentElement;
      const targetPosition =
        items[index].offsetLeft - carouselContainer!.offsetLeft;

      expect(carouselContainer?.scrollTo).toHaveBeenCalledWith({
        top: 0,
        left: targetPosition,
        behavior: "smooth",
      });

      expect(items[index].parentElement?.parentElement).toHaveClass(
        "opacity-100",
      );
    });
  });
});
