"use client";

import * as THREE from "three";
import { Plane, useTexture } from "@react-three/drei";

export const PlaneFloor = ({ args, position, rotX, performance }) => {
  const textures = useTexture({
    map: `${
      performance < 2
        ? "/vrpunk/textures/tile-green/baseColor-1024.png"
        : "/vrpunk/textures/tile-green/baseColor-2048.png"
    }`,
    displacementMap: `${
      performance < 2
        ? "/vrpunk/textures/tile-green/height-1024.png"
        : "/vrpunk/textures/tile-green/height-2048.png"
    }`,
    roughnessMap: `${
      performance < 2
        ? "/vrpunk/textures/tile-green/roughness-1024.png"
        : "/vrpunk/textures/tile-green/roughness-2048.png"
    }`,
    metalnessMap: `${
      performance < 2
        ? "/vrpunk/textures/tile-green/metallic-1024.png"
        : "/vrpunk/textures/tile-green/metallic-2048.png"
    }`,
    normalMap: `${
      performance < 2
        ? "/vrpunk/textures/tile-green/normal-1024.png"
        : "/vrpunk/textures/tile-green/normal-2048.png"
    }`,
  });

  return (
    <Plane args={args} position={position} rotation-x={rotX}>
      <meshStandardMaterial {...textures} />
    </Plane>
  );
};
