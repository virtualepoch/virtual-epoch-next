"use client";

import { PanicScene } from "../src/scenes/PanicScene";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Html } from "@react-three/drei";
import { useRouter } from "next/navigation";

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
        <h2>Loading Panic scene...</h2>
      </div>
    </Html>
  );
}

function BackButton({ onClick }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        zIndex: 100,
      }}
    >
      <button
        onClick={onClick}
        style={{
          backgroundColor: "#0f0f0f",
          color: "cyan",
          border: "1px solid cyan",
          padding: "10px 15px",
          cursor: "pointer",
          fontFamily: "Arial",
          fontSize: "16px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "5px" }}
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="cyan"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </button>
    </div>
  );
}

export default function PanicPage() {
  const router = useRouter();

  const goBackToHub = () => {
    router.push("/vrpunk/hub");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <BackButton onClick={goBackToHub} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas>
          <Suspense fallback={<LoadingComponent />}>
            <PanicScene performanceLevel={2} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
