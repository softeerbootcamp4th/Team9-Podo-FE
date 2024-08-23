import img0 from "../../common/assets/images/random0.png?as=webp-blur";
import img1 from "../../common/assets/images/random1.png?as=webp-blur";
import img2 from "../../common/assets/images/random2.png?as=webp-blur";
import img3 from "../../common/assets/images/random3.png?as=webp-blur";

export const QUIZ_LIST = [
  {
    background: img0,
    question: "Q1. 마음은 급한데, 앞차가 너무 천천히 간다면... 당신의 선택은?",
    optionList: [
      {
        label: "A.",
        content: "당장 앞지르고 빨리 달려나간다.",
      },
      {
        label: "B.",
        content: "무슨 사정이 있겠지.. 생각하며 뒤를 따라간다.",
      },
    ],
  },
  {
    background: img1,
    question: "Q2. 새로운 차를 산 당신, 처음 하는 행동은?",
    optionList: [
      {
        label: "A.",
        content: "메뉴얼을 정독하며 이 버튼, 저 버튼 눌러본다.",
      },
      {
        label: "B.",
        content: "얘들아 나 신차샀어!! 당장 사진찍어 인터넷에 올린다.",
      },
    ],
  },
  {
    background: img2,
    question: "Q3. 날시 좋은 주말, 휴일을 보내는 당신의 선택은?",
    optionList: [
      {
        label: "A.",
        content: "당장 근교로 드라이빙하러 나가자!",
      },
      {
        label: "B.",
        content:
          "주말은 쉬라고 있는거야.. 맛있는거 시켜먹고 침대에서 뒹굴거려야지.",
      },
    ],
  },
  {
    background: img3,
    question: "Q4. 나는 첫 차를 고를 때...",
    optionList: [
      {
        label: "A.",
        content: "연비, 성능, 옵션 등을 꼼꼼하게 따져본다.",
      },
      {
        label: "B.",
        content: "디자인을 점찍어두었던 드림카를 구매한다.",
      },
    ],
  },
];

export const DRIVER_TYPE_LIST = [
  "안전을 최우선시하는 베스트 드라이버",
  "호기심 많은 얼리어답터",
  "감각적인 트렌드 세터",
  "다이나믹한 모험가",
];

export const ERROR_MSG = {
  short: "20자 이상 답변을 작성해주세요.",
  inappropriate: "부적절한 답변입니다. 다시 작성해주세요.",
  success: "기대평이 등록되었습니다.",
};

export const TEXT_CONTENT = {
  EVENT_PARTICIPATION: {
    PROMPT: "이벤트 응모하고",
    PRIZE_TEXT: "시그니엘 숙박권",
    PRIZE_SUFFIX: "받자!!",
  },
};

export const TOOLTIP_CONTENT = "클립보드에 URL이 복사되었습니다";
