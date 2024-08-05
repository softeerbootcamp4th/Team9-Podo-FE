import { userEvent } from "@storybook/test";
import { render, screen } from "../../utils/test-utils";
import FCFSEventResultPage from "./FCFSEventResultPage";
import { fadeOptions, FCFSWinOptions } from "../../styles/options";
import { fadeIn, fadeOut, moveRight } from "../../styles/keyframes";

Element.prototype.animate = jest.fn();

describe("FCFSEventResultPage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("화면에 들어오면 자동차 사진과 자동차 키 사진이 보여야 한다.", () => {
    render(<FCFSEventResultPage />);

    const carImage = screen.getByRole("img", { name: "seltos-car" });
    expect(carImage).toBeInTheDocument();

    const keyImage = screen.getByRole("img", { name: "car-key" });
    expect(keyImage).toBeInTheDocument();
  });

  test("차 키를 누르면 자동차가 오른쪽으로 이동해야 한다.", async () => {
    render(<FCFSEventResultPage />);

    const keyImage = screen.getByRole("img", { name: "car-key" });
    await userEvent.click(keyImage);

    const carImage = screen.getByRole("img", { name: "seltos-car" });
    expect(carImage.animate).toHaveBeenCalledWith(moveRight, FCFSWinOptions);
  });

  test("차 키를 누르면 당첨 확인 문구가 페이드 아웃되고, 이벤트 2 참여하기 버튼이 페이드 인 되어야 한다.", async () => {
    render(<FCFSEventResultPage />);

    const keyImage = screen.getByRole("img", { name: "car-key" });
    await userEvent.click(keyImage);

    const checkText = screen.getByText(
      "The 2025 셀토스의 원격 스마트 주차 보조 기능을 통해 당첨을 확인해보세요!",
    );
    expect(checkText.animate).toHaveBeenCalledWith(fadeOut, fadeOptions);

    const eventButton = screen.getByRole("button", {
      name: "EVENT2 참여하러 가기",
    });
    expect(eventButton.animate).toHaveBeenCalledWith(fadeIn, fadeOptions);
  });

  test("당첨이 되었다면 당첨되었습니다 문구와 함께 폭죽 애니메이션과 유의 사항이 보여야 한다.", async () => {
    render(<FCFSEventResultPage />);

    const keyImage = screen.getByRole("img", { name: "car-key" });
    await userEvent.click(keyImage);

    const winText = await screen.findByText("당첨을 축하합니다!");
    expect(winText).toBeInTheDocument();

    const firework = await screen.findByTestId("firework");
    expect(firework).toBeInTheDocument();

    const notice = await screen.findByRole("banner");
    expect(notice).toBeInTheDocument();
  });

  test("당첨이 되지 않았다면 위로 문구와 안내 문구, 비 애니메이션이 보여야 한다.", async () => {
    render(<FCFSEventResultPage />);

    const keyImage = screen.getByRole("img", { name: "car-key" });
    await userEvent.click(keyImage);

    const loseText = await screen.findByText("아쉽지만 다음 기회에...");
    expect(loseText).toBeInTheDocument();

    const rain = await screen.findByTestId("rain");
    expect(rain).toBeInTheDocument();

    const notice = await screen.findByRole("banner");
    expect(notice).toBeInTheDocument();
  });
});
