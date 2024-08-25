"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Float, RoundedBox, Text, Text3D } from "@react-three/drei";
import { useOnScreen } from "../_functions/use-on-screen";
// import { DoubleSide } from "three";

export const ThreeBtnContact = ({ styles }) => {
  const [hovered, setHovered] = useState(false);

  const BtnContact = () => {
    const btnContact = useRef();

    return (
      <RoundedBox
        ref={btnContact}
        args={[4, 1.5, 0.4]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.1} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        // All THREE.Mesh props are valid
        scale={0.5}
      >
        <meshPhongMaterial color="#0ff" />
      </RoundedBox>
    );
  };

  return (
    <Canvas
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
        height: "200px",
        display: "flex",
        border: "5px solid rebeccapurple",
      }}
      camera={{ fov: 10, position: [0, 0, 5] }}
    >
      <directionalLight position={[1, 0, 2]} intensity={3} />

      <group
        position-z={0.5}
        scale={1}
        onClick={() => {
          setHubLinkClicked(true);
          onClick();
        }}
        onPointerMove={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
      >
        <mesh scale={0.3}>
          <Center center disableY>
            <Text
              font="fonts/Arcade.json"
              size={0.1}
              position={[0, -0.1, 2.1]}
              color={hovered ? "cyan" : "red"}
            >
              Contact Us
            </Text>
          </Center>
        </mesh>

        <BtnContact />
      </group>
    </Canvas>
  );
};
