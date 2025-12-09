import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useXR, XR } from "@react-three/xr";

// COMPONENTS
import { BtnVRStart } from "./components/vr/BtnVRStart.js";
import { BtnVRBack } from "./components/vr/BtnVRBack.js";

// SCENES
import { IntroScene } from "./scenes/__IntroScene.js";
import { Hub } from "./scenes/_Hub.js";
import { TorusScene } from "./scenes/TorusScene.js";
import { MachScene } from "./scenes/MachScene.js";
import { PanicScene } from "./scenes/PanicScene.js";

export const CanvasVRPunk = ({
  start,
  setStart,
  hubLink,
  setHubLink,
  hubBtnClicked,
  // Modal management
  setModalInfoOpen,
  // VR hooks
  foveation,
  vrFrameRate,
  xrStore,
  // Scene navigation
  currentScene,
  setCurrentScene,
  // TorusScene
  thirdPerson,
  // Performance management
  textureDetail,
}) => {
  return (
    <Canvas className="canvas" camera={{ fov: 30, position: [0, 0, 1] }}>
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
          // onSessionStart={() => setVrSession(true)}
          // onSessionEnd={() => setVrSession(false)}
        >
          {/* <Controllers /> */}
          {/* <Hands /> */}
          {currentScene === 0 && !start && (
            <BtnVRStart setStart={setStart} />
          )}

          {/* {vrSession &&
            (currentScene === 2 ||
              currentScene === 3 ||
              currentScene === 4) && (
              <BtnVRBack setCurrentScene={setCurrentScene} />
            )} */}

          {(() => {
            switch (currentScene) {
              case 0:
                return (
                  <IntroScene
                    start={start}
                    setStart={setStart}
                    textureDetail={textureDetail}
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
                    textureDetail={textureDetail}
                    setModalInfoOpen={setModalInfoOpen}
                    setCurrentScene={setCurrentScene}
                  />
                );
              case 2:
                return (
                  <TorusScene
                    textureDetail={textureDetail}
                    thirdPerson={thirdPerson}
                    setCurrentScene={setCurrentScene}
                  />
                );
              case 3:
                return <MachScene textureDetail={textureDetail} setCurrentScene={setCurrentScene} />;
              case 4:
                return <PanicScene textureDetail={textureDetail} setCurrentScene={setCurrentScene} />;
              default:
                return null;
            }
          })()}
        </XR>
      </Suspense>
    </Canvas>
  );
};
