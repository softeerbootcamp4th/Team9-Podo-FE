import React, { useEffect, useRef, useState } from "react";
import carImg from "../../../assets/images/powerImg.png";

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
  const [isInView, setIsInView] = useState(false);
  const divRef = useRef(null);

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
        threshold: 0.7,
      },
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex h-screen w-screen snap-start items-center overflow-hidden bg-white pl-[10%] font-kia-signature"
      ref={divRef}
    >
      <div className="flex h-fit w-fit flex-col">
        <div className="flex flex-col gap-5">
          <div className="h-[2.75rem] w-fit rounded-[6.25rem] px-500 py-300 text-title-4 text-gray-400 flex-center gradient-border">
            성능
          </div>
          <div className="mb-12 font-kia-signature-bold text-title-1 text-gray-950">
            도심에서 빛나는 강력한 주행 성능
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <EngineSpec
            title="1.6 가솔린 터보"
            specs={[
              { value: "198", label: "최고출력\nps / 6,000rpm" },
              { value: "27.0", label: "최대토크\nkgf∙m / 1,600~45,00rpm" },
              { value: "12.8", label: "복합연비\nkm/L" },
            ]}
            note="(2WD 16인치 타이어, 빌트인 캠 미장착 기준)"
          />
          <hr className="w-[56.5rem] border border-gray-300" />

          <EngineSpec
            title="2.0 가솔린"
            specs={[
              { value: "149", label: "최고출력\nps / 6,000rpm" },
              { value: "18.3", label: "최대토크\nkgf∙m / 1,600~45,00rpm" },
              { value: "12.9", label: "복합연비\nkm/L" },
            ]}
            note="(2WD 16인치 타이어 기준)"
          />
          <hr className="w-[56.5rem] border border-gray-300" />

          <div className="flex flex-col gap-4">
            <p className="text-title-4 font-semibold text-gray-950">
              전자식 4WD
            </p>
            <p className="text-body-1-regular text-gray-600">
              노면 및 주행 상황에 따라 구동력을 전후륜에 능동적으로 배분하여
              안정적인 선회 및 우수한 주행 성능을 제공합니다.
            </p>
          </div>
        </div>
      </div>
      <img
        src={carImg}
        alt="셀토스"
        className={`${isInView ? "translate-x-0" : "translate-x-80"} transition-all duration-500`}
      />
    </div>
  );
};

export default PerformanceSection;
