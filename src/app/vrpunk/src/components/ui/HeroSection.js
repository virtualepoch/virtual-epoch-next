import { CSSTransition } from "react-transition-group";

export const HeroSection = ({ start, setModalVROpen, modalVROpen }) => {
  return (
    <CSSTransition
      in={start === false}
      timeout={500}
      unmountOnExit
      classNames="hero-section"
    >
      <section className="hero-section">
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
    </CSSTransition>
  );
};
