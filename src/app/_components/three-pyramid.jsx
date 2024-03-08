"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cone, GradientTexture } from "@react-three/drei";
import { useOnScreen } from "../_functions/use-on-screen";
// import { DoubleSide } from "three";

export const ThreePyramid = ({ styles }) => {
  const ref = useRef();
  const [anim, setAnim] = useState(false);

  const callback = () => {
    setTimeout(() => {
      setAnim(true);
    }, 1);
  };

  useOnScreen(ref, callback, {
    // rootMargin: "100px 0px 0px 0px",
    threshold: 0.7,
  });

  const Pyramid = () => {
    const pyramid = useRef();

    useFrame(() => {
      pyramid.current.rotation.y += anim ? 0.007 : 0;
      if (pyramid.current.rotation.x < Math.PI / 4 && anim) {
        pyramid.current.rotation.x += 0.004;
      }
      if (pyramid.current.position.z > 1 && anim) {
        pyramid.current.position.z -= 0.091;
      }
    });

    return (
      <Cone
        ref={pyramid}
        args={[3, 2.5, 4]}
        rotation-x={Math.PI / 4 - 0.7}
        position-y={1}
        position-z={20}
        scale={1.3}
      >
        <meshStandardMaterial
          transparent
          // side={DoubleSide}
        >
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
    <Canvas
      ref={ref}
      className={styles.pyramidCanvas}
      style={{ height: "100vh" }}
      camera={{ fov: 20, position: [0, 0, 20] }}
    >
      <directionalLight position={[4, 0, 0]} intensity={3} />
      <Pyramid />
    </Canvas>
  );
};
