"use client";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useChat } from "ai/react";
// COMPONENTS
import ChatBotBtn from "./chatbot-btn";
// STYLES
import styles from "./chatbot.module.css";

export function ChatBotGemini() {
  // const [anim, setAnim] = useState();
  const [openChat, setOpenChat] = useState();
  const [submitPressed, setSubmitPressed] = useState();

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api:'api/genai'
  });

  return (
    <div className={styles.chatBotWrap}>
      <ChatBotBtn openChat={openChat} setOpenChat={setOpenChat} />

      <CSSTransition
        in={openChat}
        // onEnter={() => setAnim(true)}
        // onExit={() => setAnim(false)}
        timeout={500}
        classNames="chatbot"
        unmountOnExit
      >
        <div className={styles.chatBot}>
          <h1 className={styles.headerChatBot}>Ai Chat</h1>
          <br />
          <h2 className={styles.subHeaderChatBot}>
            Powered by Google&apos;s Gemini AI
          </h2>
          <br />
          {/* form element */}
          {RenderForm()}
          {/* render messages */}
          {/* {RenderMessages()} */}
          <h1>Bottom</h1>
        </div>
      </CSSTransition>
    </div>
  );

  function RenderForm() {
    return (
      <form onSubmit={handleSubmit} className={styles.inputWrap}>
        <input
          type="text"
          name="prompt"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask Gemini a question . . ."
          className={styles.input}
        />
        <button
          type="submit"
          className={styles.btnInput}
          // onClick={}
          onMouseDown={() => setSubmitPressed(true)}
          onMouseUp={() => setSubmitPressed(false)}
          onTouchStart={() => setSubmitPressed(true)}
          onTouchEnd={() => setSubmitPressed(false)}
          style={{
            scale: submitPressed ? 0.95 : 1,

            boxShadow: submitPressed
              ? "none"
              : "0 -1px 10px 1px #7ff5, inset 0 1px 2px 1px #affa, 0 1px 7px 1px #000",
            backgroundPosition: submitPressed
              ? "calc(50% - 10px) 50%"
              : "50% 50%",
          }}
        >
          <div className={styles.inputIcon} />
        </button>
      </form>
    );
  }

  // function RenderMessages() {
  //   return <div></div>;
  // }
}
