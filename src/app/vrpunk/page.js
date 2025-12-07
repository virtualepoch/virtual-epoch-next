"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, PerformanceMonitor } from "@react-three/drei";
import { XR, createXRStore } from "@react-three/xr";

// COMPONENTS
import { UI } from "./src/components/UI.js";
import { MyVRButton } from "./src/components/vr/MyVRButton.js";

// SCENES
import { IntroScene } from "./src/scenes/__IntroScene.js";
import { Hub } from "./src/scenes/_Hub.js";
import { TorusScene } from "./src/scenes/TorusScene.js";
import { MachScene } from "./src/scenes/MachScene.js";
import { PanicScene } from "./src/scenes/PanicScene.js";
// import { PunkScene } from "./scenes/PunkScene.js";
// import { TestScene } from "./scenes/___TestScene.js";

// CSS
import "./src/css/_intro.css";
import "./src/css/App.css";
import "./src/css/buttons.css";
import "./src/css/index.css";
// import "./bday.css"

// Create XR store outside component to persist across renders
const xrStore = createXRStore();

export default function VRPunk() {
  // useState hooks
  const [start, setStart] = useState(false); // Where:(UI(BtnStart) & IntroScene), For:(to activate the scene animation)
  const [linkClicked, setLinkClicked] = useState(false); // (UI(NavMenu) & MyCamControls)
  // resets cam position when a Link is clicked (Scene changes)
  const [performanceLevel, setPerformanceLevel] = useState(1); // ("0-2")
  // (App(PerformanceMonitor) & all scenes) the lower the number the lower the devices performance
  const [hubLink, setHubLink] = useState(0); // (UI(BtnsHub) & Hub) changes the currently displayed hub link
  const [hubBtnClicked, setHubBtnClicked] = useState(false); // (UI(BtnsHub) & Hub(HubLink))
  // switch to cycle the opacity of the HubLink title and triangle backdrop
  const [modalInfoOpen, setModalInfoOpen] = useState(false);
  const [modalVROpen, setModalVROpen] = useState(false);
  const [fpsMeter, setFpsMeter] = useState(false);

  // Added state for current scene
  const [currentScene, setCurrentScene] = useState(0); // Available scenes: 0=intro, 1=hub, 2=torus, 3=mach, 4=panic

  // VR hooks
  const [vrSession, setVrSession] = useState(false);
  const [vrBtnVisible, setVrBtnVisible] = useState(false);
  const [foveation, setFoveation] = useState(0);
  const [vrFrameRate, setVrFrameRate] = useState(null);

  // TorusScene hooks
  const [thirdPerson, setThirdPerson] = useState(false);

  return (
    <div className="App">
      <Loader />

      <UI
        start={start}
        setStart={setStart}
        setLinkClicked={setLinkClicked}
        hubLink={hubLink}
        setHubLink={setHubLink}
        hubBtnClicked={hubBtnClicked}
        setHubBtnClicked={setHubBtnClicked}
        modalInfoOpen={modalInfoOpen}
        setModalInfoOpen={setModalInfoOpen}
        modalVROpen={modalVROpen}
        setModalVROpen={setModalVROpen}
        //VR hooks
        foveation={foveation}
        setFoveation={setFoveation}
        setVrFrameRate={setVrFrameRate}
        enterVR={() => xrStore.enterVR()}
        vrSession={vrSession}
        setVrSession={setVrSession}
        setVrBtnVisible={setVrBtnVisible}
        // TorusScene
        thirdPerson={thirdPerson}
        setThirdPerson={setThirdPerson}
        performanceLevel={performanceLevel}
        fpsMeter={fpsMeter}
        setFpsMeter={setFpsMeter}
        // New props for scene navigation
        currentScene={currentScene}
        setCurrentScene={setCurrentScene}
      />

      <Canvas className="canvas" camera={{ fov: 30, position: [0, 0, 1] }}>
        <PerformanceMonitor
          bounds={(fps) => (fps > 90 ? [50, 90] : [40, 60])}
          onDecline={(fps) => {
            setPerformanceLevel(0);
          }}
          onIncline={(fps) => {
            setPerformanceLevel(2);
          }}
        />

        <Suspense>
          <XR
            store={xrStore}
            foveation={foveation}
            frameRate={
              vrFrameRate === 72
                ? 72
                : vrFrameRate === 90
                ? 90
                : vrFrameRate === 120
                ? 120
                : null
            }
            onSessionStart={() => setVrSession(true)}
            onSessionEnd={() => setVrSession(false)}
          >
            {/* <Controllers /> */}
            {/* <Hands /> */}

            {vrSession && vrBtnVisible && (
              <MyVRButton
                start={start}
                setStart={setStart}
                setVrBtnVisible={setVrBtnVisible}
              >
                Start
              </MyVRButton>
            )}

            {(() => {
              switch (currentScene) {
                case 0:
                  return (
                    <IntroScene
                      start={start}
                      setStart={setStart}
                      performanceLevel={performanceLevel}
                      currentScene={currentScene}
                      setCurrentScene={setCurrentScene}
                    />
                  );
                case 1:
                  return (
                    <Hub
                      setStart={setStart}
                      hubLink={hubLink}
                      setHubLink={setHubLink}
                      hubBtnClicked={hubBtnClicked}
                      performanceLevel={performanceLevel}
                      setModalInfoOpen={setModalInfoOpen}
                      setCurrentScene={setCurrentScene}
                    />
                  );
                case 2:
                  return (
                    <TorusScene
                      performanceLevel={performanceLevel}
                      thirdPerson={thirdPerson}
                    />
                  );
                case 3:
                  return (
                    <MachScene
                      performanceLevel={performanceLevel}
                      vrSession={vrSession}
                    />
                  );
                case 4:
                  return (
                    <PanicScene
                      vrSession={vrSession}
                      performanceLevel={performanceLevel}
                    />
                  );
                default:
                  return null;
              }
            })()}
          </XR>
        </Suspense>
      </Canvas>
    </div>
  );
}
