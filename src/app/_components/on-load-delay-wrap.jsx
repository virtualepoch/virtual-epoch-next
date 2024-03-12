"use client";
import { useEffect, useState } from "react";

export const OnLoadDelayWrap = ({
  classNameEnter,
  classNameEnterActive,
  delay = 500,
  children,
}) => {
  const [state, setState] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={
        state ? `${classNameEnter} ${classNameEnterActive}` : classNameEnter
      }
    >
      {children}
    </div>
  );
};
