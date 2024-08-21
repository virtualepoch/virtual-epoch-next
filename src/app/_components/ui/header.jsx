import Link from "next/link";
import { BtnNav } from "./btn-nav";
import { useEffect, useState } from "react";

export const Header = ({ setNav, nav }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [previousScrollPos, setPreviousScrollPos] = useState(0);

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [previousScrollPos]);


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
    <header className="main-site-header" style={{top: showHeader ? 0 : "-100%"}}>
      <SiteLogo />

      <SiteTitle />

      <BtnNav nav={nav} setNav={setNav} />
    </header>
  );
};
