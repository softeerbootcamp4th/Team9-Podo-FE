import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
// import "echarts-wordcloud";
import carMask from "../../../assets/images/wordcloud.png"; // Make sure this path is correct
import Button from "../../../components/common/Button/Button";
import { useNavigate } from "react-router";
import { EVENT_TERMS } from "../../../constants/EventData";
import { fetchWordCloudData } from "../../../api/fetch";
import { WordListResponse } from "../../../types/InfoScreen";

const NotificationScreen = () => {
  const navigate = useNavigate();
  const [wordCloudData, setWordCloudData] = useState<WordListResponse | null>(
    null,
  );

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchData = async () => {
    const data = await fetchWordCloudData();

    setWordCloudData(data.result);
  };

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
        <WordCloud data={wordCloudData} maskImage={carMask}></WordCloud>
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
