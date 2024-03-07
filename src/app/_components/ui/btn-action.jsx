"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const BtnAction = () => {
  const path = usePathname();
  const [btn, setBtn] = useState();

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 400 >=
      document.documentElement.offsetHeight
    ) {
      setBtn(true);
    } else setBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <CSSTransition in={btn} unmountOnExit timeout={500} classNames="btn-action">
      <Link
        className="btn-action"
        href={
          path === "/" ? "/projects" : path === "/projects" ? "/contact" : "/"
        }
      >
        <p className="link-text">
          {path === "/"
            ? "Projects "
            : path === "/projects"
            ? "Contact"
            : "Home"}
        </p>
      </Link>
    </CSSTransition>
  );
};
