export const SceneTitle = ({ currentScene }) => {
  return (
    <h1 className="scene-title">
      {currentScene === "hub"
        ? "Hub"
        : currentScene === "torus"
        ? "Torus"
        : currentScene === "mach"
        ? "Mach"
        : currentScene === "panic"
        ? "Panic"
        : currentScene === "punk"
        ? "Punk"
        : "Virtual Punk"}
    </h1>
  );
};
