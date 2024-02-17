import Link from "next/link";
import { usePathname } from "next/navigation";

export const CustomLink = ({ to, setNav, children, ...props }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={to}
        {...props}
        style={{
          border: pathname === to && "solid #0ff",
          color: pathname === to && "#0ff",
        }}
        onClick={() => {
          setNav(false);
        }}
      >
        {children}
      </Link>
    </li>
  );
};
