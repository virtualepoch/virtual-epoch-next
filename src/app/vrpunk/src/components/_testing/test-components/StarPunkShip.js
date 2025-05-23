import { MeshReflectorMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Clock } from "three";

export const StarPunkShip = ({ position }) => {
  const starship = useRef();
  const clock = new Clock();
  useFrame(() => {
    const a = clock.getElapsedTime();
    if (a <= 2) {
      starship.current.rotation.z -= 0.01;
      // starship.current.position.y += 0.05;
    }
    if (a > 2) {
      starship.current.rotation.z += 0.05;
      // starship.current.position.y -= 0.05;
    }
    if (a > 6) clock.start();
  });
  return (
    <group ref={starship} position={position} rotation={[0, 0, 0]}>
      {/* NOSE */}
      <mesh position={[0, 0, -2]} rotation={[-Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.5, 4, 3]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
        />
      </mesh>
      <mesh position={[0, 0, -2]} rotation={[-Math.PI / 2, Math.PI / 3, 0]}>
        <coneGeometry args={[0.5, 4, 3]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
        />
      </mesh>

      {/* TAIL */}
      {/* TOP-CENTER */}
      <mesh position={[0, 0.7, 1.2]} rotation={[Math.PI / 3, Math.PI / 3, 0]}>
        <coneGeometry args={[0.5, 3, 3]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
        />
      </mesh>
      <mesh position={[0, 0.7, 1.2]} rotation={[Math.PI / 3, Math.PI / 1.5, 0]}>
        <coneGeometry args={[0.5, 3, 3]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
        />
      </mesh>

      {/* TOP-LEFT */}
      <mesh position={[-0.5, 0.7, 1.2]} rotation={[0.6, Math.PI / 3, 0.4]}>
        <coneGeometry args={[0.5, 3, 3]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="blue"
          metalness={3}
        />
      </mesh>

      {/* TOP-RIGHT */}
      <mesh position={[0.5, 0.7, 1.2]} rotation={[1.3, Math.PI / 3, -0.4]}>
        <coneGeometry args={[0.5, 3, 3]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="blue"
          metalness={3}
        />
      </mesh>

      {/* BOTTOM-CENTER */}
      <mesh position={[0, 0, 1.2]} rotation={[Math.PI / 2, Math.PI / 3, 0]}>
        <coneGeometry args={[0.5, 2, 3]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
        />
      </mesh>

      {/* WINGS */}
      <mesh position={[-2, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <coneGeometry args={[0.5, 4, 3]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
        />
      </mesh>
      <mesh position={[2, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.5, 4, 3]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
        />
      </mesh>

      {/* THRUSTERS */}
      <mesh position={[-0.6, 0, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.3, 1]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
        />
      </mesh>
      <mesh position={[0.6, 0, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.3, 1]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={100}
          mixBlur={0.9}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
        />
      </mesh>
    </group>
  );
};
