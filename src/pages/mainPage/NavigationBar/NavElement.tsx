import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";

interface NavElementProps extends ComponentPropsWithRef<"div"> {
  active: boolean;
}

const NavElement = (
  { active, ...attributes }: NavElementProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return <div>NavElement</div>;
};

export default forwardRef(NavElement);
