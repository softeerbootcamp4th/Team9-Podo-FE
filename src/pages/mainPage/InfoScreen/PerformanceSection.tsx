import React from "react";
import PerformanceDescriptionItem from "../../../components/mainPage/InfoScreen/PerformanceDescriptionItem";

const PerformanceSection = () => {
  return (
    <>
      <div>Header</div>
      <img />
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
          return <GasolineInfo key={8} id={id} title={title} value={value} />;
      })}
    </>
  );
};

export default PerformanceSection;

interface GasolineInfo {
  title: string;
  id: number;
  value: {
    maxPower: string;
    maxTorque: string;
    efficiency: string;
  };
}

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
        <div className="rounded-[12rem] border p-2 px-3 font-kia-signature-bold text-body-2-bold text-gray-100 gradient-border">
          {title}
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
