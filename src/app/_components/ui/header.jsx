import Link from "next/link";
import { BtnNav } from "./btn-nav";

export const Header = ({ setNav, nav }) => {
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
    <header className="main-site-header">
      <SiteLogo />

      <SiteTitle />

      <BtnNav nav={nav} setNav={setNav} />
    </header>
  );
};
