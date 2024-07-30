import React from "react";
import NavElement from "./NavElement";

const NavigationBar = () => {
  return (
    <>
      <NavElement active={false} ref={null} />
      <NavElement active={false} ref={null} />
    </>
  );
};

export default NavigationBar;
