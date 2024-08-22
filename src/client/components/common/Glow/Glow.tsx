import React, { useEffect } from "react";
import Glow1 from "../../../../common/assets/svg/Glow1";
import Glow2 from "../../../../common/assets/svg/Glow2";
import Glow3 from "../../../../common/assets/svg/Glow3";
import useAnimation from "../../../hooks/useAnimation";
import { glowFadeOptions, glowOptions } from "../../../styles/options";
import { fadeIn, randomGlow } from "../../../styles/keyframes";

const Glow = () => {
  const { elementRef: oneRef, startAnimation: oneAni } =
    useAnimation<SVGSVGElement>({
      startKeyframes: fadeIn,
      startOptions: { ...glowFadeOptions, delay: 1000 },
      afterStartKeyframes: randomGlow,
      afterStartOptions: glowOptions,
    });

  const { elementRef: twoRef, startAnimation: twoAni } =
    useAnimation<SVGSVGElement>({
      startKeyframes: fadeIn,
      startOptions: { ...glowFadeOptions, delay: 2000 },
      afterStartKeyframes: randomGlow,
      afterStartOptions: glowOptions,
    });

  const { elementRef: threeRef, startAnimation: threeAni } =
    useAnimation<SVGSVGElement>({
      startKeyframes: fadeIn,
      startOptions: { ...glowFadeOptions, delay: 3000 },
      afterStartKeyframes: randomGlow,
      afterStartOptions: glowOptions,
    });

  useEffect(() => {
    oneAni();
    twoAni();
    threeAni();
  }, []);

  return (
    <div className="absolute left-0 top-0">
      <Glow1 className="absolute -left-[13.625rem] top-[0rem]" ref={oneRef} />
      <Glow3 className="absolute left-[52rem] top-[2rem]" ref={threeRef} />
      <Glow2 className="absolute -top-[7rem] left-[20rem]" ref={twoRef} />
    </div>
  );
};

export default Glow;
