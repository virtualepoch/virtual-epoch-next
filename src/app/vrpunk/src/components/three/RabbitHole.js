import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { Cylinder } from "@react-three/drei";

export const RabbitHole = ({ position, textureDetail }) => {
  // Use paths that point to the public folder
  const texturePath =
    textureDetail === 0
      ? "/vrpunk/images/rabbit-hole/future-machine-512.jpg"
      : textureDetail === 2
      ? "/vrpunk/images/rabbit-hole/future-machine-2048.jpg"
      : "/vrpunk/images/rabbit-hole/future-machine-1024.jpg";

  // Use useTexture from drei which is suspense compatible
  const texture = useTexture(texturePath);

  texture.repeat.set(3, 15);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <Cylinder
      args={[5, 5, 100, 3, 1, true]}
      position={position}
      rotation={[Math.PI / -2, 0, 0]}
    >
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </Cylinder>
  );
};
