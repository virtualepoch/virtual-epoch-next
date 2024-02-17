"use client";
import { useState } from "react";
// COMPONENTS
import { Header } from "./ui/header";
import { Nav } from "./ui/nav";
import { RainCanvas } from "./ui/RainCanvas";
import { BtnToTop } from "./ui/btn-to-top";
import { BtnAction } from "./ui/btn-action";

export const UI = () => {
  const [nav, setNav] = useState();

  return (
    <>
      <RainCanvas />

      <Header nav={nav} setNav={setNav} />

      <Nav nav={nav} setNav={setNav} />

      <BtnAction />

      <BtnToTop />
    </>
  );
};
