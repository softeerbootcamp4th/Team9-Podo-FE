import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "echarts-wordcloud";

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

export default WordCloud;
