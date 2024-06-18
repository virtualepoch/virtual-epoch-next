import Image from "next/image";

import { OnIntersectionDisplayWrap } from "../_components/on-intersection-display-wrap";

export const ProjectCard = ({ styles, ...props }) => {
  return (
    <OnIntersectionDisplayWrap
      classNameEnter={styles.cardWrap}
      classNameEnterActive={styles.anim}
      threshold={0.2}
    >
      <div className={`${styles.card} metal-card`}>
        <h2 className={`${styles.title} text-shadow`}>{props.info.title}</h2>

        <OnIntersectionDisplayWrap
          classNameEnter={styles.project}
          classNameEnterActive={styles.anim}
          threshold={0}
        >
          <div className={styles.pc}>
            <Image
              className={styles.imgPc}
              src={props.info.pcImgSrc}
              alt={props.info.pcImgAlt}
              width={500}
              height={500}
            />
            <div className={styles.pcButton}></div>
          </div>

          <div className={styles.phone}>
            <Image
              className={styles.imgPhone}
              src={props.info.phoneImgSrc}
              alt={props.info.phoneImgAlt}
              width={500}
              height={500}
            />
          </div>
        </OnIntersectionDisplayWrap>
        <p className="text-shadow">{props.info.desc}</p>

        <h2 className="text-shadow">Features</h2>

        <ul>
          <li className="text-shadow">{props.info.li1}</li>
          <li className="text-shadow">{props.info.li2}</li>
          <li className="text-shadow">{props.info.li3}</li>
        </ul>

        <a
          className={styles.linkProject}
          href={props.info.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit {props.info.hrefTitle}
        </a>
      </div>
    </OnIntersectionDisplayWrap>
  );
};
