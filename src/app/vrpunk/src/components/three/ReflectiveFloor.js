import { MeshReflectorMaterial } from "@react-three/drei";

export const ReflectiveFloor = () => {
  return (
    <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[1, 1]} // Blur ground reflections (width, height), 0 skips blur
        mixBlur={0.5} // How much blur mixes with surface roughness (default = 1)
        mixStrength={1} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={512} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        distortion={1} // Amount of distortion based on the distortionMap texture
        distortionMap={
          null
          // distortionTexture
        } // The red channel of this texture is used as the distortion map. Default is null
        debug={
          0
        } /* Depending on the assigned value, one of the following channels is shown:
              0 = no debug
              1 = depth channel
              2 = base channel
              3 = distortion channel
              4 = lod channel (based on the roughness)
            */
        reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
        color={"#00cccc"}
      />
    </mesh>
  );
};
