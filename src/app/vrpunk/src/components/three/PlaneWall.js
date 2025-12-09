"use client";

import * as THREE from "three";
import { Plane, useTexture } from "@react-three/drei";

export const PlaneWall = ({ args, position, rotY, textureDetail }) => {
  const textures = useTexture({
    map: `${
      textureDetail < 2
        ? "/vrpunk/textures/metal-screen-orange/baseColor-1024.png"
        : "/vrpunk/textures/metal-screen-orange/baseColor.png"
    }`,
    displacementMap: `${
      textureDetail < 2
        ? "/vrpunk/textures/metal-screen-orange/height-1024.png"
        : "/vrpunk/textures/metal-screen-orange/height.png"
    }`,
    roughnessMap: `${
      textureDetail < 2
        ? "/vrpunk/textures/metal-screen-orange/roughness-1024.png"
        : "/vrpunk/textures/metal-screen-orange/roughness.png"
    }`,
    metalnessMap: `${
      textureDetail < 2
        ? "/vrpunk/textures/metal-screen-orange/metallic-1024.png"
        : "/vrpunk/textures/metal-screen-orange/metallic.png"
    }`,
    normalMap: `${
      textureDetail < 2
        ? "/vrpunk/textures/metal-screen-orange/normal-1024.png"
        : "/vrpunk/textures/metal-screen-orange/normal.png"
    }`,
    alphaMap: `${
      textureDetail < 2
        ? "/vrpunk/textures/metal-screen-orange/opacity-1024.png"
        : "/vrpunk/textures/metal-screen-orange/opacity.png"
    }`,
  });

  return (
    <Plane args={args} position={position} rotation-y={rotY}>
      <meshStandardMaterial {...textures} transparent />
    </Plane>
  );
};
