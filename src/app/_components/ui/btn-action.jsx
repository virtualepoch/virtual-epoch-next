import Link from "next/link";
import { usePathname } from "next/navigation";

export const BtnAction = () => {
  const path = usePathname();
  return (
    <Link
      className="btn-action"
      href={
        path === "/"
          ? "/about"
          : path === "/about"
          ? "/projects"
          : path === "/projects"
          ? "/contact"
          : "/"
      }
    >
      <p className="link-text">
        {path === "/"
          ? "Learn More"
          : path === "/about"
          ? "Projects"
          : path === "/projects"
          ? "Contact"
          : "Home"}
      </p>
    </Link>
  );
};
