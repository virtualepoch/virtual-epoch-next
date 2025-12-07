import { useState } from "react";

export const BtnsHub = ({
  hubLink,
  setHubLink,
  setHubBtnClicked,
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
        <button
          className="btn-hub btn-hub-left"
          style={{transform: `translateX(-${hubLink > 0 ? 0 : 100}%)`}}
          onClick={() => {
            hubLink > 0 ? setHubLink(hubLink - 1) : setHubLink(0);
            setHubBtnClicked(true);
          }}
        />
 
        <button
          className={
            clicked ? "clicked btn-hub btn-hub-right" : "btn-hub btn-hub-right"
          }
          style={{transform: `translateX(${hubLink < 2 ? 0 : 100}%)`}}
          onClick={() => {
            hubLink < 2 ? setHubLink(hubLink + 1) : setHubLink(hubLink);
            setHubBtnClicked(true);
            setClicked(true);
          }}
        />
    </>
  );
};
