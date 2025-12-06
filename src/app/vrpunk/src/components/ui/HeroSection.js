import { useEffect, useState } from "react";

export const HeroSection = ({ start, setModalVROpen, modalVROpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const shouldShow = start === false;

  useEffect(() => {
    if (shouldShow) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shouldShow]);

  if (!isVisible && !shouldShow) {
    return null;
  }

  return (
    <section
      className={`hero-section ${
        shouldShow ? "hero-section-enter" : "hero-section-exit"
      }`}
    >
      <p className="hero-text">Welcome to our WebXR experience!</p>

      <p className="hero-text">Browse the 3D sections</p>

      <p className="hero-text">
        You can move the camera around<br></br>- OR -<br></br>
        <br></br>
        <button
          onClick={() => setModalVROpen(!modalVROpen)}
          className="three-d-text"
        >
          View in VR
        </button>
      </p>

      <p className="hero-text">
        Press <span className="start-text">start</span>
        <br /> to begin
      </p>
    </section>
  );
};
