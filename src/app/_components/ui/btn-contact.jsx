import { useState, useEffect } from "react";

export const BtnContact = ({ setModal }) => {
  const [smallBtn, setSmallBtn] = useState();
  const [pressed, setPressed] = useState();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 20) {
        setSmallBtn(true);
      } else {
        setSmallBtn(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={
        smallBtn ? "btn-open-contact-modal small" : "btn-open-contact-modal"
      }
      onClick={() => {
        setModal(true);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
    >
      <div
        className={smallBtn ? "btn-contact-bg small" : "btn-contact-bg"}
        style={{
          filter: pressed ? "none" : "drop-shadow(0 0 3px #0ff)",
        }}
      >
        <div
          className={smallBtn ? "btn-contact-text" : "btn-contact-text visible"}
        >
          {smallBtn ? "" : "contact us"}
        </div>
      </div>
    </button>
  );
};
