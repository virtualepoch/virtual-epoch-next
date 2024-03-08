import { useEffect, useState } from "react";

export const Header = ({ styles }) => {
  const [header, setHeader] = useState();

  useEffect(() => {
    setHeader(true);
  }, []);

  return (
    <h1>
      <div
        className={styles.landingHeader}
        style={{
          border: "none",
          background: "none",
          opacity: header ? 1 : 0,
          transform: header ? "none" : "translateY(-50px) translateZ(100vh)",
        }}
      >
        We Build Custom
      </div>

      <div
        className={styles.landingHeader}
        style={{
          border: "none",
          background: "none",

          opacity: header ? 1 : 0,
          transform: header ? "none" : "translateY(50px) translateZ(100vh)",
        }}
      >
        Front-End Web Apps
      </div>
    </h1>
  );
};
