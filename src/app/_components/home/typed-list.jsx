"use client";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "../typewriter";
import { useOnScreen } from "@/app/_functions/use-on-screen";

export const TypedList = ({ styles }) => {
  const text1 = "> Daily updates",
    text2 = "> Pixel perfection",
    text3 = "> Responsive layouts",
    text4 = "> Single-page web-apps coded with React",
    text5 = "> Use of the latest frameworks and libraries",
    text6 = "> Webpages coded with HTML, CSS, and JavaScript",
    text7 = "> Guaranteed Google performance scores above 95%",
    typeSpeed = 70,
    delay1 = 1,
    delay2 = (text1.length * typeSpeed) / 2,
    delay3 = delay2 + (text2.length * typeSpeed) / 2,
    delay4 = delay3 + (text3.length * typeSpeed) / 2,
    delay5 = delay4 + (text4.length * typeSpeed) / 2,
    delay6 = delay5 + (text5.length * typeSpeed) / 2,
    delay7 = delay6 + (text6.length * typeSpeed) / 2;

  const ref = useRef();
  const [list, setList] = useState(false);
  const [opacity, setOpacity] = useState();

  const callback = () => {
    setTimeout(() => {
      setList(true);
    }, 1);
  };

  useOnScreen(ref, callback, {
    rootMargin: "100px 0px 0px 0px",
    threshold: 0.5,
  });

  useEffect(() => {
    setTimeout(() => {
      setOpacity(list);
    }, 1);
  });

  return (
    <section ref={ref}>
      <div className={styles.content}>
        <p className={styles.statement}>
          We strive to exceed client expectations and visions by providing:
        </p>

        {list && (
          <ul style={{ opacity: opacity ? 1 : 0 }}>
            <li>
              <Typewriter delay={delay1}>{text1}</Typewriter>
            </li>

            <li>
              <Typewriter delay={delay2}>{text2}</Typewriter>
            </li>

            <li>
              <Typewriter delay={delay3}>{text3}</Typewriter>
            </li>

            <li>
              <Typewriter delay={delay4}>{text4}</Typewriter>
            </li>
            <li>
              <Typewriter delay={delay5}>{text5}</Typewriter>
            </li>

            <li className={styles.typedListLongLine}>
              <Typewriter delay={delay6}>{text6}</Typewriter>
            </li>

            <li className={styles.typedListLongLine}>
              <Typewriter delay={delay7}>{text7}</Typewriter>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};
