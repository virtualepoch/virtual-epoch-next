import { Box, Text } from "@react-three/drei";

export const BtnVRBack = ({ setCurrentScene }) => {
  return (
    <mesh
      onClick={() => {
        setCurrentScene(1);
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
          Back
        </Text>
      </Box>
    </mesh>
  );
};
