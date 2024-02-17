import Link from "next/link";

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
      >
        <h1 className="site-title">Virtual Epoch</h1>
      </Link>
    );
  };

  return (
    <header className="main-site-header">
      <SiteLogo />
      <SiteTitle />
      <button
        className="btn-nav-menu"
        aria-label="navigation menu"
        onClick={() => {
          setNav(!nav);
        }}
      >
        <div className={nav ? "bar open scale-x" : "bar open"}></div>
        <div className={nav ? "bar open scale-x" : "bar open"}></div>

        <div className={nav ? "bar close" : "bar close scale-x"}></div>
        <div className={nav ? "bar close" : "bar close scale-x"}></div>
      </button>
    </header>
  );
};
