"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Plane, useTexture } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import gsap from "gsap";

export const BoxDoor = ({ position, rotation, performance }) => {
  const leftDoorRef = useRef();
  const rightDoorRef = useRef();
  const textures = useTexture({
    map: `${
      performance < 2
        ? "/vrpunk/textures/space-cruiser-panels/albedo-512.png"
        : "/vrpunk/textures/space-cruiser-panels/albedo-1024.png"
    }`,
    displacementMap: `${
      performance < 2
        ? "/vrpunk/textures/space-cruiser-panels/height-512.png"
        : "/vrpunk/textures/space-cruiser-panels/height-1024.png"
    }`,
    roughnessMap: `${
      performance < 2
        ? "/vrpunk/textures/space-cruiser-panels/roughness-512.png"
        : "/vrpunk/textures/space-cruiser-panels/roughness-1024.png"
    }`,
    metalnessMap: `${
      performance < 2
        ? "/vrpunk/textures/space-cruiser-panels/ao-512.png"
        : "/vrpunk/textures/space-cruiser-panels/ao-1024.png"
    }`,
    normalMap: `${
      performance < 2
        ? "/vrpunk/textures/space-cruiser-panels/normal-512.png"
        : "/vrpunk/textures/space-cruiser-panels/normal-1024.png"
    }`,
  });

  const repeatX = 2;
  const repeatY = 5;
  const sideRepeatX = repeatX / 4; // Side plane is 1/4 the width (1 vs 4)

  // Main plane textures
  textures.map.repeat.set(repeatX, repeatY);
  textures.map.wrapS = textures.map.wrapT = THREE.RepeatWrapping;

  textures.displacementMap.repeat.set(repeatX, repeatY);
  textures.displacementMap.wrapS = textures.displacementMap.wrapT =
    THREE.RepeatWrapping;

  textures.roughnessMap.repeat.set(repeatX, repeatY);
  textures.roughnessMap.wrapS = textures.roughnessMap.wrapT =
    THREE.RepeatWrapping;

  textures.metalnessMap.repeat.set(repeatX, repeatY);
  textures.metalnessMap.wrapS = textures.metalnessMap.wrapT =
    THREE.RepeatWrapping;

  textures.normalMap.repeat.set(repeatX, repeatY);
  textures.normalMap.wrapS = textures.normalMap.wrapT = THREE.RepeatWrapping;

  // Side plane textures (narrower, so different repeatX)
  const sideTextures = {
    map: textures.map.clone(),
    displacementMap: textures.displacementMap.clone(),
    roughnessMap: textures.roughnessMap.clone(),
    metalnessMap: textures.metalnessMap.clone(),
    normalMap: textures.normalMap.clone(),
  };

  sideTextures.map.repeat.set(sideRepeatX, repeatY);
  sideTextures.map.wrapS = sideTextures.map.wrapT = THREE.RepeatWrapping;

  sideTextures.displacementMap.repeat.set(sideRepeatX, repeatY);
  sideTextures.displacementMap.wrapS = sideTextures.displacementMap.wrapT =
    THREE.RepeatWrapping;

  sideTextures.roughnessMap.repeat.set(sideRepeatX, repeatY);
  sideTextures.roughnessMap.wrapS = sideTextures.roughnessMap.wrapT =
    THREE.RepeatWrapping;

  sideTextures.metalnessMap.repeat.set(sideRepeatX, repeatY);
  sideTextures.metalnessMap.wrapS = sideTextures.metalnessMap.wrapT =
    THREE.RepeatWrapping;

  sideTextures.normalMap.repeat.set(sideRepeatX, repeatY);
  sideTextures.normalMap.wrapS = sideTextures.normalMap.wrapT =
    THREE.RepeatWrapping;

  useEffect(() => {
    if (leftDoorRef.current && rightDoorRef.current) {
      // Animate doors swinging open from outer edges
      gsap.to(leftDoorRef.current.rotation, {
        y: degToRad(90),
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
      });

      gsap.to(rightDoorRef.current.rotation, {
        y: degToRad(-90),
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
      });
    }
  }, []);

  return (
    <group position={position} rotation={rotation}>
      {/* Left Door - rotates around left edge (outer edge) */}
      <group ref={leftDoorRef} position={[-4.01, 5, 0]}>
        <group position={[2, 0, 0]}>
          <Plane args={[4, 10]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <meshStandardMaterial {...textures} />

            {/* LEFT - positioned so right edge touches main plane's left edge at x=-2 */}
            <Plane
              args={[1, 10]}
              position={[-1.38, 0, 0.5]}
              rotation={[0, degToRad(-115), 0]}
            >
              <meshStandardMaterial {...sideTextures} />
            </Plane>      
          </Plane>
        </group>
      </group>

      {/* Right Door - rotates around right edge (outer edge) */}
      <group ref={rightDoorRef} position={[4.01, 5, 0]}>
        <group position={[-2, 0, 0]}>
          <Plane args={[4, 10]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <meshStandardMaterial {...textures} />

            {/* RIGHT - positioned so left edge touches main plane's right edge at x=2 */}
            <Plane
              args={[1, 10]}
              position={[1.3, 0, 0.25]}
              rotation={[0, degToRad(90), 0]}
            >
              <meshStandardMaterial {...sideTextures} />
            </Plane>
          </Plane>
        </group>
      </group>
    </group>
  );
};
