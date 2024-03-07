import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
// COMPONENTS
import { CustomLink } from "./custom-link";

export const Nav = ({ setNav, nav }) => {
  const [open, setOpen] = useState();
  useEffect(() => {
    setOpen(nav);
  }, [setOpen, nav]);

  return (
    <CSSTransition in={nav} timeout={500} unmountOnExit>
      <nav className="nav">
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

          {/* <CustomLink
            className={open ? "link two open" : "link two"}
            setNav={setNav}
            to={"/about"}
          >
            ABOUT
          </CustomLink> */}

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
        </ul>
      </nav>
    </CSSTransition>
  );
};
