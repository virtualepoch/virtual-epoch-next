"use client";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname != "/" && (
        <footer>
          <div className="site-logo" />
          <h3>Boise, ID 83713</h3>

          <h3>virtualepoch@gmail.com</h3>

          <h3>&copy; 2022 Virtual Epoch, all rights reserved.</h3>
        </footer>
      )}
    </>
  );
};
