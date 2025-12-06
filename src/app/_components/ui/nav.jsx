import { useEffect, useState } from "react";
// COMPONENTS
import { CustomLink } from "./custom-link";

export const Nav = ({ setNav, nav }) => {
  const [open, setOpen] = useState();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setOpen(nav);
    if (nav) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [nav]);

  if (!isVisible && !nav) {
    return null;
  }

  return (
    <nav className={`nav ${nav ? "nav-enter" : "nav-exit"}`}>
      <div className={open ? "bg-nav left open" : "bg-nav left"} />
      <div className={open ? "bg-nav right open" : "bg-nav right"} />

      <ul>
        <CustomLink
          className={open ? "link one open" : "link one"}
          setNav={setNav}
          to={"/"}
        >
          HOME
        </CustomLink>

        <CustomLink
          className={open ? "link two open" : "link two"}
          setNav={setNav}
          to={"/services"}
        >
          SERVICES
        </CustomLink>

        <CustomLink
          className={open ? "link three open" : "link three"}
          setNav={setNav}
          to={"/projects"}
        >
          PROJECTS
        </CustomLink>

        <CustomLink
          className={open ? "link four open" : "link four"}
          setNav={setNav}
          to={"/contact"}
        >
          CONTACT
        </CustomLink>

        <CustomLink
          className={open ? "link four open" : "link four"}
          setNav={setNav}
          to={"/vrpunk"}
        >
          VR PUNK
        </CustomLink>
      </ul>
    </nav>
  );
};
