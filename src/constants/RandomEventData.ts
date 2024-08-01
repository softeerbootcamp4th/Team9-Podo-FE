import img0 from "../assets/images/random0.png";
import img1 from "../assets/images/random1.png";
import img2 from "../assets/images/random2.png";
import img3 from "../assets/images/random3.png";

interface RandomQuizInterface {
  background: string;
  question: string;
  optionList: Array<OptionInterface>;
}

interface OptionInterface {
  label: string;
  content: string;
}

export const quizList: Array<RandomQuizInterface> = [
  {
    background: img0,
    question: "마음은 급한데, 앞차가 너무 천천히 간다면... 당신의 선택은?",
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
    question: "새로운 차를 산 당신, 처음 하는 행동은?",
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
    question: "날시 좋은 주말, 휴일을 보내는 장신의 선택은?",
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
    question: "나는 첫 차를 고를 때...",
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
