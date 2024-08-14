import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";
import InnerHighlight from "../../../assets/svg/InnerHighlight";
import useInView from "../../../hooks/useInView";

const Guide = () => {
  const { isInView, elementRef } = useInView<HTMLDivElement>(0.9);

  return (
    <div
      ref={elementRef}
      className={`absolute top-0 h-screen w-screen ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-kia-signature-bold text-title-2 text-white">
        마우스를 움직여 차량 내부를 확인해보세요
      </div>
      <InnerHighlight />
    </div>
  );
};

export default forwardRef(Guide);
