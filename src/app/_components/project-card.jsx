"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ProjectCard = ({ styles, ...props }) => {
  const { ref, inView: cardAnim } = useInView({
    rootMargin: "-20%",
    triggerOnce: true,
  });
  const [pcAnim, setPcAnim] = useState();
  const [phoneAnim, setPhoneAnim] = useState();
  const [projectAnim, setProjectAnim] = useState();

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setTimeout(() => setProjectAnim(cardAnim), 200);
    } else {
      setTimeout(() => setPcAnim(cardAnim && true), 200);
      setTimeout(() => setPhoneAnim(cardAnim && true), 600);
    }
  }, [setPhoneAnim, cardAnim]);

  return (
    <div
      ref={ref}
      className={
        cardAnim
          ? `${styles.card} ${styles.anim} metal-card`
          : `${styles.card} metal-card`
      }
    >
      <h2 className={`${styles.title} text-shadow`}>{props.info.title}</h2>

      <div className={styles.project}>
        <div
          className={pcAnim ? `${styles.pc} ${styles.anim}` : `${styles.pc}`}
        >
          <Image
            className={pcAnim ? `${styles.imgPc} ${styles.anim}` : `${styles.imgPc}`}
            src={props.info.pcImgSrc}
            alt={props.info.pcImgAlt}
            width={500}
            height={500}
          />
          <div className={styles.pcButton}></div>

          <a
            className={styles.linkProject}
            href={props.info.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            VISIT
          </a>
        </div>

        <div
          className={
            phoneAnim ? `${styles.phone} ${styles.anim}` : `${styles.phone}`
          }
        >
          <Image
            className={phoneAnim ? `${styles.imgPhone} ${styles.anim}` : `${styles.imgPhone}`}
            src={props.info.phoneImgSrc}
            alt={props.info.phoneImgAlt}
            width={500}
            height={500}
          />
        </div>
      </div>

      <p className="text-shadow">{props.info.desc}</p>

      <h2 className="text-shadow">Features</h2>

      <ul>
        <li className="text-shadow">{props.info.li1}</li>
        <li className="text-shadow">{props.info.li2}</li>
        <li className="text-shadow">{props.info.li3}</li>
      </ul>
    </div>
  );
};
