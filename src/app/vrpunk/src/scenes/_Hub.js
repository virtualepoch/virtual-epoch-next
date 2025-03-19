import { useState } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// COMPONENTS //
import { HubLink } from "../../src/components/three/HubLink";
import { HubLinkOrbs } from "../../src/components/three/HubLinkOrbs";
import { TorusGroup } from "../../src/components/three/TorusGroup";
import { Ocean } from "../../src/components/three/Ocean";

export const Hub = ({
  setStart,
  setHub,
  hubLink,
  setHubLink,
  hubBtnClicked,
  performanceLevel,
  setModalInfoOpen,
  setCurrentScene,
  currentScene,
}) => {
  // Params for responsive sizing
  const viewport = useThree((state) => state.viewport);
  const portrait = viewport.width < viewport.height;

  const scaleFactor = portrait ? viewport.width * 2 : viewport.height * 2;
  const scale = Math.max(Math.min(scaleFactor, 1.2), 0.75);

  // Changes visible hubLink after Dissolve anim
  const [visibleItem, setVisibleItem] = useState(hubLink);
  const onFadeOut = () =>
    hubLinkClicked ? setVisibleItem() : setVisibleItem(hubLink);

  // State to start the transition anim prior to navigate
  const [hubLinkClicked, setHubLinkClicked] = useState();

  const navTimeout = () => {
    setModalInfoOpen(false);
    setStart(false);
    setTimeout(() => {
      setCurrentScene(
        hubLink === 0
          ? "intro"
          : hubLink === 1
          ? "intro"
          : hubLink === 2
          ? "intro"
          : "intro"
      );
    }, 2000);
    setHub(false);
  };

  return (
    <>
      <OrbitControls
        minDistance={2}
        maxDistance={5}
        minAzimuthAngle={-0.4}
        maxAzimuthAngle={0.4}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
      />

      <mesh position={[0, 0.1, -7]} scale={scale}>
        <HubLinkOrbs
          hubLink={hubLink}
          setHubLink={setHubLink}
          performanceLevel={performanceLevel}
        />

        {visibleItem === 0 && (
          <HubLink
            scale={scale}
            linkTitle="Torus"
            image={"/vrpunk/images/hub/torus-1024.jpg"}
            visible={hubLink === 0}
            onFadeOut={onFadeOut}
            hubBtnClicked={hubBtnClicked}
            onClick={navTimeout}
            hubLinkClicked={hubLinkClicked}
            setHubLinkClicked={setHubLinkClicked}
          />
        )}

        {visibleItem === 1 && (
          <HubLink
            scale={scale}
            linkTitle="Mach"
            image={"/vrpunk/images/hub/mach-1024.jpg"}
            visible={hubLink === 1}
            onFadeOut={onFadeOut}
            hubBtnClicked={hubBtnClicked}
            onClick={navTimeout}
            hubLinkClicked={hubLinkClicked}
            setHubLinkClicked={setHubLinkClicked}
          />
        )}

        {visibleItem === 2 && (
          <HubLink
            scale={scale}
            linkTitle="Panic"
            image={"/vrpunk/images/hub/panic-1024.jpg"}
            visible={hubLink === 2}
            onFadeOut={onFadeOut}
            hubBtnClicked={hubBtnClicked}
            onClick={navTimeout}
            hubLinkClicked={hubLinkClicked}
            setHubLinkClicked={setHubLinkClicked}
          />
        )}
      </mesh>

      <TorusGroup
        position={[0, 0, -7]}
        scale={scale}
        rotation={[0, 0, 0]}
        hubBtnClicked={hubBtnClicked}
        hubLinkClicked={hubLinkClicked}
        currentScene={currentScene}
      />

      <Ocean
        position={[0, -140, 0]}
        rotation={[0, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />
    </>
  );
};
