"use client";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const path = usePathname();

  return (
    <footer className={path === "/projects" ? "projects" : ""}>
      <div className="site-logo" />

      <p>Boise, ID 83713</p>

      <p>virtualepoch@gmail.com</p>

      <p>&copy; 2024 Virtual Epoch, all rights reserved.</p>
    </footer>
  );
};
