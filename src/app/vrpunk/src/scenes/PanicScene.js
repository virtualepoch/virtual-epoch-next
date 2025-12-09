"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
// import { DirectionalLightHelper } from "three";
import {
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  useHelper,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import gsap from "gsap";

// COMPONENTS /////////////////////////
import { PlaneWall } from "../components/three/PlaneWall";
import { MedievalSciFiPillar } from "../components/models/MedievalSciFiPillar";
import { Spider } from "../components/models/Spider";
import { BoxDoor } from "../components/three/BoxDoor";
import { VictorianCouch } from "../components/models/VictorianCouch";
import { PlaneFloor } from "../components/three/PlaneFloor";
import { SpiderWolfAnim } from "../components/models/SpiderWolfAnim";
import { FearCrawlEdit } from "../components/models/FearCrawlEdit";

export const PanicScene = ({ textureDetail }) => {
  const directionalLight = useRef();
  // useHelper(directionalLight, DirectionalLightHelper, 1, "red");
  // const pointLight = useRef();
  // useHelper(pointLight, THREE.PointLightHelper, 1, "red");

  const spiderWolf = useRef();
  const spiderGroup = useRef();
  const startTime = useRef(null);

  useFrame((state, delta) => {
    // Initialize start time on first frame
    if (startTime.current === null) {
      startTime.current = state.clock.elapsedTime;
    }

    const elapsed = state.clock.elapsedTime - startTime.current;

    // Spider wolf animation (starts after 0.5 seconds)
    if (elapsed >= 0.5) {
      if (spiderWolf.current) {
        if (spiderWolf.current.position.z > 25) {
          spiderWolf.current.position.z = -10;
        }
        spiderWolf.current.position.z += 0.1;
      }
    }

    // Spider group animation (starts after 1 second, decreases y position to 5)
    if (
      elapsed >= 2 &&
      spiderGroup.current &&
      spiderGroup.current.position.y > 7
    ) {
      spiderGroup.current.position.y -= 0.03 * delta * 60; // Decrease y position
      // Clamp to minimum of 5
      if (spiderGroup.current.position.y < 7) {
        spiderGroup.current.position.y = 7;
      }
    }
  });

  return (
    <>
      {/* <PerspectiveCamera
        makeDefault={vrSession ? false : true}
        position={[0, 0, 0.5]}
      /> */}
      <OrbitControls />

      <group position-y={vrSession ? 0 : -3}>
        <directionalLight
          ref={directionalLight}
          position={[-1, 4, 2]}
          intensity={1}
        />

        <group ref={spiderWolf}>
          <SpiderWolfAnim
            scale={30}
            position={[0, 0.3, -20]}
            rotation-y={degToRad(180)}
          />
        </group>

        {/* <FearCrawlEdit
          scale={1}
          position={[0, 3, -7]}
          rotation={[Math.PI, Math.PI, 0]}
        /> */}

        <VictorianCouch
          scale={1.8}
          position={[-6.5, -0.1, -1.5]}
          rotation-y={degToRad(90)}
        />

        <BoxDoor position={[0, 0, -7.5]} />

        <PlaneWall
          args={[11, 20]}
          position={[0, 10, 9.5]}
          rotY={Math.PI}
          performanceLevel={performanceLevel}
        />

        <PlaneFloor
          args={[12, 60]}
          position={[0, -0.2, -20]}
          rotX={-Math.PI / 2}
          performanceLevel={performanceLevel}
        />

        <PlaneWall
          args={[20, 20]}
          position={[-6, 10, -1]}
          rotY={Math.PI / 2}
          performanceLevel={performanceLevel}
        />

        <PlaneWall
          args={[20, 20]}
          position={[6, 10, -1]}
          rotY={-Math.PI / 2}
          performanceLevel={performanceLevel}
        />

        <group ref={spiderGroup} position={[0, 10, -8]}>
          <Spider scale={0.04} rotation={[1, 0, 0]} />
        </group>

        <MedievalSciFiPillar scale-y={3} position={[-4.5, -1.4, -6.5]} />
        <MedievalSciFiPillar scale-y={3} position={[4.5, -1.4, -6.5]} />
        <MedievalSciFiPillar scale-y={3} position={[-4.5, -1.4, 8]} />
        <MedievalSciFiPillar scale-y={3} position={[4.5, -1.4, 8]} />
      </group>

      <Sphere args={[100, 8, 8]} rotation={[0, 0, 0]} position={[0, 1, -10]}>
        <meshBasicMaterial side={THREE.BackSide}>
          <GradientTexture
            stops={[0, 1]}
            colors={["#000", "#ff0000"]}
            size={10}
          />
        </meshBasicMaterial>
      </Sphere>
    </>
  );
};
