"use client";
import { useEffect, useState } from "react";
import { BtnAction } from "./_components/ui/btn-action";
import styles from "./page.module.css";

export default function Home() {
  const [heading, setHeading] = useState();
  const [anim1, setAnim1] = useState();
  const [anim2, setAnim2] = useState();

  useEffect(() => {
    setHeading(true);
    const timeoutId1 = setTimeout(() => {
      setAnim1(true);
    }, 1500);
    const timeoutId2 = setTimeout(() => {
      setAnim2(true);
    }, 3000);

    return () => clearTimeout(timeoutId1, timeoutId2);
  }, []);

  return (
    <main>
      <section className={styles.page}>
        <h1
          className="section-heading"
          style={{
            transform: heading ? "none" : "translateY(-50vh)",
            transition: "transform 1s ease",
          }}
        >
          Front-End Web Apps
        </h1>
        <div className={styles.flexRow}>
          <h2
            className={
              anim1
                ? `${styles.subHeading} ${styles.open}`
                : `${styles.subHeading}`
            }
          >
            Design
          </h2>

          <h2
            className={
              anim1
                ? `${styles.subHeading} ${styles.open}`
                : `${styles.subHeading}`
            }
          >
            Development
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
            Customization
          </h2>

          <h2
            className={
              anim2
                ? `${styles.subHeading} ${styles.open}`
                : `${styles.subHeading}`
            }
          >
            Optimization
          </h2>
        </div>
      </section>
      <BtnAction link="/about" linkName="LEARN MORE" />
    </main>
  );
}