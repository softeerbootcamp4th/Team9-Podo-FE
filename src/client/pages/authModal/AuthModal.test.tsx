import React, { createContext, ReactNode, useContext, useState } from "react";
import {
  act,
  MockContext,
  render,
  screen,
  waitFor,
} from "../../utils/TestUtils";
import AuthModal from "./AuthModal";
import userEvent from "@testing-library/user-event";
import { AUTH_DELAY, MESSAGE } from "../../constants/AuthModal";
import { shakeHorizontal } from "../../styles/keyframes";
import { shakeInputOptions } from "../../styles/options";
import { server } from "../../mocks/node";
import { http, HttpResponse } from "msw";
import { phoneAuthCheckFailResult } from "../../mocks/data/AuthModal";

jest.mock("../../providers/AppProvider", () => ({
  useAppContext: jest.fn().mockImplementation(() => {
    return useContext(MockContext);
  }),
}));

const navigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(() => {
    return navigate;
  }),
}));

Element.prototype.animate = jest.fn();

describe("AuthModal Component 렌더링 및 입력 테스트", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  test("개인정보를 입력할 수 있는 입력창과 인증 버튼이 화면에 보여야 한다.", () => {
    render(<AuthModal />);

    const phoneNumberInput = screen.getByPlaceholderText("전화번호");
    expect(phoneNumberInput).toBeInTheDocument();

    const authButton = screen.getByRole("button", { name: "인증하기" });
    expect(authButton).toBeInTheDocument();
  });

  test("뒷 배경을 누르면 뒤로가기가 되어야 한다.", async () => {
    render(<AuthModal />);

    const background = screen.getByRole("navigation");
    await userEvent.click(background);

    expect(navigate).toHaveBeenCalledWith(-1);
  });

  test("이름입력창에 알맞은 형식의 텍스트를 입력할 수 있어야 한다.", async () => {
    render(<AuthModal />);

    const nameInput = screen.getByPlaceholderText("이름");
    await userEvent.type(nameInput, "강준우");

    expect(nameInput).toHaveValue("강준우");
  });

  test("번호입력창에 01022222222 텍스트를 입력하면 010-2222-2222의 값이 들어와야 한다.", async () => {
    render(<AuthModal />);

    const phoneNumberInput = screen.getByPlaceholderText("전화번호");
    await userEvent.type(phoneNumberInput, "01022222222");

    expect(phoneNumberInput).toHaveValue("010-2222-2222");
  });

  test("번호입력창에 올바르지 않은 형태의 이름인 상태에서 인증하기 버튼을 누르면 이름 입력창이 양 옆으로 흔들려야 한다.", async () => {
    render(<AuthModal />);
    const nameInput = screen.getByPlaceholderText("이름");
    await userEvent.type(nameInput, "강준우");

    const phoneAuthButton = screen.getByRole("button", { name: "인증번호" });
    await userEvent.click(phoneAuthButton);

    expect(nameInput.animate).toHaveBeenCalledWith(
      shakeHorizontal,
      shakeInputOptions,
    );
  });

  test("번호입력창에 올바르지 않은 형태의 전화번호인 상태에서 인증하기 버튼을 누르면 전화번호 입력창이 양 옆으로 흔들려야 한다.", async () => {
    render(<AuthModal />);
    const nameInput = screen.getByPlaceholderText("이름");
    await userEvent.type(nameInput, "강준우");

    const phoneNumberInput = screen.getByPlaceholderText("전화번호");
    await userEvent.type(phoneNumberInput, "010222222");

    const phoneAuthButton = screen.getByRole("button", { name: "인증번호" });
    await userEvent.click(phoneAuthButton);

    expect(phoneNumberInput.animate).toHaveBeenCalledWith(
      shakeHorizontal,
      shakeInputOptions,
    );
  });
});

describe("AuthModal 인증 관련 테스트", () => {
  beforeEach(async () => {
    jest.useRealTimers();
    render(<AuthModal />);

    const nameInput = screen.getByPlaceholderText("이름");
    await userEvent.type(nameInput, "강준우");

    const phoneNumberInput = screen.getByPlaceholderText("전화번호");
    await userEvent.type(phoneNumberInput, "01011111111");
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("전화번호를 누르고 인증번호 버튼을 누르면 인증 번호 옆에 타이머가 나타나야 한다.", async () => {
    const phoneAuthButton = screen.getByRole("button", { name: "인증번호" });
    await userEvent.click(phoneAuthButton);

    const timer = await screen.findByRole("timer");
    expect(timer).toBeInTheDocument();
  });

  // test("인증 시간이 만료되면 인증시간 만료 토스트를 보여줘야 한다.", async () => {
  //   jest.useFakeTimers();

  //   const phoneAuthButton = await screen.findByRole("button", {
  //     name: "인증번호",
  //   });

  //   await userEvent.click(phoneAuthButton);

  //   act(() => {
  //     jest.advanceTimersByTime(3000);
  //   });

  //   await waitFor(() => {
  //     expect(
  //       screen.getByRole("alert", {
  //         name: MESSAGE.AUTH_NUM_EXPRIES,
  //       }),
  //     ).toBeInTheDocument();
  //   });

  //   jest.useRealTimers();
  // });

  test("인증번호 버튼을 누르면 재전송 버튼으로 바뀌어야 한다.", async () => {
    const phoneAuthButton = screen.getByRole("button", { name: "인증번호" });
    await userEvent.click(phoneAuthButton);

    expect(phoneAuthButton).toHaveTextContent("재전송");
  });

  test("동의 버튼이 눌리지 않으면 인증하기 버튼을 누를 수 없어야 한다.", () => {
    const authButton = screen.getByRole("button", { name: "인증하기" });

    expect(authButton).toBeDisabled();
  });

  test("동의 버튼과 미동의 버튼은 서로 토글되어야 한다.", async () => {
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
    server.resetHandlers(
      http.post("/verification/check", () => {
        return HttpResponse.json(phoneAuthCheckFailResult);
      }),
    );

    const authNumberInput = screen.getByPlaceholderText("인증번호");
    await userEvent.type(authNumberInput, "111111");

    const authButton = screen.getByRole("button", { name: "인증하기" });
    const agreeButton = screen.getByRole("radio", { name: "동의" });
    await userEvent.click(agreeButton);
    await userEvent.click(authButton);

    const errorToast = await screen.findByText(MESSAGE.AUTH_NUM_INCORRECT);

    expect(errorToast).toBeInTheDocument();
  });
});
