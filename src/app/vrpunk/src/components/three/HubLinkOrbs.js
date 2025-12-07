import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Sphere, Text, useTexture } from "@react-three/drei";
import { Interactive } from "@react-three/xr";
import gsap from "gsap";

// <COMPONENTS & ASSETS
import { Atom } from "./Atom";
// >

export const linkOrbInfo = [
  {
    text: "torus",
    number: 0,
    path: "/torus",
  },
  {
    text: "mach",
    number: 1,
    path: "/mach",
  },
  {
    text: "panic",
    number: 2,
    path: "/panic",
  },
];

export const HubLinkOrbs = ({ hubLink, setHubLink, performanceLevel }) => {
  const [hovered, setHovered] = useState();
  document.body.style.cursor = hovered ? "pointer" : "default";

  const texturePath =
    performanceLevel === 0
      ? "/vrpunk/basic-textures/hex-128.jpg"
      : performanceLevel === 2
      ? "/vrpunk/basic-textures/hex-256.jpg"
      : "/vrpunk/basic-textures/hex-512.jpg";

  // Use useTexture from drei which is suspense compatible
  const texture = useTexture(texturePath);
  texture.repeat.set(2, 1);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const atomRef = useRef();
  useEffect(() => {
    if (!atomRef.current) return;
    gsap.to(atomRef.current.position, {
      x: hubLink === 0 ? 0 : hubLink === 1 ? 4 : 8,
      ease: "power1.inout",
      duration: 1,
    });
  });

  return (
    <group
      position={[linkOrbInfo.length * -0.2, -1.2, 1.3]}
      scale={0.15}
      rotation={[-0.4, 0, 0]}
    >
      <ambientLight />
      <Atom
        atomRef={atomRef}
        scale={1.5}
        orbitScale={0.07}
        performanceLevel={performanceLevel}
      />
      {linkOrbInfo.map((item, index) => (
        <Interactive
          key={`interactive-${item.number}`}
          onSelect={() => setHubLink(item.number)}
          onHover={() => setHovered(true)}
          onBlur={() => setHovered(false)}
        >
          <group
            key={index}
            position={[index * 4, 0, 0]}
            onClick={() => setHubLink(item.number)}
            onPointerMove={() => {
              setHovered(true);
            }}
            onPointerOut={() => {
              setHovered(false);
            }}
          >
            <Text
              font="/vrpunk/fonts/ARCADE.TTF"
              fontSize={1}
              position={[0, 0, 1]}
              anchorY={"center"}
              color={item.number === hubLink ? "red" : "cyan"}
            >
              {item.text}
            </Text>

            <Sphere args={[1, 16, 16]}>
              <meshStandardMaterial map={texture} receiveShadow />
            </Sphere>
          </group>
        </Interactive>
      ))}
    </group>
  );
};
