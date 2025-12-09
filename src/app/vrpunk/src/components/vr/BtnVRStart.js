import { Box, Text } from "@react-three/drei";
import { useState } from "react";

export const BtnVRStart = ({ setStart }) => {
  const [hovered, setHovered] = useState(false);
  document.body.style.cursor = hovered ? "pointer" : "default";
  
  return (
    <mesh
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
      onClick={() => {
        setStart(true);
      }}
      position={[1.7, 0.5, -4]}
      rotation-y={-0.5}
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
          Start
        </Text>
      </Box>
    </mesh>
  );
};
