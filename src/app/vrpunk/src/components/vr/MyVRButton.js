import { Box, Text } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const MyVRButton = ({ setStart, setVrBtnVisible, children }) => {
  const meshRef = useRef();
  const materialRef = useRef();
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(0x003456);

  // Animate scale and color on hover
  useEffect(() => {
    if (meshRef.current && materialRef.current) {
      const targetScale = hover ? 1.15 : 1;
      const targetColor = hover ? (Math.random() * 0xffffff) | 0 : 0x003456;

      // Animate scale
      gsap.to(meshRef.current.scale, {
        x: targetScale,
        y: targetScale,
        z: targetScale,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate color
      const startColor = materialRef.current.color.getHex();
      gsap.to(
        { hex: startColor },
        {
          hex: targetColor,
          duration: 0.3,
          ease: "power2.out",
          onUpdate: function () {
            materialRef.current.color.setHex(this.targets()[0].hex);
          },
        }
      );

      setColor(targetColor);
    }
  }, [hover]);

  const handlePointerEnter = () => {
    setHover(true);
  };

  const handlePointerLeave = () => {
    setHover(false);
  };

  return (
    <mesh
      ref={meshRef}
      onClick={() => {setStart(true); setVrBtnVisible(false)}}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      position={[1.7, 0.5, -4]}
      rotation-y={-0.5}
    >
      <Box args={[1, 0.5, 0.01]}>
        <meshBasicMaterial ref={materialRef} color={color} />
        <Text
          font="fonts/Ailerons-TrialVersion.otf"
          position={[0, 0, 0.051]}
          fontSize={0.3}
          color="#11ffff"
          anchorX="center"
          anchorY="middle"
        >
          {children}
        </Text>
      </Box>
    </mesh>
  );
};
