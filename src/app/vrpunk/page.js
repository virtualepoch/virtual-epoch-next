"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, PerformanceMonitor } from "@react-three/drei";
import { XR } from "@react-three/xr";
import { useRouter } from "next/navigation";
// COMPONENTS
import { UI } from "./src/components/UI.js";
import { MyVRButton } from "./src/components/vr/MyVRButton.js";
// SCENES
import { IntroScene } from "./src/scenes/__IntroScene.js";
// import { Hub } from "./scenes/_Hub.js";
// import { TorusScene } from "./scenes/TorusScene.js";
// import { MachScene } from "./scenes/MachScene.js";
// import { PanicScene } from "./scenes/PanicScene.js";
// import { PunkScene } from "./scenes/PunkScene.js";
// import { TestScene } from "./scenes/___TestScene.js";
// CSS
import "./src/css/_intro.css";
import "./src/css/App.css";
import "./src/css/buttons.css";
import "./src/css/index.css";
// import "./bday.css"

export default function VRPunk() {
  const router = useRouter();

  // useState hooks
  const [start, setStart] = useState(false); // Where:(UI(BtnStart) & IntroScene), For:(to activate the scene animation)
  const [hub, setHub] = useState(false); // (IntroScene) cancels the IntroScene animation / navigates to the Hub
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
  const [currentScene, setCurrentScene] = useState("intro"); // Available scenes: intro, hub, torus, mach, panic

  // VR hooks
  const [vrSession, setVrSession] = useState(false);
  const [foveation, setFoveation] = useState(0);
  const [vrFrameRate, setVrFrameRate] = useState(null);

  // TorusScene hooks
  const [thirdPerson, setThirdPerson] = useState(false);

  // My functions
  useEffect(() => {
    setTimeout(() => {
      if (linkClicked) setLinkClicked(false);
    }, 1);

    setTimeout(() => {
      if (hubBtnClicked) setHubBtnClicked(false);
    }, 1000);
  }, [linkClicked, hubBtnClicked]);

  // Effect to handle scene transition when hub state changes
  useEffect(() => {
    if (hub) {
      router.push("/vrpunk/hub");
    }
  }, [hub, router]);

  return (
    <div className="App">
      <Loader />

      <UI
        start={start}
        setStart={setStart}
        hub={hub}
        setHub={setHub}
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
          {/* <XR
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
          > */}
          {/* <Controllers /> */}
          {/* <Hands /> */}

          {/* {vrSession && (
              <MyVRButton start={start} setStart={setStart}>
                Start
              </MyVRButton>
            )} */}

          {currentScene === "intro" && (
            <IntroScene
              start={start}
              setStart={setStart}
              hub={hub}
              setHub={setHub}
              performanceLevel={performanceLevel}
              currentScene={currentScene}
            />
          )}

          {/* Remove all the other scene render blocks */}
        </Suspense>
      </Canvas>
    </div>
  );
}
