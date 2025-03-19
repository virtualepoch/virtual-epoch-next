import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const BtnsHub = ({
  hubLink,
  setHubLink,
  setHubBtnClicked,
  currentScene,
}) => {
  const isHub = currentScene === "hub";
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <CSSTransition
        in={isHub && hubLink > 0}
        classNames="btn-hub-left"
        timeout={hubLink > 0 ? 1000 : 500}
        unmountOnExit
      >
        <button
          className="btn-hub btn-hub-left"
          onClick={() => {
            hubLink > 0 ? setHubLink(hubLink - 1) : setHubLink(0);
            setHubBtnClicked(true);
          }}
        />
      </CSSTransition>

      <CSSTransition
        in={isHub && hubLink < 2}
        classNames="btn-hub-right"
        timeout={hubLink < 2 ? 1000 : 500}
        unmountOnExit
      >
        <button
          className={
            clicked ? "clicked btn-hub btn-hub-right" : "btn-hub btn-hub-right"
          }
          onClick={() => {
            hubLink < 2 ? setHubLink(hubLink + 1) : setHubLink(hubLink);
            setHubBtnClicked(true);
            setClicked(true);
          }}
        />
      </CSSTransition>
    </>
  );
};
