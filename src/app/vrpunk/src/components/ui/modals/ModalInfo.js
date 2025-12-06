import { useState, useEffect } from "react";
import { StyledBorder } from "./StyledBorder";
import "./modal-info.css";

// Credit files
import { sceneInfo } from "../../credits/_sceneInfo";
import { introCredits } from "../../credits/introCredits";
import { hubCredits } from "../../credits/hubCredits";
import { torusCredits } from "../../credits/torusCredits";
import { machCredits } from "../../credits/machCredits";
import { panicCredits } from "../../credits/panicCredits";
import { punkCredits } from "../../credits/punkCredits";
import { emptyCredits } from "../../credits/emptyCredits";

const Credit = ({ ...props }) => {
  return (
    <div className="info-wrapper flex-col">
      <hr className="info-hr" />
      <hr className="info-hr red" />
      <hr className="info-hr" />
      <p className="info-text">Asset: {props.info.asset}</p>
      <p className="info-text">Title: {props.info.title}</p>
      <a
        className="info-link"
        href={props.info.link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="info-img"
          src={window.innerWidth <= 700 ? props.info.imgSm : props.info.imgLg}
          alt={props.info.alt}
        />
      </a>
      <a
        className="info-text"
        href={props.info.authorLink}
        target="_blank"
        rel="noreferrer"
      >
        Author: <span className="info-text author">{props.info.author}</span>
      </a>
      <p className="info-text">Changes: {props.info.changes}</p>
    </div>
  );
};

export const ModalInfo = ({
  intro,
  hub,
  torus,
  mach,
  panic,
  punk,
  modalInfoOpen,
  setModalInfoOpen,
}) => {
  const [anim, setAnim] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (modalInfoOpen) {
      // Add to DOM first
      setIsVisible(true);
      // Small delay to ensure DOM is ready and trigger CSS transition
      const timer = setTimeout(() => {
        setAnim(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Start exit animation
      setAnim(false);
      // Remove from DOM after animation completes (700ms timeout)
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [modalInfoOpen]);

  const credits = intro
    ? introCredits
    : hub
    ? hubCredits
    : torus
    ? torusCredits
    : mach
    ? machCredits
    : panic
    ? panicCredits
    : punk
    ? punkCredits
    : emptyCredits;

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="modal-info"
      style={{
        transform: anim ? "translateX(0)" : "translateX(-100%)",
        opacity: anim ? 1 : 0,
        transition: "transform 700ms ease, opacity 700ms ease",
      }}
    >
      <button
        className="btn-close-modal"
        onClick={() => {
          setModalInfoOpen(false);
        }}
        // disabled={progress < 100}
      />

      <div className="info-container flex-col">
        <h2 className="info-header">Scene Info</h2>

        <hr className="info-hr" />

        <div className="info-wrapper flex-col">
          <p className="info-text">
            {intro
              ? sceneInfo.intro
              : hub
              ? sceneInfo.hub
              : torus
              ? sceneInfo.torus
              : mach
              ? sceneInfo.mach
              : panic
              ? sceneInfo.panic
              : punk
              ? sceneInfo.punk
              : sceneInfo.empty}
          </p>
        </div>

        <hr className="info-hr" />

        <h2 className="info-header">Scene Asset Credits</h2>

        {credits.map((item, index) => (
          <Credit key={index} info={item} />
        ))}
      </div>
      <StyledBorder anim={anim} />
    </div>
  );
};
