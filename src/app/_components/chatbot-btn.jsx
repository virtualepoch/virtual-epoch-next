"use client";
import { useState, useEffect } from "react";
import styles from "./chatbot.module.css";

export const ChatBotBtn = ({ openChat, setOpenChat }) => {
  const [pressed, setPressed] = useState();

  const [tiltX, setTiltX] = useState(0);
  // const [tiltY, setTiltY] = useState(0);

  useEffect(() => {
    const handleDeviceOrientation = (e) => {
      setTiltX(Math.round(e.beta));
      // setTiltY(Math.round(e.gamma));
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  return (
    <>
      <div
        className={styles.chatBotBtnUnderlay}
        style={{
          width: openChat ? "100%" : "300px",
          height: openChat ? "100%" : "64px",
          top: openChat ? 0 : "calc(50vh - 32px)",
          // left: openChat ? "auto" : "2px",
          // right: openChat ? 0 : "2px",
          borderRadius: openChat ? 0 : "64px",
          backdropFilter: openChat ? "blur(33px)" : "none",
          boxShadow: openChat
            ? "none"
            : "0 0 10px 1px #0007, inset 0 0 10px 1px #fff7",
          backgroundPosition: `center ${tiltX + 5}%`,
        }}
      />

      <button
        onClick={() => {
          setOpenChat(!openChat);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        style={{
          width: openChat ? "50px" : "300px",
          height: openChat ? "50px" : "64px",
          top: openChat ? "64px" : "calc(50vh - 32px)",
          left: openChat ? "auto" : 0,
          right: openChat ? "2px" : 0,
          borderRadius: openChat ? 0 : "64px",
          scale: pressed ? 0.95 : 1,
          boxShadow: pressed
            ? "none"
            : openChat
            ? // ? "-1px -1px 8px 1px #eff3, inset 1px 1px 8px 1px #eff3, inset -1px -1px 8px 1px #0118, 1px 1px 8px 1px #0118"
              "none"
            : "0 -1px 10px 1px #7ff5, inset 0 1px 2px 1px #affa, 0 1px 7px 1px #000",
          textShadow: pressed ? "none" : "0 0 5px #0ff",
          background: openChat
            ? "url(/icons/xmark-solid.svg) 50% 50% / 50% no-repeat"
            : "none",
          filter: openChat ? "drop-shadow(0 0 10px #0ff)" : "none",
        }}
        className={styles.btnOpenChat}
      >
        {openChat ? "" : "Ai"}
      </button>

      <div className={styles.test}>tiltX: {tiltX}</div>
    </>
  );
};

export default ChatBotBtn;
