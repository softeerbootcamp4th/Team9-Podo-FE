import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "echarts-wordcloud";
import carMask from "../../../assets/images/wordcloud.png";

const NotificationScreen = () => {
  return (
    <div className="h-screen w-screen snap-start">
      <div>title</div>
      <WordCloud data={data}></WordCloud>
      <div>Notification</div>
    </div>
  );
};

export default NotificationScreen;

const data = [
  { name: "JavaScript", value: 1000 },
  { name: "TypeScript", value: 800 },
  { name: "React", value: 600 },
  { name: "Vue", value: 400 },
  { name: "JavaScript", value: 1000 },
  { name: "TypeScript", value: 800 },
  { name: "React", value: 600 },
  { name: "Vue", value: 400 },
  { name: "JavaScript", value: 1000 },
  { name: "TypeScript", value: 800 },
  { name: "React", value: 600 },
  { name: "Vue", value: 400 },
  { name: "JavaScript", value: 1000 },
  { name: "TypeScript", value: 800 },
  { name: "React", value: 600 },
  { name: "Vue", value: 400 },
  { name: "JavaScript", value: 1000 },
  { name: "TypeScript", value: 800 },
  { name: "React", value: 600 },
  { name: "Vue", value: 400 },
  { name: "JavaScript", value: 1000 },
  { name: "TypeScript", value: 800 },
  { name: "React", value: 600 },
  { name: "Vue", value: 400 },
  { name: "JavaScript", value: 1000 },
  { name: "TypeScript", value: 800 },
  { name: "React", value: 600 },
  { name: "Vue", value: 400 },
  { name: "JavaScript", value: 1000 },
  { name: "TypeScript", value: 800 },
  { name: "React", value: 600 },
  { name: "Vue", value: 400 },
];

const WordCloud = ({ data }: any) => {
  const carMaskURL = require("../../../assets/images/wordcloud.png");
  const chartRef = useRef(null);
  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      series: [
        {
          type: "wordCloud",
          gridSize: 10,
          sizeRange: [12, 50],
          rotationRange: [0, 0],
          shape: "circle",
          textStyle: {
            normal: {
              color: function () {
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 255),
                    Math.round(Math.random() * 255),
                    Math.round(Math.random() * 255),
                  ].join(",") +
                  ")"
                );
              },
            },
          },
          data: data,
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "600px", height: "400px" }}></div>;
};
