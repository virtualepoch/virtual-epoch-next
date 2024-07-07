"use client";
import { useState } from "react";
// COMPONENTS
import { Header } from "./ui/header";
import { Nav } from "./ui/nav";
import { RainCanvas } from "./ui/RainCanvas";
import { BtnToTop } from "./ui/btn-to-top";
import { BtnAndModalContact } from "./ui/btn-and-modal-contact";
import { usePathname } from "next/navigation";
import { ThreeBtnContact } from "./ThreeBtnContact";

export const UI = () => {
  const [nav, setNav] = useState();
  const path = usePathname();

  return (
    <>
      {(path === "/") | (path === "/contact") && <RainCanvas />}

      <Header nav={nav} setNav={setNav} />

      <Nav nav={nav} setNav={setNav} />

      <BtnAndModalContact />

      <BtnToTop />

      {/* <ThreeBtnContact /> */}
    </>
  );
};
