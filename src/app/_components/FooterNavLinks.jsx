"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FooterNavLinks = () => {
  function CustomLink({ to, linkName, ...props }) {
    const pathname = usePathname();

    return (
      <>
        {pathname != to && (
          <Link className="link__footer-nav" href={to}>
            <p className="link-text">{linkName}</p>
          </Link>
        )}
      </>
    );
  }

  return (
    <nav className="nav-links-wrap">
      <CustomLink to="/" linkName="Home" />

      <CustomLink to="/services" linkName="Services" />

      <CustomLink to="/projects" linkName="Projects" />

      <CustomLink to="/contact" linkName="Contact" />
    </nav>
  );
};
