import { useState } from "react";
import { Box, Text } from "@react-three/drei";

export const BtnVRBack = ({ onClick, position=[1.7, 0.5, -4], rotationY=-0.5 }) => {
  const [hovered, setHovered] = useState(false);
  document.body.style.cursor = hovered ? "pointer" : "default";
  return (
    <mesh
      onClick={onClick}
      position={position}
      rotation-y={rotationY}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <Box args={[1, 0.5, 0.01]}>
        <meshBasicMaterial color={0x003456} />
        <Text
          font="fonts/Ailerons-TrialVersion.otf"
          position={[0, 0, 0.051]}
          fontSize={0.3}
          color="#11ffff"
          anchorX="center"
          anchorY="middle"
        >
          Back
        </Text>
      </Box>
    </mesh>
  );
};
