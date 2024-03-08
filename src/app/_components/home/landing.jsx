"use client";
import { useEffect, useState } from "react";
import { Header } from "./landing-header";

export const Landing = ({ styles }) => {
  const [anim1, setAnim1] = useState();
  const [anim2, setAnim2] = useState();

  useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      setAnim1(true);
    }, 1700);
    const timeoutId2 = setTimeout(() => {
      setAnim2(true);
    }, 3400);

    return () => clearTimeout(timeoutId1, timeoutId2);
  }, []);

  return (
    <section className={styles.landing}>
      <Header styles={styles} />

      <div className={styles.flexRow}>
        <h2
          className={
            anim1
              ? `${styles.subHeading} ${styles.open}`
              : `${styles.subHeading}`
          }
        >
          From Design
        </h2>

        <h2
          className={
            anim1
              ? `${styles.subHeading} ${styles.open}`
              : `${styles.subHeading}`
          }
        >
          and Development
        </h2>
      </div>

      <div className={styles.flexRow}>
        <h2
          className={
            anim2
              ? `${styles.subHeading} ${styles.open}`
              : `${styles.subHeading}`
          }
        >
          to Customization
        </h2>

        <h2
          className={
            anim2
              ? `${styles.subHeading} ${styles.open}`
              : `${styles.subHeading}`
          }
        >
          and Optimization
        </h2>
      </div>
    </section>
  );
};
