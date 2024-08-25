import Outside1 from "../../common/assets/images/Outside1.png?as=webp";
import Outside2 from "../../common/assets/images/Outside2.png?as=webp";
import Outside3 from "../../common/assets/images/Outside3.png?as=webp";

import Drive1 from "../../common/assets/images/Drive1.png?as=webp-smallh";
import Drive2 from "../../common/assets/images/Drive2.png?as=webp-smallh";
import Drive3 from "../../common/assets/images/Drive3.png?as=webp-smallh";
import Drive4 from "../../common/assets/images/Drive4.png?as=webp-smallh";
import Drive5 from "../../common/assets/images/Drive5.png?as=webp-smallh";
import Drive6 from "../../common/assets/images/Drive6.png?as=webp-smallh";

import Convenience1 from "../../common/assets/images/Convenience1.png?as=webp";
import Convenience2 from "../../common/assets/images/Convenience2.png?as=webp";
import Convenience3 from "../../common/assets/images/Convenience3.png?as=webp";

import white from "../../common/assets/images/colorSnowWhitePearl.png?as=webp";
import blue from "../../common/assets/images/colorDarkOceanBlue.png?as=webp";
import green from "../../common/assets/images/colorGrean.png?as=webp";
import gray from "../../common/assets/images/colorGravityGray.png?as=webp";
import black from "../../common/assets/images/colorFusionBlack.png?as=webp";

import { InsideInfo, InsideInfoData } from "../types/InfoScreen";

export const outsideInfoData = [
  {
    key: 0,
    image: Outside1,
    title: "미래를 향한 혁신적 시도",
    content:
      "기아의 신규 디자인 철학인 오피짓 유나이티드(Opposites United, 상반된 개념의 상의적 융합)의 속성 중 '미래를 향한 혁신적 시도(Power to Progress)'에서 영감 받아, 대담하고도 미래지향적인 외장 디자인을 추구했습니다.",
  },
  {
    key: 1,
    image: Outside2,
    title: "셀토스 스타일",
    content:
      "강인하고 당당하면서도 고급스러움을 추구하는 것, 바로 '셀토스 스타일(Seltos Style)'입니다.",
  },
  {
    key: 2,
    image: Outside3,
    title: "고급스러운 다크함",
    content:
      "어두운 컬러가 강조된 디자인 요소를 통해 고급스러운 다크함을 구현했습니다. (미드나잇 그린 인테리어는 그래비티에서만 만나볼 수 있습니다.)",
  },
];

export const driveInfoData = [
  {
    key: 0,
    image: Drive1,
    title: "차로 이탈방지 보조",
    description:
      "일정 속도 이상 주행 중 방향지시등 스위치 조작 없이 차로 이탈 시, 경고 및 자동으로 조향을 보조하여 차로를 이탈하지 않도록 도와줍니다.",
  },
  {
    key: 1,
    image: Drive2,
    title: "안전을 넘어 보다 즐겁고 기분 좋은 운전",
    description:
      "1.6 가솔린 터보 엔진, 8단 자동변속기 및 첨단 운전자 보조 시스템을 적용했습니다.",
  },
  {
    key: 2,
    image: Drive3,
    title: "내비게이션 기반 스마트 크루즈 컨트를",
    description:
      "고속도로 및 자동차 전용 도로 주행 시, 도로 상황에 맞춰 안전한 속도로 주행하도록 도와줍니다. (고속도로 / 자동차 전용도로 內 안전구간 / 곡선로)",
  },
  {
    key: 3,
    image: Drive4,
    title: "지능형 속도제한 보조",
    description:
      "전방 카메라 또는 내비게이션의 제한 속도 정보를 초과하여 주행할 경위 경고를 해주고 제한 속도를 초과하지 않도록 도와줍니다.",
  },
  {
    key: 4,
    image: Drive5,
    title: "차로 유지 보조",
    description:
      "차량이 차로 한가운데를 유지하며 주행할 수 있게끔 도와주는 기능으로 주행 안정감과 더불어 운전자의 심리적 안정감을 더하는 기능이 됩니다.",
  },
  {
    key: 5,
    image: Drive6,
    title: "고속도로 주행 보조",
    description:
      "일정 속도 이상 주행 중 방향지시등 스위치 조작 없이 차로 이달 시, 경고 및 자동으로 조향을 보조하여 차로를 이탈하지 않도록 도와줍니다.",
  },
];

export const convenienceInfoData = [
  {
    key: 0,
    image: Convenience1,
    title: "스마트 파워테일게이트",
    description:
      "스마트 키를 소지하고 차량 후면에 접근 시 일정 시간 후 자동으로 테일게이트가 열려 짐을 편리하게 실을 수 있습니다. 다양한 고객의 신장 및 적재 환경에 따라 테일게이트 열림 높이를 조절할 수 있습니다.",
  },
  {
    key: 1,
    image: Convenience2,
    title: "운전석 메모리시트",
    description:
      "운전석 시트 포지션 기억/재생 시스템을 적용해 운전자 변경 시의 시트 조작 편의성을 향상하고, 이지 억세스(EASY ACCESS)기능을 통해 운전자 승하차 편의성을 향상했습니다.",
  },
  {
    key: 2,
    image: Convenience3,
    title: "빌트인 캠(주행 중 영상기록장치)",
    description:
      "주행/주차 중 전/후방 카메라를 통해 영상을 기록하고, 내비게이션 화면을 통해 영상을 확인하거나 스마트폰으로 전송할 수 있는 빌트인 영상기록 장치입니다.",
  },
];

export const PERFORMANCE = {
  title: "성능",
  subtitle: "도심에서 빛나는 강력한 주행 성능",
};

export const ENGINE_SPECS = {
  turbo_1_6: {
    title: "1.6 가솔린 터보",
    specs: [
      { value: "198", label: "최고출력\nps / 6,000rpm" },
      { value: "27.0", label: "최대토크\nkgf∙m / 1,600~4,500rpm" },
      { value: "12.8", label: "복합연비\nkm/L" },
    ],
    note: "(2WD 16인치 타이어, 빌트인 캠 미장착 기준)",
  },
  gasoline_2_0: {
    title: "2.0 가솔린",
    specs: [
      { value: "149", label: "최고출력\nps / 6,200rpm" },
      { value: "18.3", label: "최대토크\nkgf∙m / 4,500rpm" },
      { value: "12.9", label: "복합연비\nkm/L" },
    ],
    note: "(2WD 16인치 타이어 기준)",
  },
};

export const ELECTRONIC_4WD = {
  title: "전자식 4WD",
  description:
    "노면 및 주행 상황에 따라 구동력을 전후륜에 능동적으로 배분하여 안정적인 선회 및 우수한 주행 성능을 제공합니다.",
};

export const INSIDE_INFO_DATA: Record<InsideInfo, InsideInfoData> = {
  light: {
    title: "엠비언트 라이트",
    description:
      "사운드에 따라 밝기가 변하는 무드조명을 도어 스피커와 크래쉬 패드 가니쉬에 적용하였습니다.",
  },
  dial: {
    title: "전자식 변속 다이얼",
    description:
      "정교한 디테일이 돋보이는 다이럴 타입 전자식 변속기를 적용하여 편안한 그립감과 사용성을 동시에 제공합니다.",
  },
  display: {
    title: "파노라마 디스플레이",
    description:
      "10.25인치 클러스터와 10.25인치 내비게이션이 통합된 파노라마 디스플레이를 적용하여 심플하고 하이테크한 실내 인테리어를 구현했습니다.",
  },
  blow: {
    title: "애프터 블로우",
    description:
      "에어컨 작동 시 발생하는 응축수를 건조하여 냄새 발생을 사전에 방지하도록 해줍니다.",
  },
  headup: {
    title: "컨바이너 헤드업 디스플레이",
    description:
      "운전석 전면 투명판에 주행에 필요한 각종 정보를 디스플레이하는 기능으로 주행 중 전방에서 눈을 떼지 않고도 다양한 정보를 인지할 수 있게 하여 안전 및 편의성을 향상시켜줍니다.",
  },
};

export const InsideGuideTextShowTime = 2000;
export const InsideGuideTextAnimationTime = 500;

export const colorInfoData = [
  {
    key: 0,
    color: white,
    koTitle: "스노우 화이트 펄",
    engTitle: "Snow White Pearl",
    rgb: "bg-[#F2F2F2]",
  },
  {
    key: 1,
    color: blue,
    koTitle: "다크 오션 블루",
    engTitle: "Dark Ocean Blue",
    rgb: "bg-[#1B3F72]",
  },
  {
    key: 2,
    color: green,
    koTitle: "플루톤 블루",
    engTitle: "Pluton Blue",
    rgb: "bg-[#4B7C83]",
  },
  {
    key: 3,
    color: gray,
    koTitle: "그레비티 그레이",
    engTitle: "Gravity Gray",
    rgb: "bg-[#292F35]",
  },
  {
    key: 4,
    color: black,
    koTitle: "퓨전 블랙",
    engTitle: "Fusion Black",
    rgb: "bg-[#181818]",
  },
  {
    key: 5,
    color: black,
    koTitle: "퓨전 블랙",
    engTitle: "Fusion Black",
    rgb: "bg-[#181818]",
  },
];
