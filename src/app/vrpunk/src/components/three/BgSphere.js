"use client";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

export const BgSphere = ({ args, texture, wrapY = 2, wrapX = 1, ...props }) => {
  if (!texture) {
    return null;
  }

  const map = useLoader(THREE.TextureLoader, texture);
  map.repeat.set(wrapY, wrapX);
  map.wrapS = map.wrapT = THREE.RepeatWrapping;

  return (
    <Sphere args={args} {...props}>
      <meshBasicMaterial map={map} side={THREE.BackSide} />
    </Sphere>
  );
};
