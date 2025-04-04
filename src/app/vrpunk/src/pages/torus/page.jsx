import { TorusScene } from "../../scenes/TorusScene";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function TorusPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <TorusScene performanceLevel={2} thirdPerson={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
