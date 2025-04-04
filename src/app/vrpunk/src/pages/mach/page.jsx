import { MachScene } from "../../scenes/MachScene";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function MachPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <MachScene performanceLevel={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
