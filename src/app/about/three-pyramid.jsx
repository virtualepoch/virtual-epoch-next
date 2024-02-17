"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cone, GradientTexture } from "@react-three/drei";

export const ThreePyramid = () => {
  const Pyramid = () => {
    const pyramid = useRef();

    useFrame(() => {
      pyramid.current.rotation.y += 0.007;
    });

    return (
      <Cone
        ref={pyramid}
        args={[3, 2.5, 4]}
        rotation={[Math.PI / 4, 0, 0]}
        position-y={1}
        scale={1.3}
      >
        <meshStandardMaterial transparent>
          <GradientTexture
            stops={[0, 0.2, 0.2001, 0.4, 0.4001, 0.6, 0.6001, 0.8, 0.8001, 1]}
            colors={[
              "#fff",
              "#fff",
              "transparent",
              "transparent",
              "#fff",
              "#fff",
              "transparent",
              "transparent",
              "#fff",
              "#fff",
            ]}
            size={100}
          />
        </meshStandardMaterial>
      </Cone>
    );
  };

  return (
    <Canvas className="canvas" camera={{ fov: 20, position: [0, 0, 20] }}>
      <directionalLight position={[4, 0, 0]} intensity={3} />
      <Pyramid />
    </Canvas>
  );
};
