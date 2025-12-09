"use client";

import * as THREE from "three";
import { Plane, useTexture } from "@react-three/drei";

export const PlaneFloor = ({ args, position, rotX, textureDetail }) => {
  const textures = useTexture({
    map: `${
      textureDetail < 2
        ? "/vrpunk/textures/tile-green/baseColor-1024.png"
        : "/vrpunk/textures/tile-green/baseColor-2048.png"
    }`,
    displacementMap: `${
      textureDetail < 2
        ? "/vrpunk/textures/tile-green/height-1024.png"
        : "/vrpunk/textures/tile-green/height-2048.png"
    }`,
    roughnessMap: `${
      textureDetail < 2
        ? "/vrpunk/textures/tile-green/roughness-1024.png"
        : "/vrpunk/textures/tile-green/roughness-2048.png"
    }`,
    metalnessMap: `${
      textureDetail < 2
        ? "/vrpunk/textures/tile-green/metallic-1024.png"
        : "/vrpunk/textures/tile-green/metallic-2048.png"
    }`,
    normalMap: `${
      textureDetail < 2
        ? "/vrpunk/textures/tile-green/normal-1024.png"
        : "/vrpunk/textures/tile-green/normal-2048.png"
    }`,
  });

  const repeatX = 1;
  const repeatY = 3;

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

  return (
    <Plane args={args} position={position} rotation-x={rotX}>
      <meshStandardMaterial {...textures} />
    </Plane>
  );
};
