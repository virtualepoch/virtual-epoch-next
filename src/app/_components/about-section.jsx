"use client";
import { Typewriter } from "./typewriter";
import styles from "./about-section.module.css";

export const AboutSection = () => {
  const text1 = "Daily updates ",
    text2 = "Pixel perfection ",
    text3 = "Responsive layouts ",
    text4 = "Single-page web-apps coded with React ",
    text5 = "Use of the latest frameworks and libraries ",
    text6 = "Webpages coded with HTML, CSS, and JavaScript ",
    text7 = "Guaranteed Google performance scores above 95% ",
    pause1 = 0,
    pause2 = text1.length,
    pause3 = text1.length + text2.length,
    pause4 = text1.length + text2.length + text3.length,
    pause5 = text1.length + text2.length + text3.length + text4.length,
    pause6 =
      text1.length + text2.length + text3.length + text4.length + text5.length,
    pause7 =
      text1.length +
      text2.length +
      text3.length +
      text4.length +
      text5.length +
      text6.length;

  return (
    <section>
      <div className={styles.content}>
        <p className={styles.statement}>
          We strive to exceed client expectations and visions by providing:
        </p>

        <ul>
          <Typewriter styles={styles} text={text1} pause={pause1} />
          <Typewriter styles={styles} text={text2} pause={pause2} />
          <Typewriter styles={styles} text={text3} pause={pause3} />
          <Typewriter styles={styles} text={text4} pause={pause4} />
          <Typewriter styles={styles} text={text5} pause={pause5} />
          <Typewriter styles={styles} text={text6} pause={pause6} />
          <Typewriter styles={styles} text={text7} pause={pause7} />
        </ul>

        <p className={styles.statementGuarantee}>
          We never conclude any project until all the requirements of that
          project are fully completed.
          <br />
          <br />
          Client satisfaction is our goal and guarantee.
        </p>

        <p className={styles.statement}>
          If you&apos;d like to inquire into our services please press the
          &apos;Contact&apos; link on the next page. Thanks for the visit!
        </p>
      </div>
    </section>
  );
};
