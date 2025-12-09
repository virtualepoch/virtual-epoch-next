import { useState } from "react";

// UI COMPONENTS //
import { BtnFullScreen } from "./ui/buttons/BtnFullScreen";
// import { Header } from "./ui/Header";
// import { NavMenu } from "./ui/NavMenu";
// import { FpsMeter } from "./ui/FpsMeter";
// import { Leva } from "leva";
import { ModalInfo } from "./ui/modals/ModalInfo";
import { ModalVR } from "./ui/modals/ModalVR";
import { BtnStart } from "./ui/buttons/BtnStart";
import { HeroSection } from "./ui/HeroSection";
import { BtnsHub } from "./ui/buttons/BtnsHub";
import { BtnBack } from "./ui/buttons/BtnBack";
// import { SceneTitle } from "./ui/SceneTitle";

export const UI = ({
  start,
  setStart,
  hubLink,
  setHubLink,
  setHubBtnClicked,
  // Modal management
  modalInfoOpen,
  setModalInfoOpen,
  modalVROpen,
  setModalVROpen,
  // VR hooks
  foveation,
  setFoveation,
  setVrFrameRate,
  setVrSession,
  xrStore,
  // Scene navigation
  currentScene,
  setCurrentScene,
  // TorusScene
  thirdPerson,
  setThirdPerson,
  // Performance management
  textureDetail,
  setTextureDetail,
}) => {
  const intro = currentScene === 0;
  const hub = currentScene === 1;
  const torus = currentScene === 2;
  const mach = currentScene === 3;
  const panic = currentScene === 4;
  const punk = currentScene === 5;

  return (
    <>
      {/* INTRO SCENE STUFF /////////////////////// */}
      {intro && (
        <>
          <HeroSection
            start={start}
            setModalVROpen={setModalVROpen}
            modalVROpen={modalVROpen}
          />
          <BtnStart start={start} setStart={setStart} />
        </>
      )}

      {(torus || mach || panic) && (
        <BtnBack onClick={() => setCurrentScene(1)} />
      )}
    
      {hub && (
        <BtnBack onClick={() => {setCurrentScene(0); setStart(false);}} />
      )}

      <BtnFullScreen />

      {/* <SceneTitle currentScene={currentScene} /> */}

      {/* INFO STUFF /////////////////////// */}
      <button
        className="btn-info"
        onClick={() => setModalInfoOpen(!modalInfoOpen)}
      >
        <div className="info-icon"></div>
      </button>

      {/* VR STUFF //////////////////////// */}
      <button
        className={modalVROpen ? "btn-vr-modal open" : "btn-vr-modal"}
        onClick={() => setModalVROpen(!modalVROpen)}
      >
        VR
      </button>

      {hub && (
        <BtnsHub
          hubLink={hubLink}
          setHubLink={setHubLink}
          setHubBtnClicked={setHubBtnClicked}
          currentScene={currentScene}
        />
      )}

      <ModalInfo
        intro={intro}
        hub={hub}
        torus={torus}
        mach={mach}
        panic={panic}
        punk={punk}
        modalInfoOpen={modalInfoOpen}
        setModalInfoOpen={setModalInfoOpen}
        textureDetail={textureDetail}
        setTextureDetail={setTextureDetail}
      />

      <ModalVR
        modalVROpen={modalVROpen}
        setModalVROpen={setModalVROpen}
        foveation={foveation}
        setFoveation={setFoveation}
        setFrameRate={setVrFrameRate}
        xrStore={xrStore}
      />

      {torus && (
        <button
          className="btn-torus-scene-third-person"
          onClick={() => {
            setThirdPerson(!thirdPerson);
          }}
        />
      )}
    </>
  );
};
