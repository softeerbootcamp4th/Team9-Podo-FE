/**
 * 페이드 아웃 효과
 */
export const fadeOut = [{ opacity: "1" }, { opacity: "0" }];

/**
 * 페이드 인 효과
 */
export const fadeIn = [{ opacity: "0" }, { opacity: "1" }];

/**
 * 아래로 내려가는 효과
 */
export const fadeDown = [
  { transform: "translateY(0px)" },
  { transform: "translateY(100vh)" },
];

/**
 * Glow 컴포넌트 반짝이는 효과
 */
export const randomGlow = [
  { filter: `brightness(0.9)` },
  { filter: `brightness(1.2)` },
];
/**
 * 선착순 퀴즈 힌트 컴포넌트 위로 올라오는 효과
 */
export const showUp = [
  { transform: "translateY(0px)" },
  { transform: "translateY(-90%)" },
];

/**
 * 선착순 퀴즈 힌트 컴포넌트 아래로 내려가는
 */
export const goDown = [
  { transform: "translateY(-90%)" },
  { transform: "translateY(0px)" },
];

/**
 * 선착순 이벤트 결과 페이지 차 오른쪽으로 이동하는 효과
 */
export const carMoveRight = [
  { transform: "translateX(0px) scaleX(-0.9) scaleY(0.9)" },
  { transform: "translateX(200vw) scaleX(-0.9) scaleY(0.9)" },
];
