import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import "echarts-wordcloud";
import { Word } from "../../../types/InfoScreen";
import { fetchWordCloudData } from "../../../api/fetch";
import { useErrorBoundary } from "react-error-boundary";
import carMask from "../../../../common/assets/images/wordcloud.png?as=webp";

const WordCloud = () => {
  const { showBoundary } = useErrorBoundary();
  const [wordCloudData, setWordCloudData] = useState<Word[] | null>(null);

  useEffect(() => {
    const tryFetch = async () => {
      try {
        await fetchData();
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === "Failed to fetch") return;
          showBoundary(error);
        }
      }
    };
    tryFetch();
  }, []);

  const fetchData = async () => {
    const data = await fetchWordCloudData();

    setWordCloudData(data.result.wordList);
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (wordCloudData === null) return;

    const chart = echarts.init(chartRef.current);

    const maskImg = new Image();
    maskImg.src = carMask;

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
            data: wordCloudData,
          },
        ],
      };

      chart.setOption(option);
    };

    return () => {
      chart.dispose();
    };
  }, [wordCloudData]);

  return <div ref={chartRef} style={{ width: "88rem", height: "36rem" }}></div>;
};

export default WordCloud;
