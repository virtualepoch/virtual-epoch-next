import { useState, useEffect } from "react";
import { VRButton } from "@react-three/xr";
import "./modal-vr.css";

export const ModalVR = ({
  modalVROpen,
  setModalVROpen,
  foveation,
  setFoveation,
  setFrameRate,
}) => {
  const [anim, setAnim] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (modalVROpen) {
      // Add to DOM first
      setIsVisible(true);
      // Small delay to ensure DOM is ready and trigger CSS transition
      const timer = setTimeout(() => {
        setAnim(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Start exit animation
      setAnim(false);
      // Remove from DOM after animation completes (500ms timeout)
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [modalVROpen]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="vr-modal"
      style={{
        transform: anim ? "translateY(0)" : "translateY(100%)",
        opacity: anim ? 1 : 0,
        transition: "transform 500ms ease, opacity 500ms ease",
      }}
    >
      <button
        className="btn-close-modal vr"
        onClick={() => setModalVROpen(false)}
      />
      <h1 className="header">WebXR</h1>

      <div className="wrapper-vr-sections flex-col">
        <p className="text flex-center">
          Press the &apos;Enter VR&apos; button below to view this website in
          VR.
          <br /> But first:
        </p>

        <section className="flex-col">
          <h2>Foveated Rendering</h2>
          <br />
          <p>0 = no foveation | full resolution </p>
          <p>1 = full foveation | edges render at lower resolution</p>
          <div className="wrapper-btns-foveation">
            <button
              className="btn-fov minus"
              onClick={() =>
                setFoveation(
                  foveation >= 0.1 ? Math.round(foveation * 10 - 1) / 10 : 0
                )
              }
            />
            <p>{foveation.toFixed(1)}</p>
            <button
              className="btn-fov plus"
              onClick={() =>
                setFoveation(
                  foveation <= 0.9 ? Math.round(foveation * 10 + 1) / 10 : 1
                )
              }
            />
          </div>
        </section>

        <hr className="vr-modal-hr" />

        <section className="flex-col">
          <h2>Framerate</h2>
          <p className="text">
            Set the target framerate for the experience based on your hardware
            setup. If left unset the rate will be based on your device setup.
          </p>

          <div className="wrapper-btns-vr-fps">
            <button className="btn-vr-fps" onClick={() => setFrameRate(72)}>
              72 fps
            </button>
            <button className="btn-vr-fps" onClick={() => setFrameRate(90)}>
              90 fps
            </button>
            <button className="btn-vr-fps" onClick={() => setFrameRate(120)}>
              120 fps
            </button>
          </div>
        </section>
      </div>

      {/* <VRButton className="btn-vr" style={{}} /> */}
    </div>
  );
};
