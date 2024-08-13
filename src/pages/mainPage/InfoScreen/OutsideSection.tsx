import React, { useEffect, useRef, useState } from "react";
import OutsideDescriptionItem from "../../../components/mainPage/InfoScreen/OutsideDescriptionItem";
import OutsideInfo from "../../../assets/images/OutsideInfo.png";
import { OutsideInfoData } from "../../../constants/InfoData";
import Carousel from "../../../components/common/Carousel/Carousel";

const OutsideSection = () => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else if (entry.intersectionRect.top !== 0) {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.9,
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="flex w-screen snap-start flex-col items-center bg-white">
      <div className="mb-600 mt-[5rem] h-[2.75rem] w-[4.375rem] rounded-[6.25rem] font-kia-signature text-title-4 text-gray-400 flex-center gradient-border">
        외장
      </div>
      <div className="mb-12 font-kia-signature-bold text-title-1 text-gray-950">
        역동적인 스타일에 미래적 감성을 더하다
      </div>
      <img
        ref={imgRef}
        src={OutsideInfo}
        alt="OutsideImage"
        className={`h-screen w-screen snap-start ${isInView ? "scale-100" : "scale-90"} mb- transition-transform duration-200`}
      />
      <div className="pt-[5rem]">
        <Carousel
          items={OutsideInfoData.map(({ key, title, content, image }) => {
            return (
              <OutsideDescriptionItem
                key={key}
                title={title}
                description={content}
                img={image}
              />
            );
          })}
        />
      </div>
    </div>
  );
};

export default OutsideSection;
