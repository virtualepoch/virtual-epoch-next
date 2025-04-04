import { PanicScene } from "../../scenes/PanicScene";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function PanicPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <PanicScene performanceLevel={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
