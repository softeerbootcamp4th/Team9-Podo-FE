import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";
import hint1 from "../../../assets/images/hint1.png";
import hint2 from "../../../assets/images/hint2.png";
import hint3 from "../../../assets/images/hint3.png";
import hint4 from "../../../assets/images/hint4.png";
import hint5 from "../../../assets/images/hint5.png";
import hint6 from "../../../assets/images/hint6.png";
import hint7 from "../../../assets/images/hint7.png";

interface FCFSHintSectionProps extends ComponentPropsWithRef<"div"> {}

interface GasolineInfo {
  title: string;
  id: number;
  value: {
    maxPower: string;
    maxTorque: string;
    efficiency: string;
  };
}

const hintInfo = [
  {
    id: 1,
    content: "차로 유지 보조",
    img: hint1,
    grid: "col-start-1 col-end-2 row-start-1 row-end-3",
  },
  {
    id: 2,
    content: "차로 유지 보조",
    img: hint2,
    grid: "col-start-1 col-end-2 row-start-3 row-end-5",
  },
  {
    id: 3,
    content: "셀토스 그래비티에서만 만나볼 수 있는 미드나잇 그린 인테리어",
    img: hint3,
    grid: "col-start-2 col-end-4 row-start-1 row-end-3",
  },
  {
    id: 4,
    content: "네비게이션 기반 스마트 크루즈 컨트롤",
    img: hint4,
    grid: "col-start-2 col-end-3 row-start-3 row-end-5",
  },
  {
    id: 5,
    content: "더 넓어진 파노라마 디스플레이",
    img: hint5,
    grid: "col-start-3 col-end-4 row-start-3 row-end-4",
  },
  {
    id: 6,
    content: "정교한 전자식 변속 다이얼",
    img: hint6,
    grid: "col-start-3 col-end-4 row-start-4 row-end-5",
  },
];

const gasolineInfo: Array<GasolineInfo> = [
  {
    id: 1,
    title: "1.6 가솔린 터보",
    value: {
      maxPower: "198",
      maxTorque: "27.0",
      efficiency: "12.8",
    },
  },
  {
    id: 2,
    title: "2.0 가솔린",
    value: {
      maxPower: "149",
      maxTorque: "18.3",
      efficiency: "12.9",
    },
  },
];

const GasolineInfo = ({ title, value }: GasolineInfo) => {
  return (
    <>
      <div className="m-800 flex-col gap-500 flex-center">
        <div className="relative font-kia-signature-bold text-body-2-bold text-gray-100 before:-inset-[0.5rem] before:content-none before:gradient-mask">
          <span>{title}</span>
        </div>
        <div className="flex justify-between gap-600">
          <div className="flex flex-col items-center">
            <div className="pb-300 font-kia-signature text-body-2-regular text-gray-300">
              최고출력
            </div>
            <div className="font-kia-signature-bold text-2xl text-gray-100">
              {value.maxPower}
            </div>
            <div className="font-kia-signature-bold text-xs text-gray-400">
              ps
            </div>
            <div className="font-kia-signature text-xs text-gray-400">
              6,000rpm
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="pb-300 font-kia-signature text-body-2-regular text-gray-300">
              최대토크
            </div>
            <div className="font-kia-signature-bold text-2xl text-gray-100">
              {value.maxTorque}
            </div>
            <div className="font-kia-signature-bold text-xs text-gray-400">
              kgf∙m
            </div>
            <div className="font-kia-signature text-xs text-gray-400">
              1,600~4,000rpm
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="pb-300 font-kia-signature text-body-2-regular text-gray-300">
              복합연비
            </div>
            <div className="font-kia-signature-bold text-2xl text-gray-100">
              {value.efficiency}
            </div>
            <div className="font-kia-signature-bold text-xs text-gray-400">
              km/L
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FCFSHintSection = (
  { onMouseLeave, onMouseEnter, ...attributes }: FCFSHintSectionProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <>
      <div className="absolute bottom-16 flex-col font-kia-signature-bold text-title-4 text-white flex-center">
        <p>마우스를 올리면 힌트가 나와요</p>
        <p>▼</p>
      </div>
      <div
        className="absolute -bottom-[43rem] h-[44.5rem] w-[86rem]"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          role="dialog"
          className="grid h-full grid-cols-4 grid-rows-4 gap-4 rounded-[2.75rem] bg-white/10 p-700 backdrop-blur-sm"
        >
          {hintInfo.map(({ id, content, img, grid }, index) => {
            return (
              <div role="listitem" key={id} className={`${grid}`}>
                <div
                  style={{ backgroundImage: `url(${img})` }}
                  className="h-full w-full rounded-[1.25rem] bg-cover bg-center font-kia-signature-bold text-title-4 text-white flex-center"
                >
                  {content}
                </div>
              </div>
            );
          })}
          <div className="col-start-4 col-end-5 row-start-1 row-end-5 rounded-[1.25rem] bg-gradient-to-b from-black to-gray-300">
            <div
              style={{ backgroundImage: `url(${hint7})` }}
              className="h-full w-full bg-contain bg-bottom bg-no-repeat"
              role="listitem"
            >
              {gasolineInfo.map(({ id, title, value }, index) => {
                if (index === 0)
                  return (
                    <div key={id}>
                      <GasolineInfo id={id} title={title} value={value} />
                      <div className="flex-center">
                        <hr className="w-4/5 bg-gray-500" />
                      </div>
                    </div>
                  );
                else
                  return (
                    <GasolineInfo key={8} id={id} title={title} value={value} />
                  );
              })}
            </div>
          </div>
        </div>
        <div className="h-[30rem] w-full bg-transparent"></div>
      </div>
    </>
  );
};

export default forwardRef(FCFSHintSection);
