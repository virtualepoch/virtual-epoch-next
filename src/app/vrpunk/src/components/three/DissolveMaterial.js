import * as THREE from "three";
import * as React from "react";
import { patchShaders } from "gl-noise";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import CSM from "three-custom-shader-material";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
  }`;

const fragmentShader = patchShaders(/* glsl */ `
  varying vec2 vUv;
  uniform float uThickness;
  uniform vec3 uColor; 
  uniform float uProgress;  

  void main() {
    gln_tFBMOpts opts = gln_tFBMOpts(1.0, 0.3, 2.0, 5.0, 1.0, 5, false, false);
    float noise = gln_sfbm(vUv, opts);
    noise = gln_normalize(noise);

   
    float progress = uProgress;

    float alpha = step(1.0 - progress, noise);
    float border = step((1.0 - progress) - uThickness, noise) - alpha;

    csm_DiffuseColor.a = alpha + border;
    csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, uColor, border);
  }`);

export function DissolveMaterial({
  baseMaterial,
  thickness = 0.1,
  color = "#eb5a13",
  intensity = 50,
  duration = 0.7,
  visible = true,
  onFadeOut = () => {},
}) {
  const uniforms = React.useRef({
    // uThickness: { value: 0.1 }, // original
    uThickness: { value: 0.5 },
    uColor: { value: new THREE.Color("#eb5a13").multiplyScalar(20) },
    uProgress: { value: 0 },
  });

  React.useEffect(() => {
    uniforms.current.uThickness.value = thickness;
    uniforms.current.uColor.value.set(color).multiplyScalar(intensity);
  }, [thickness, color, intensity]);

  useFrame((_state, delta) => {
    easing.damp(
      uniforms.current.uProgress,
      "value",
      visible ? 1 : 0,
      duration,
      delta
    );
    if (uniforms.current.uProgress.value < 0.1 && onFadeOut) {
      onFadeOut();
    }
  });

  return (
    <>
      <CSM
        baseMaterial={baseMaterial}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        toneMapped={false}
        transparent
      />
    </>
  );
}
