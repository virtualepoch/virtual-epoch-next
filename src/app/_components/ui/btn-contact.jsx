import { useState, useEffect } from "react";

export const BtnContact = ({ setModal }) => {
  const [large, setLarge] = useState(true);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setLarge(scrollTop <= 30 || scrollTop >= scrollHeight - 333);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="btn-contact-wrap">
      <button
        className={
          large ? "btn-open-contact-modal" : "btn-open-contact-modal small"
        }
        onClick={() => {
          setModal(true);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        style={{
          width: large ? "254px" : "54px",
          height: "54px",
          color: pressed ? "#0ff" : "#fff",
          border: pressed ? "0.5px solid #0ff" : "0.5px solid #fff",
          boxShadow: pressed
            ? "none"
            : "0 -1px 10px 1px #7ff5, inset 0 1px 2px 1px #affa, 0 1px 7px 1px #000",
          textShadow: pressed ? "none" : "0 0 5px #affa",
          backgroundPosition: `center ${tiltX + 5}%`,
          // backgroundPosition:
          //   pressed & large ? "calc(50% - 10px) 50%" : "50% 50%",
        }}
      >
        <div
          className={large ? "btn-contact-text visible" : "btn-contact-text"}
        >
          {large ? "contact us" : ""}
        </div>
      </button>
    </div>
  );
};
