"use client";
import { useEffect, useState } from "react";

export const OnLoadWrap = ({
  classNameEnter,
  classNameEnterActive,
  children,
}) => {
  const [state, setState] = useState();

  useEffect(() => {
    setState(true);
  }, []);

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
