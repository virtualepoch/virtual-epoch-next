import { useState, useEffect } from "react";

export const BtnContact = ({ setModal }) => {
  const [smallBtn, setSmallBtn] = useState(false);
  const [pressed, setPressed] = useState();

  useEffect(() => {
    function handleScroll() {
      // const { scrollTop, scrollHeight, clientHeight } =
      //   document.documentElement;

      if (
        // (scrollTop + clientHeight <= scrollHeight - 200) |
        window.scrollY >= 20
      ) {
        setSmallBtn(true);
      } else {
        setSmallBtn(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="btn-contact-wrap">
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
        style={{
          width: smallBtn ? "32px" : "254px",
          height: smallBtn ? "32px" : "54px",
          filter: pressed ? "none" : "drop-shadow(0 0 3px #0ff)",
        }}
      >
        <div
          className={smallBtn ? "btn-contact-text" : "btn-contact-text visible"}
        >
          {smallBtn ? "" : "contact us"}
        </div>
      </button>
    </div>
  );
};