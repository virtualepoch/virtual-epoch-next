"use client";

import { MachScene } from "../src/scenes/MachScene";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Html } from "@react-three/drei";
import { useRouter } from "next/navigation";
import { BtnBack } from "../src/components/ui/buttons/BtnBack";

function ErrorFallback() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
      }}
    >
      <h2>Something went wrong loading the 3D scene. Please try refreshing.</h2>
    </div>
  );
}

function LoadingComponent() {
  return (
    <Html fullscreen>
      <div
        style={{
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
        }}
      >
        <h2>Loading Mach scene...</h2>
      </div>
    </Html>
  );
}

export default function MachPage() {
  const router = useRouter();

  const goBackToHub = () => {
    router.push("/vrpunk/hub");
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <BtnBack onClick={goBackToHub} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas>
          <Suspense fallback={<LoadingComponent />}>
            <MachScene performanceLevel={2} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
