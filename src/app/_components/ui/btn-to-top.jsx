import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export const BtnToTop=()=> {
  const [showBtn, setShowBtn] = useState();
  const [anim, setAnim] = useState();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnim(showBtn);
    }, 1);
  }, [setAnim, showBtn]);

  return (
    <CSSTransition
      in={showBtn}
      unmountOnExit
      timeout={400}
      classNames="btn-to-top-wrap"
    >
      <div className="btn-to-top-wrap">
        <button
          className={anim ? "btn-to-top anim" : "btn-to-top"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </CSSTransition>
  );
}
