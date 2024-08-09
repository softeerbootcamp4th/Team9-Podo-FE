import React, { useEffect } from "react";
import Glow1 from "../../../assets/svg/Glow1";
import Glow2 from "../../../assets/svg/Glow2";
import Glow3 from "../../../assets/svg/Glow3";
import useAnimation from "../../../hooks/useAnimation";
import { glowOptions } from "../../../styles/options";
import { randomGlow } from "../../../styles/keyframes";

const Glow = () => {
  const { elementRef: oneRef, startAnimation: oneAni } =
    useAnimation<SVGSVGElement>({
      startKeyframes: randomGlow,
      options: glowOptions,
    });

  const { elementRef: twoRef, startAnimation: twoAni } =
    useAnimation<SVGSVGElement>({
      startKeyframes: randomGlow,
      options: glowOptions,
    });

  const { elementRef: threeRef, startAnimation: threeAni } =
    useAnimation<SVGSVGElement>({
      startKeyframes: randomGlow,
      options: glowOptions,
    });

  useEffect(() => {
    oneAni();
    twoAni();
    threeAni();
  }, []);

  return (
    <div className="absolute left-0 top-0">
      <Glow1
        className="absolute -left-[17.625rem] top-[6.375rem]"
        ref={oneRef}
      />
      <Glow2 className="absolute -top-[7rem] left-[20rem]" ref={twoRef} />
      <Glow3 className="absolute left-[52rem] top-[2rem]" ref={threeRef} />
    </div>
  );
};

export default Glow;
