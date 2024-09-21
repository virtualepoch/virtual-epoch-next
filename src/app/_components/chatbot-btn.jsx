"use client";
import { useState } from "react";
import styles from "./chatbot.module.css";

export const ChatBotBtn = ({ openChat, setOpenChat }) => {
  const [pressed, setPressed] = useState();

  return (
    <>
      <div
        className={styles.chatBotBtnUnderlay}
        style={{
          width: openChat ? "calc(100% - 4px)" : "50px",
          height: openChat ? "calc(100% - 4px)" : "64px",
          top: openChat ? "2px" : "calc(50vh - 32px)",
          backdropFilter: openChat ? "blur(33px)" : "none",
          boxShadow: openChat
            ? "0 0 10px 1px #0007, inset 0 0 10px 1px #fff7"
            : "none",
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
          scale: pressed ? 0.95 : 1,
          boxShadow:
            pressed | openChat
              ? "none"
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
    </>
  );
};

export default ChatBotBtn;
