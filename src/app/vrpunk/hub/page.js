"use client";

import { Hub } from "../src/scenes/_Hub";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Html } from "@react-three/drei";

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
        <h2>Loading Hub scene...</h2>
      </div>
    </Html>
  );
}

export default function HubPage() {
  const [hubLink, setHubLink] = useState(0);
  const [hubBtnClicked, setHubBtnClicked] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas>
          <Suspense fallback={<LoadingComponent />}>
            <Hub
              setStart={() => {}}
              setHub={() => {}}
              hubLink={hubLink}
              setHubLink={setHubLink}
              hubBtnClicked={hubBtnClicked}
              performanceLevel={2}
              setModalInfoOpen={setModalInfoOpen}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
