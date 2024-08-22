import React, { useEffect, useRef, useState } from "react";
import carImg from "../../../../../common/assets/images/powerImg.webp";
import {
  ELECTRONIC_4WD,
  ENGINE_SPECS,
  PERFORMANCE,
} from "../../../../constants/InfoData";
import useInView from "../../../../hooks/useInView";

interface SpecItemProps {
  value: string;
  label: string;
}

const SpecItem = ({ value, label }: SpecItemProps) => (
  <div className="flex w-80 items-center gap-500 font-kia-signature font-semibold">
    <p className="text-[3rem] text-gray-950">{value}</p>
    <p className="whitespace-pre text-body-1-regular text-gray-700">{label}</p>
  </div>
);

interface EngineSpecProps {
  title: string;
  specs: { value: string; label: string }[];
  note: string;
}

const EngineSpec = ({ title, specs, note }: EngineSpecProps) => (
  <div className="flex flex-col">
    <p>{title}</p>
    <div className="flex">
      {specs.map((spec, index) => (
        <SpecItem key={index} value={spec.value} label={spec.label} />
      ))}
    </div>
    <p className="ml-[40rem] text-body-2-regular text-gray-500">{note}</p>
  </div>
);

const PerformanceSection = () => {
  const { isInView, elementRef } = useInView<HTMLDivElement>(0.7);

  return (
    <div
      className="flex h-screen w-screen snap-start items-center overflow-hidden bg-white pl-[10%] font-kia-signature"
      ref={elementRef}
    >
      <div className="flex h-fit w-fit flex-col">
        <div className="flex flex-col gap-5">
          <div className="h-[2.75rem] w-fit rounded-[6.25rem] px-500 py-300 text-title-4 text-gray-400 flex-center gradient-border">
            {PERFORMANCE.title}
          </div>
          <div className="mb-12 font-kia-signature-bold text-title-1 text-gray-950">
            {PERFORMANCE.subtitle}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <EngineSpec
            title={ENGINE_SPECS.turbo_1_6.title}
            specs={ENGINE_SPECS.turbo_1_6.specs}
            note={ENGINE_SPECS.turbo_1_6.note}
          />
          <hr className="w-[56.5rem] border border-gray-300" />

          <EngineSpec
            title={ENGINE_SPECS.gasoline_2_0.title}
            specs={ENGINE_SPECS.gasoline_2_0.specs}
            note={ENGINE_SPECS.gasoline_2_0.note}
          />
          <hr className="w-[56.5rem] border border-gray-300" />

          <div className="flex flex-col gap-4">
            <p className="text-title-4 font-semibold text-gray-950">
              {ELECTRONIC_4WD.title}
            </p>
            <p className="text-body-1-regular text-gray-600">
              {ELECTRONIC_4WD.description}
            </p>
          </div>
        </div>
      </div>
      <img
        src={carImg}
        alt="셀토스"
        className={`${isInView ? "translate-x-0" : "translate-x-80"} h-fit w-fit transition-all duration-500`}
      />
    </div>
  );
};

export default PerformanceSection;
