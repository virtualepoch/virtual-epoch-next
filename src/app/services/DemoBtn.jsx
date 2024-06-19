"use client";
import { useState } from "react";
import styles from "./page.module.css";

export const DemoBtn = ({ addedClass }) => {
  const [pressed, setPressed] = useState();

  return (
    <div
      className={`${styles.demoBtn} ${addedClass}`}
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
      <p className={styles.demoBtnText}>hover or tap</p>
    </div>
  );
};
