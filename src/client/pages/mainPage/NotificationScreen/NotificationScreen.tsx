import React, { useEffect, useRef, useState } from "react";
import carMask from "../../../../common/assets/images/wordcloud.png";
import Button from "../../../components/common/Button/Button";
import { useNavigate } from "react-router";
import { EVENT_TERMS } from "../../../constants/EventData";
import { fetchWordCloudData } from "../../../api/fetch";
import WordCloud from "../../../components/mainPage/InfoScreen/WordCloud";
import { useErrorBoundary } from "react-error-boundary";

const NotificationScreen = () => {
  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();
  const [wordCloudData, setWordCloudData] = useState({});

  useEffect(() => {
    const tryFetch = async () => {
      try {
        await fetchData();
      } catch (error) {
        showBoundary(error);
      }
    };
    tryFetch();
  }, []);

  const fetchData = async () => {
    const data = await fetchWordCloudData();

    setWordCloudData(data.result.wordList);
  };

  return (
    <div className="snap-start flex-col flex-center">
      <div className="flex h-screen w-screen flex-col items-center justify-around">
        <div className="w-[94rem] flex-col gap-3 rounded-[5rem] border border-opacity-20 bg-black bg-opacity-5 px-700 py-1000 backdrop-blur-lg flex-center">
          <p className="text-title-2 font-bold text-gray-50">
            The 2025 Seltos에서 가장 기대되는 점은?
          </p>
          <p className="text-body-1-regular text-gray-300">
            EVENT 2를 통해 기대평을 작성하실 수 있습니다.
          </p>
        </div>
        {/* <WordCloud data={wordCloudData} maskImage={carMask}></WordCloud> */}
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
