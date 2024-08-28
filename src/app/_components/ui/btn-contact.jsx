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
          width: smallBtn ? "54px" : "254px",
          height: "54px",
          boxShadow: pressed
            ? "none"
            : "0 -2px 4px 1px #0ff5, inset 1px 1px 3px 1px #0ff9, 0 1px 4px 1px #000",
            textShadow: pressed ? "none" : "0 1px 3px #000"
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
