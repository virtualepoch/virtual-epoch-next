import { useEffect, useState } from "react";

export const Header = ({ styles }) => {
  const [header, setHeader] = useState();

  useEffect(() => {
    setHeader(true);
  }, []);

  return (
    <h1>
      <div
        className={
          header
            ? `${styles.landingHeader} ${styles.open}`
            : `${styles.landingHeader}`
        }
      >
        We Build Custom
      </div>

      <div
        className={
          header
            ? `${styles.landingHeader} ${styles.open}`
            : `${styles.landingHeader}`
        }
      >
        Front-End Web Apps
      </div>
    </h1>
  );
};
