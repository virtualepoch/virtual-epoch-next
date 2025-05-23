import { useState } from "react";
import { Link } from "react-router-dom";

export const HeaderLogo = ({
  setStart,
  setHub,
  setNavMenuOpen,
  setLinkClicked,
  setModalInfoOpen,
  setModalVROpen,
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <Link
        className={pressed ? "logo-container pressed" : "logo-container"}
        to={"/"}
        aria-label="link to home page"
        onClick={() => {
          setStart(false);
          setHub(false);
          setNavMenuOpen(false);
          setLinkClicked(true);
          setModalInfoOpen(false);
          setModalVROpen(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
      >
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
      </Link>
    </>
  );
};
