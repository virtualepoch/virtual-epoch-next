import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const MainOverlay = () => {
  const [overlayOpen, setOverlayOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOverlayOpen(false);
    }, 2000);
  }, [overlayOpen]);

  return (
    <CSSTransition
      in={overlayOpen}
      unmountOnExit
      timeout={1000}
      classNames={{
        enter: "opacity-0",
        enterActive: "opacity-100 transition-opacity duration-1000",
        exit: "opacity-100",
        exitActive: "opacity-0 transition-opacity duration-1000",
      }}
    >
      <div className="fixed inset-0 z-[999] flex items-center justify-center border-[5px] border-aqua border-t-[2px] border-t-red border-b-[12px] border-b-red bg-black">
        <div className="w-[200px] h-[200px]">
          <div className="w-full h-full rounded-[2px] rounded-br-[50%] animate-[logo-pulse_1.2s_ease-in-out_infinite]"></div>
          <div className="w-full h-full rounded-[2px] rounded-br-[50%] animate-[logo-pulse_1.2s_ease-in-out_infinite]"></div>
          <div className="w-full h-full rounded-[2px] rounded-br-[50%]"></div>
          <div className="w-full h-full rounded-[2px] rounded-br-[50%] animate-[logo-pulse-2_1.4s_ease-in-out_infinite]"></div>
          <div className="w-full h-full rounded-[2px] rounded-br-[50%] animate-[logo-pulse-2_1.4s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </CSSTransition>
  );
};
