"use client";

import { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { useRouter } from "next/navigation";
// COMPONENTS //
import { HubLink } from "../../src/components/three/HubLink";
import { HubLinkOrbs } from "../../src/components/three/HubLinkOrbs";
import { TorusGroup } from "../../src/components/three/TorusGroup";
import { Ocean } from "../../src/components/three/Ocean";
// import { BgSphere } from "../components/three/BgSphere";

export const Hub = ({
  setStart,
  setHub,
  hubLink,
  setHubLink,
  hubBtnClicked,
  performanceLevel,
  setModalInfoOpen,
}) => {
  const router = useRouter();
  // Params for responsive sizing
  const viewport = useThree((state) => state.viewport);
  const portrait = viewport.width < viewport.height;
  const scaleFactor = portrait ? viewport.width * 3 : viewport.height * 3;
  const scale = Math.max(Math.min(scaleFactor, 2.2), 0.75);

  const [visibleItem, setVisibleItem] = useState(hubLink);
  // State to start the transition anim prior to navigate
  const [hubLinkClicked, setHubLinkClicked] = useState();

  // Changes visible hubLink after Dissolve anim
  const onFadeOut = () =>
    hubLinkClicked ? setVisibleItem() : setVisibleItem(hubLink);

  // Sync visibleItem with hubLink when hubLink changes
  useEffect(() => {
    if (hubLink !== visibleItem && !hubLinkClicked) {
      setVisibleItem(hubLink);
    }
  }, [hubLink, hubLinkClicked, visibleItem]);

  const navTimeout = () => {
    setModalInfoOpen(false);
    setStart(false);
    setTimeout(() => {
      const path =
        hubLink === 0
          ? "/vrpunk/torus"
          : hubLink === 1
          ? "/vrpunk/mach"
          : "/vrpunk/panic";
      router.push(path);
    }, 2000);
    setHub(false);
  };

  return (
    <>
      <OrbitControls
        minDistance={1}
        maxDistance={2}
        minAzimuthAngle={-0.4}
        maxAzimuthAngle={0.4}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
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
            image="/vrpunk/images/hub/torus-1024.jpg"
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
            image="/vrpunk/images/hub/mach-1024.jpg"
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
            image="/vrpunk/images/hub/panic-1024.jpg"
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
      />

      <Ocean
        position={[0, -140, 0]}
        rotation={[0, 0, 0]}
        waterColor={0x00ffff}
        sunColor={0xffffff}
      />

      <Sky
        distance={4500}
        sunPosition={[0, 10, 0]}
        inclination={0}
        azimuth={0.15}
      />
    </>
  );
};

{
  /* <Stars
    radius={100}
    depth={50}
    count={5000}
    factor={4}
    saturation={0}
    fade
    speed={1}
  /> */
}

{
  /* <BgSphere
  texture="/vrpunk/images/panoramas/cyber-sky.jpg"
  position={[0, 0, -7]}
  scale={1}
  args={[800, 16, 16]}
/> */
}
