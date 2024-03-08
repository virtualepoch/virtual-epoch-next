"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LinkNextPage = () => {
  const path = usePathname();

  return (
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
          ? "Contact Us"
          : "Home"}
      </p>
    </Link>
  );
};
