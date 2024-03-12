export const BtnNav = ({ nav, setNav }) => {
  return (
    <button
      className="btn-nav-menu"
      aria-label="navigation menu"
      onClick={() => {
        setNav(!nav);
      }}
    >
      <div className={nav ? "bar open scale-x" : "bar open"} />

      <div className={nav ? "bar open scale-x" : "bar open"} />

      <div className={nav ? "bar close" : "bar close scale-x"} />

      <div className={nav ? "bar close" : "bar close scale-x"} />
    </button>
  );
};
