import { Typewriter } from "../typewriter";
import { OnIntersectionWrap } from "../on-intersection-wrap";

export const TypedList = ({ styles }) => {
  const text1 = "Daily updates",
    text2 = "Pixel perfection",
    text3 = "Responsive layouts",
    text4 = "Single-page web-apps coded with React",
    text5 = "Use of the latest frameworks and libraries",
    text6 = "Webpages coded with HTML, CSS, and JavaScript",
    typeSpeed = 70,
    delay1 = 1,
    delay2 = (text1.length * typeSpeed) / 2,
    delay3 = delay2 + (text2.length * typeSpeed) / 2,
    delay4 = delay3 + (text3.length * typeSpeed) / 2,
    delay5 = delay4 + (text4.length * typeSpeed) / 2,
    delay6 = delay5 + (text5.length * typeSpeed) / 2,
    delay7 = delay6 + (text6.length * typeSpeed) / 2;

  return (
    <section className={styles.typedList}>
      <p className={styles.statement}>
        We strive to exceed client expectations and visions by providing:
      </p>

      <OnIntersectionWrap>
        <ul>
          <li>
            <Typewriter delay={delay1}>&gt;&nbsp;Daily updates</Typewriter>
          </li>

          <li>
            <Typewriter delay={delay2}>&gt;&nbsp;Pixel perfection</Typewriter>
          </li>

          <li>
            <Typewriter delay={delay3}>&gt;&nbsp;Responsive layouts</Typewriter>
          </li>

          <li className={styles.typedListLongLine} style={{ marginTop: "7px" }}>
            <Typewriter delay={delay4}>
              &gt;&nbsp;Single-page web-apps coded with React
            </Typewriter>
          </li>
          <li className={styles.typedListLongLine}>
            <Typewriter delay={delay5}>
              &gt;&nbsp;Use of the latest frameworks and libraries
            </Typewriter>
          </li>

          <li className={styles.typedListLongLine}>
            <Typewriter delay={delay6}>
              &gt;&nbsp;Webpages coded with HTML, CSS, and JavaScript
            </Typewriter>
          </li>

          <li className={styles.typedListLongLine}>
            <Typewriter delay={delay7}>
              &gt;&nbsp;Guaranteed Google performance scores above 95%
            </Typewriter>
          </li>
        </ul>
      </OnIntersectionWrap>
    </section>
  );
};
