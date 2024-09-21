"use client";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
// COMPONENTS
import ChatBotBtn from "./chatbot-btn";
// STYLES
import styles from "./chatbot.module.css";

export const ChatBot = () => {
  const [btnSurprisePressed, setBtnSurprisePressed] = useState();
  const [inputPressed, setInputPressed] = useState();
  const [anim, setAnim] = useState();
  const [openChat, setOpenChat] = useState(false);

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const surpriseOptions = [
    "What are the lyrics to the song 'Purple Haze' by Jimi Hendrix?",
    "Who is the current world record holder for tallest person?",
    "How hot is the Sun?",
    "Do aliens exist?",
  ];

  const surprise = () => {
    const randomValue =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
  };

  const getResponse = async () => {
    if (!value) {
      setError("Error! Please ask a question!");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
      setError("Something went wrong! Please try again later.");
    }
  };

  const clear = () => {
    setValue("");
    setError("");
    setChatHistory([]);
  };

  return (
    <div className={styles.chatBotWrap}>
      <ChatBotBtn openChat={openChat} setOpenChat={setOpenChat} />

      <CSSTransition
        in={openChat}
        onEnter={() => setAnim(true)}
        onExit={() => setAnim(false)}
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
          <br />
          <p className={styles.revisionNotice}>
            Unfortunately,
            <br />
            the ChatBot is currently being updated and has been disabled.
            <br />
            <br />
            It will be back up within 24 hours.
          </p>

          <p className={styles}>
            What do you want to know?{" "}
            <button
              className={styles.btnSurprise}
              disabled={chatHistory}
              onMouseDown={() => setBtnSurprisePressed(true)}
              onMouseUp={() => setBtnSurprisePressed(false)}
              onTouchStart={() => setBtnSurprisePressed(true)}
              onTouchEnd={() => setBtnSurprisePressed(false)}
              onClick={surprise}
              style={{
                scale: btnSurprisePressed ? 0.95 : 1,
                boxShadow: btnSurprisePressed
                  ? "none"
                  : "0 -1px 10px 1px #7ff5, inset 0 1px 2px 1px #affa, 0 1px 7px 1px #000",
                backgroundPosition: btnSurprisePressed
                  ? "calc(50% - 10px) 50%"
                  : "50% 50%",
              }}
            >
              Surprise Me
            </button>
          </p>

          <br />
          <div className={styles.inputWrap}>
            <input
              value={value}
              placeholder="Ask Gemini a question . . ."
              onChange={(e) => setValue(e.target.value)}
              className={styles.input}
            />

            {!error && (
              <button
                className={styles.btnInput}
                onClick={getResponse}
                onMouseDown={() => setInputPressed(true)}
                onMouseUp={() => setInputPressed(false)}
                onTouchStart={() => setInputPressed(true)}
                onTouchEnd={() => setInputPressed(false)}
                style={{
                  scale: inputPressed ? 0.95 : 1,

                  boxShadow: inputPressed
                    ? "none"
                    : "0 -1px 10px 1px #7ff5, inset 0 1px 2px 1px #affa, 0 1px 7px 1px #000",
                  backgroundPosition: inputPressed
                    ? "calc(50% - 10px) 50%"
                    : "50% 50%",
                }}
              >
                Go
              </button>
            )}
            {error && (
              <button className={styles.btnInput} onClick={clear}>
                Clear
              </button>
            )}
          </div>

          {error && <p>{error}</p>}

          <div className={styles.searchResult}>
            {chatHistory.map((chatItem, _index) => (
              <div key={""}>
                <p className={styles.answer}>
                  {chatItem.role} : {chatItem.parts}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ChatBot;
