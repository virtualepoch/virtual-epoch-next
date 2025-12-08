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

      <div
        className="w-4/5 h-px rounded-[10px] mx-5"
        style={{
          filter: "drop-shadow(0 0 3px #0ff)",
          background:
            "linear-gradient(to right, transparent, #c8ffff, transparent)",
        }}
      ></div>
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
  textureDetail,
  setTextureDetail,
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
      />

      <div className="info-container flex-col">
        {/* TEXTURE DETAIL SECTION ////////////////////////// */}
        <div className="text-nowrap w-full flex flex-row items-center justify-center">
          <div
            className="w-4/5 h-px rounded-[10px] ml-5"
            style={{
              filter: "drop-shadow(0 0 3px #0ff)",
              background: "linear-gradient(to right, transparent 20%, #c8ffff)",
            }}
          ></div>
          <h2 className="info-header text-cyan-500 text-2xl font-bold text-center mt-2.5 [text-shadow:0_0_5px_#c8ffff] font-['Ailerons']">
            Texture Detail
          </h2>
          <div
            className="w-4/5 h-px rounded-[10px] mr-5"
            style={{
              filter: "drop-shadow(0 0 3px #0ff)",
              background: "linear-gradient(to left, transparent 20%, #c8ffff)",
            }}
          ></div>
        </div>
        {/* TEXTURE DETAIL BUTTONS ////////////////////////// */}
        <div className="w-full px-2 pb-2 mx-2.5 mb-4flex flex-row items-center justify-around">
          <button
            style={{
              color: textureDetail === 0 ? "cyan" : "white",
            }}
            className="btn-texture-detail"
            onClick={() => setTextureDetail(0)}
          >
            LOW
          </button>
          <button
            style={{
              color: textureDetail === 1 ? "cyan" : "white",
            }}
            className="btn-texture-detail"
            onClick={() => setTextureDetail(1)}
          >
            MEDIUM
          </button>
          <button
            style={{
              color: textureDetail === 2 ? "cyan" : "white",
            }}
            className="btn-texture-detail"
            onClick={() => setTextureDetail(2)}
          >
            HIGH
          </button>
        </div>
        {/* SCENE INFO SECTION ////////////////////////// */}
        <div className="wrapper-texture-detail w-full flex flex-row items-center justify-center">
          <div
            className="w-4/5 h-px rounded-[10px] ml-5"
            style={{
              filter: "drop-shadow(0 0 3px #0ff)",
              background: "linear-gradient(to right, transparent 20%, #c8ffff)",
            }}
          ></div>
          <h2 className="info-header text-nowrap text-cyan-500 text-2xl font-bold text-center my-2.5 [text-shadow:0_0_5px_cyan] font-['Ailerons']">
            Scene Info
          </h2>
          <div
            className="w-4/5 h-px rounded-[10px] mr-5"
            style={{
              filter: "drop-shadow(0 0 3px #0ff)",
              background: "linear-gradient(to left, transparent 20%, #c8ffff)",
            }}
          ></div>
        </div>

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

        {/* CREDITS SECTION ////////////////////////// */}
        <div className="wrapper-texture-detail w-full flex flex-row items-center justify-center">
          <div
            className="w-4/5 h-px rounded-[10px] ml-5"
            style={{
              filter: "drop-shadow(0 0 3px #0ff)",
              background: "linear-gradient(to right, transparent 20%, #c8ffff)",
            }}
          ></div>
          <h2 className="info-header text-nowrap text-cyan-500 text-2xl font-bold text-center my-2.5 [text-shadow:0_0_5px_cyan] font-['Ailerons']">
            Scene Asset Credits
          </h2>
          <div
            className="w-4/5 h-px rounded-[10px] mr-5"
            style={{
              filter: "drop-shadow(0 0 3px #0ff)",
              background: "linear-gradient(to left, transparent 20%, #c8ffff)",
            }}
          ></div>
        </div>

        {credits.map((item, index) => (
          <Credit key={index} info={item} />
        ))}
      </div>
      <StyledBorder anim={anim} />
    </div>
  );
};
