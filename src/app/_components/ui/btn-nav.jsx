import { usePathname } from "next/navigation";

export const BtnNav = ({ nav, setNav }) => {
  const path = usePathname();

  return (
    <button
      className="btn-nav-menu"
      aria-label="navigation menu"
      onClick={() => {
        setNav(!nav);
      }}
    >
      <div
        className={nav ? "bar open scale-x" : "bar open"}
        style={{
          boxShadow: path === "/projects" ? "none" : "",
          backgroundColor: path === "/projects" ? "#000" : "",
        }}
      />

      <div
        className={nav ? "bar open scale-x" : "bar open"}
        style={{
          boxShadow: path === "/projects" ? "none" : "",
          backgroundColor: path === "/projects" ? "#000" : "",
        }}
      />

      <div
        className={nav ? "bar close" : "bar close scale-x"}
        style={{
          backgroundColor: path === "/projects" ? "#f00" : "",
        }}
      />

      <div
        className={nav ? "bar close" : "bar close scale-x"}
        style={{
          backgroundColor: path === "/projects" ? "#f00" : "",
        }}
      />
    </button>
  );
};
