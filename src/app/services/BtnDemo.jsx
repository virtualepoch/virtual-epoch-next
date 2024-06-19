"use client";
import { useState } from "react";

export const BtnDemo = ({ children }) => {
  const [pressed, setPressed] = useState();

  return (
    <div
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        boxShadow: pressed
          ? "none"
          : "1px 2px 10px 1px #0004, inset 1px 1px 2px 1px #0ff7, inset -1px -1px 2px 1px #00a7",
      }}
    >
      {children}
    </div>
  );
};
