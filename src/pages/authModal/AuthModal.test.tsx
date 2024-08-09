import React from "react";
import { render, screen } from "../../utils/test-utils";
import AuthModal from "./AuthModal";
import userEvent from "@testing-library/user-event";
import { AUTH_DELAY, MESSAGE } from "../../constants/AuthModal";

jest.useFakeTimers();

describe("AuthModal Component 렌더링 및 입력 테스트", () => {
  test("개인정보를 입력할 수 있는 입력창과 인증 버튼이 화면에 보여야 한다.", () => {
    render(<AuthModal />);

    const phoneNumberInput = screen.getByPlaceholderText("전화번호");
    expect(phoneNumberInput).toBeInTheDocument();

    const authButton = screen.getByRole("button", { name: "인증하기 car" });
    expect(authButton).toBeInTheDocument();
  });

  test("뒷 배경이 블러 처리 되야 한다.", () => {});

  test("입력창에 알맞은 형식의 텍스트를 입력할 수 있어야 한다.", async () => {
    render(<AuthModal />);

    const phoneNumberInput = screen.getByPlaceholderText("전화번호");
    await userEvent.type(phoneNumberInput, "01022222222");

    expect(phoneNumberInput).toHaveValue("01022222222");
  });

  test("이름의 올바른 형식(한글)이 아니면 오류를 반환해야 한다.", async () => {
    render(<AuthModal />);

    const phoneNumberInput = screen.getByPlaceholderText("전화번호");
    await userEvent.type(phoneNumberInput, "010222avsljla");

    const errorToast = screen.getByRole("alert", {
      name: MESSAGE.INVALID_FORMAT,
    });

    expect(errorToast).toBeInTheDocument();
  });

  test("전화번호 형식이 올바르지 않으면 오류 토스트를 보여줘야 한다.", async () => {
    render(<AuthModal />);

    const nameInput = screen.getByPlaceholderText("이름");
    await userEvent.type(nameInput, "00avsljla");

    const errorToast = screen.getByRole("alert", {
      name: MESSAGE.INVALID_FORMAT,
    });

    expect(errorToast).toBeInTheDocument();
  });
});

describe("AuthModal 인증 관련 테스트", () => {
  beforeEach(async () => {
    render(<AuthModal />);

    const phoneNumberInput = screen.getByPlaceholderText("전화번호");
    await userEvent.type(phoneNumberInput, "01022222222");
  });
  test("전화번호를 누르고 인증번호 버튼을 누르면 인증 번호 옆에 타이머가 나타나야 한다.", async () => {
    const phoneAuthButton = screen.getByRole("button", { name: "인증번호" });
    await userEvent.click(phoneAuthButton);

    const timer = await screen.findByRole("timer");
    expect(timer).toBeInTheDocument();
  });

  test("인증 시간이 만료되면 인증시간 만료 토스트를 보여줘야 한다.", async () => {
    render(<AuthModal />);

    const phoneAuthButton = screen.getByRole("button", { name: "인증번호" });
    await userEvent.click(phoneAuthButton);

    jest.advanceTimersByTime(AUTH_DELAY);

    const expToast = await screen.findByRole("alert", {
      name: MESSAGE.AUTH_NUM_EXPRIES,
    });
    expect(expToast).toBeInTheDocument();
  });

  test("인증번호 버튼을 누르면 재전송 버튼으로 바뀌어야 한다.", async () => {
    const phoneAuthButton = screen.getByRole("button", { name: "인증번호" });
    await userEvent.click(phoneAuthButton);

    expect(phoneAuthButton).toHaveTextContent("재전송");
  });

  test("동의 버튼이 눌리지 않으면 인증하기 버튼을 누를 수 없어야 한다.", () => {
    const authButton = screen.getByRole("button", { name: "인증하기" });

    expect(authButton).toBeDisabled();
  });

  test("동의 버튼과 미동이 버튼은 서로 토글되어야 한다.", async () => {
    const agreeButton = screen.getByRole("radio", { name: "동의" });
    const disagreeButton = screen.getByRole("radio", { name: "미동의" });

    await userEvent.click(agreeButton);
    expect(agreeButton).toBeChecked();
    expect(disagreeButton).not.toBeChecked();

    await userEvent.click(disagreeButton);
    expect(agreeButton).not.toBeChecked();
    expect(disagreeButton).toBeChecked();
  });

  test("인증 번호가 맞지 않은 상태에서 인증하기 버튼을 누르면 오류 토스트를 보여줘야 한다.", async () => {
    render(<AuthModal />);

    const authNumberInput = screen.getByPlaceholderText("인증번호");
    await userEvent.type(authNumberInput, "111111");

    const errorToast = screen.getByRole("alert", {
      name: MESSAGE.AUTH_NUM_INCORRECT,
    });

    expect(errorToast).toBeInTheDocument();
  });

  test("인증번호를 입력하고 동의 상태에서 인증하기 버튼을 누르면 이전 페이지로 이동해야 한다.", () => {});
});
