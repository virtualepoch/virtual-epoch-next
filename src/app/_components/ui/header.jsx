import Link from "next/link";
import { BtnNav } from "./btn-nav";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const Header = ({ setNav, nav }) => {
  const [previousScrollPos, setPreviousScrollPos] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > previousScrollPos) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setPreviousScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScrollPos]);

  useEffect(() => {
    setTimeout(() => {
      setShow(showHeader);
    }, 10);
  }, [showHeader]);

  const SiteLogo = () => {
    return (
      <Link
        href={"/"}
        aria-label="link to home page"
        onClick={() => {
          setNav(false);
        }}
      >
        <div className="site-logo" />
      </Link>
    );
  };

  const SiteTitle = () => {
    return (
      <Link
        href={"/"}
        onClick={() => {
          setNav(false);
        }}
        className="site-title"
      >
        Virtual Epoch
      </Link>
    );
  };

  return (
    <>
      <CSSTransition in={showHeader} timeout={500} unmountOnExit>
        <header className={show ? "main-site-header show" : "main-site-header"}>
          <SiteLogo />

          <SiteTitle />
        </header>
      </CSSTransition>

      <BtnNav nav={nav} setNav={setNav} setShowHeader={setShowHeader}/>
    </>
  );
};
