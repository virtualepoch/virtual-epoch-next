"use client";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const path = usePathname();

  return (
    <footer className={path === "/projects" ? "projects" : ""}>
      <div className="row">
        <a
          className="link__social github"
          href="https://github.com/virtualepoch"
          title="View my work on github"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a
          className="link__social codepen"
          href="https://codepen.io/virtualepoch"
          title="View my work on codepen"
          target="_blank"
          rel="noreferrer"
        >
          codepen
        </a>
        <a
          className="link__social linkedin"
          href="https://www.linkedin.com/in/craig-kaufman/"
          title="View my LinkedIn profile"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        <a
          className="link__social email"
          href="mailto:cdk11235@gmail.com"
          title="Shoot me an email"
          rel="noreferrer"
        >
          email
        </a>
      </div>

      <div className="site-logo" />

      <p>Boise, ID 83713</p>

      <p>virtualepoch@gmail.com</p>

      <p>&copy; 2024 Virtual Epoch, all rights reserved.</p>
    </footer>
  );
};
