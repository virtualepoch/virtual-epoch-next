"use client";
import { useRef, useState } from "react";
import { useOnScreen } from "../_functions/use-on-screen";

export const OnIntersectionWrap = ({
  rootMargin = "0px 0px 0px 0px",
  threshold = 0.5,
  classNameEnter,
  classNameEnterActive,
  children,
}) => {
  const ref = useRef();
  const [state, setState] = useState(false);

  const callback = () => {
    setState(true);
  };

  useOnScreen(ref, callback, {
    rootMargin: rootMargin,
    threshold: threshold,
  });

  return (
    <div ref={ref} style={{ minHeight: "50vh" }}>
      {state && (
        <div
          className={
            state ? `${classNameEnter} ${classNameEnterActive}` : classNameEnter
          }
        >
          {children}
        </div>
      )}
    </div>
  );
};
