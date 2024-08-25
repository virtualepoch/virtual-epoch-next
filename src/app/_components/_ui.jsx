"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

// COMPONENTS
import { Header } from "./ui/header";
import { Nav } from "./ui/nav";
import { RainCanvas } from "./ui/RainCanvas";
import { BtnAndModalContact } from "./ui/btn-and-modal-contact";
// import { BtnToTop } from "./ui/btn-to-top";
// import { ThreeBtnContact } from "./ThreeBtnContact";

export const UI = () => {
  const [nav, setNav] = useState();
  const path = usePathname();

  return (
    <>
      {(path === "/") | (path === "/contact") && <RainCanvas />}

      <Header nav={nav} setNav={setNav} />

      <Nav nav={nav} setNav={setNav} />

      <BtnAndModalContact />

      {/* <BtnToTop /> */}

      {/* <ThreeBtnContact /> */}
    </>
  );
};
