"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useOnScreen } from "../_functions/use-on-screen";
// import { DoubleSide } from "three";

export const ThreeBtnContact = ({ styles }) => {
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

  const BtnContact = () => {
    const btnContact = useRef();

    useFrame(() => {
      btnContact.current.rotation.y += anim ? 0.007 : 0;
      if (btnContact.current.rotation.x < Math.PI / 4 && anim) {
        btnContact.current.rotation.x += 0.004;
      }
      if (btnContact.current.position.z > 1 && anim) {
        btnContact.current.position.z -= 0.091;
      }
    });

    return (
      <RoundedBox
        ref={btnContact}
        args={[4, 1.7, 0.4]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.1} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        // All THREE.Mesh props are valid
      >
        <meshPhongMaterial color="#0ff" />
      </RoundedBox>
    );
  };

  return (
    <Canvas
      ref={ref}
      className="btnContactCanvas"
      style={{
        position: "fixed",
        left: 0,
        right: "auto",
        top: "auto",
        bottom: 0,
        zIndex: 222,
        width: "250px",
        width: "100%",
        height: "300px",
        display: "flex",
        border: "5px solid rebeccapurple",
      }}
      camera={{ fov: 10, position: [0, 0, 10] }}
    >
      <directionalLight position={[1, 0, 2]} intensity={3} />
      <BtnContact />
    </Canvas>
  );
};
