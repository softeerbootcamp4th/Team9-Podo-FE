import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
// import "echarts-wordcloud";
import carMask from "../../../assets/images/wordcloud.png"; // Make sure this path is correct
import Button from "../../../components/common/Button/Button";
import { useNavigate } from "react-router";
import { EVENT_TERMS } from "../../../constants/EventData";

const NotificationScreen = () => {
  const navigate = useNavigate();
  const data = [
    { name: "편안함", value: 100 },
    { name: "연비", value: 95 },
    { name: "디자인", value: 92 },
    { name: "성능", value: 90 },
    { name: "안전", value: 88 },
    { name: "가격", value: 85 },
    { name: "내비게이션", value: 82 },
    { name: "조용함", value: 80 },
    { name: "운전", value: 78 },
    { name: "구매", value: 75 },
    { name: "내구성", value: 73 },
    { name: "서비스", value: 70 },
    { name: "후방 카메라", value: 68 },
    { name: "편의성", value: 65 },
    { name: "브랜드", value: 63 },
    { name: "소음", value: 60 },
    { name: "주행", value: 58 },
    { name: "출력", value: 55 },
    { name: "유지비", value: 53 },
    { name: "타이어", value: 50 },
    { name: "속도", value: 48 },
    { name: "충전", value: 46 },
    { name: "제어", value: 45 },
    { name: "좌석", value: 43 },
    { name: "보험", value: 42 },
    { name: "수리", value: 40 },
    { name: "교체", value: 39 },
    { name: "출고", value: 38 },
    { name: "보증", value: 37 },
    { name: "경험", value: 36 },
    { name: "차량", value: 35 },
    { name: "브레이크", value: 34 },
    { name: "상태", value: 33 },
    { name: "연식", value: 32 },
    { name: "저렴함", value: 31 },
    { name: "성능", value: 30 },
    { name: "편리함", value: 29 },
    { name: "고급스러움", value: 28 },
    { name: "가성비", value: 27 },
    { name: "에어컨", value: 26 },
    { name: "연료", value: 25 },
    { name: "스타일", value: 24 },
    { name: "리모컨", value: 23 },
    { name: "드라이브", value: 22 },
    { name: "성능", value: 21 },
    { name: "신뢰성", value: 20 },
    { name: "연비", value: 19 },
    { name: "음악", value: 18 },
    { name: "호환성", value: 17 },
    { name: "충돌", value: 16 },
    { name: "편집", value: 15 },
    { name: "세차", value: 14 },
    { name: "재판매", value: 13 },
    { name: "모델", value: 12 },
    { name: "정비", value: 11 },
    { name: "안락함", value: 10 },
    { name: "안전성", value: 9 },
    { name: "소비", value: 8 },
    { name: "가속", value: 7 },
    { name: "테크", value: 6 },
    { name: "호환", value: 5 },
    { name: "크기", value: 4 },
    { name: "충전소", value: 3 },
    { name: "가속력", value: 2 },
    { name: "트렁크", value: 1 },
  ];

  return (
    <div className="snap-start flex-col flex-center">
      <div className="h-screen w-screen flex-col justify-around flex-center">
        <div className="w-[94rem] flex-col gap-3 rounded-[5rem] border border-opacity-20 bg-black bg-opacity-5 px-700 py-1000 backdrop-blur-lg flex-center">
          <p className="text-title-2 font-bold text-gray-50">
            The 2025 Seltos에서 가장 기대되는 점은?
          </p>
          <p className="text-body-1-regular text-gray-300">
            EVENT 2를 통해 기대평을 작성하실 수 있습니다.
          </p>
        </div>
        <WordCloud data={data} maskImage={carMask}></WordCloud>
        <Button
          size="small"
          onClick={() => {
            navigate("/event2/0");
          }}
          defaultText="EVENT 2 참여하러 가기"
          disabledText="이벤트 참여 완료"
          isEnabled={true}
        ></Button>
      </div>
      <hr className="w-[94rem] border border-gray-400" />
      <div className="mb-16 mt-12 flex w-[94rem] flex-col justify-start font-kia-signature">
        <p className="text-title-4 font-bold text-gray-50">유의사항</p>
        <ul className="pl-4">
          {EVENT_TERMS.map((term, index) => (
            <li
              key={index}
              className="list-disc text-body-2-bold text-gray-300"
            >
              {term}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationScreen;

const WordCloud = ({ data, maskImage }: any) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const maskImg = new Image();
    maskImg.src = maskImage;

    maskImg.onload = function () {
      const option = {
        series: [
          {
            type: "wordCloud",
            gridSize: 8,
            sizeRange: [16, 120],
            rotationRange: [0, 0],
            shape: "circle",
            maskImage: maskImg,
            textStyle: {
              fontFamily: "Kia-Signature-Regular",
              color: function () {
                const colors = ["#4B7C83", "#4C7DC4", "#C9C9C9"];
                return colors[Math.floor(Math.random() * colors.length)];
              },
            },
            data: data,
          },
        ],
      };

      chart.setOption(option);
    };

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "88rem", height: "36rem" }}></div>;
};
