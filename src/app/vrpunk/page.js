"use client";
import { useState, useEffect } from "react";
import { Loader } from "@react-three/drei";
import { createXRStore } from "@react-three/xr";

// COMPONENTS
import { UI } from "./src/components/UI.js";
import { CanvasVRPunk } from "./src/CanvasVRPunk.js";

// CSS
import "./src/css/_intro.css";
import "./src/css/App.css";
import "./src/css/buttons.css";
import "./src/css/index.css";
// import "./bday.css"

const xrStore = createXRStore();

export default function VRPunk() {
  // useState hooks ///////////////////////////////
  const [start, setStart] = useState(false); // Where:(UI(BtnStart) & IntroScene), For:(to activate the scene animation)
  const [hubLink, setHubLink] = useState(0); // (UI(BtnsHub) & Hub) change the currently displayed hub link
  const [hubBtnClicked, setHubBtnClicked] = useState(false); // (UI(BtnsHub) & Hub(HubLink)) left and right arrows

  // Modal management
  const [modalInfoOpen, setModalInfoOpen] = useState(false);
  const [modalVROpen, setModalVROpen] = useState(false);

  // VR hooks
  const [foveation, setFoveation] = useState(0);
  const [vrFrameRate, setVrFrameRate] = useState(null);

  // Added state for current scene
  const [currentScene, setCurrentScene] = useState(0); // Available scenes: 0=intro, 1=hub, 2=torus, 3=mach, 4=panic

  // TorusScene hooks
  const [thirdPerson, setThirdPerson] = useState(false);

  // Performance management (For image/texture quality)
  const [textureDetail, setTextureDetail] = useState(1); // ("0-2")
  // (App(PerformanceMonitor) & all scenes) the lower the number the lower the devices performance
  return (
    <div className="App">
      <Loader />

      <UI
        start={start}
        setStart={setStart}
        hubLink={hubLink}
        setHubLink={setHubLink}
        setHubBtnClicked={setHubBtnClicked}
        // Modal management
        modalInfoOpen={modalInfoOpen}
        setModalInfoOpen={setModalInfoOpen}
        modalVROpen={modalVROpen}
        setModalVROpen={setModalVROpen}
        //VR hooks
        foveation={foveation}
        setFoveation={setFoveation}
        setVrFrameRate={setVrFrameRate}
        xrStore={xrStore}
        // Scene navigation
        currentScene={currentScene}
        setCurrentScene={setCurrentScene}
        // TorusScene
        thirdPerson={thirdPerson}
        setThirdPerson={setThirdPerson}
        // Performance management
        textureDetail={textureDetail}
        setTextureDetail={setTextureDetail}
      />

      <CanvasVRPunk
        start={start}
        setStart={setStart}
        hubLink={hubLink}
        setHubLink={setHubLink}
        hubBtnClicked={hubBtnClicked}
        // Modal management
        setModalInfoOpen={setModalInfoOpen}
        // VR hooks
        foveation={foveation}
        vrFrameRate={vrFrameRate}
        xrStore={xrStore}
        // Scene navigation
        currentScene={currentScene}
        setCurrentScene={setCurrentScene}
        // Performance management
        textureDetail={textureDetail}
        setTextureDetail={setTextureDetail}
      />
    </div>
  );
}
