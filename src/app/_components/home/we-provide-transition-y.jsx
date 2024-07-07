import { OnIntersectionDisplayWrap } from "../on-intersection-display-wrap";
import { OnIntersectionWrap } from "../on-intersection-wrap";

export const WeProvideTransitionY = ({ styles }) => {
  return (
    <section className={styles.weProvideSection}>
      <h2 className={styles.weProvideHeader}>
        We strive to exceed client expectations and visions by providing:
      </h2>

      <ul>
        <li>
          <OnIntersectionDisplayWrap
            classNameEnter={styles.weProvideLI}
            classNameEnterActive={styles.weProvideTransitionY}
          >
            &gt;&nbsp;Daily updates
          </OnIntersectionDisplayWrap>
        </li>
        <li>
          <OnIntersectionDisplayWrap
            classNameEnter={styles.weProvideLI}
            classNameEnterActive={styles.weProvideTransitionY}
          >
            &gt;&nbsp;Pixel perfection
          </OnIntersectionDisplayWrap>
        </li>
        <li>
          <OnIntersectionDisplayWrap
            classNameEnter={styles.weProvideLI}
            classNameEnterActive={styles.weProvideTransitionY}
          >
            &gt;&nbsp;Responsive layouts
          </OnIntersectionDisplayWrap>
        </li>
        <li>
          <OnIntersectionDisplayWrap
            classNameEnter={styles.weProvideLI}
            classNameEnterActive={styles.weProvideTransitionY}
          >
            &gt;&nbsp;Single-page web-apps coded with React
          </OnIntersectionDisplayWrap>
        </li>
        <li>
          <OnIntersectionDisplayWrap
            classNameEnter={styles.weProvideLI}
            classNameEnterActive={styles.weProvideTransitionY}
          >
            &gt;&nbsp;Use of the latest frameworks and libraries
          </OnIntersectionDisplayWrap>
        </li>
        <li>
          <OnIntersectionDisplayWrap
            classNameEnter={styles.weProvideLI}
            classNameEnterActive={styles.weProvideTransitionY}
          >
            &gt;&nbsp;Webpages coded with HTML, CSS, and JavaScript
          </OnIntersectionDisplayWrap>
        </li>
        <li>
          <OnIntersectionDisplayWrap
            classNameEnter={styles.weProvideLI}
            classNameEnterActive={styles.weProvideTransitionY}
          >
            &gt;&nbsp;Guaranteed Google performance scores above 95%
          </OnIntersectionDisplayWrap>
        </li>
      </ul>
    </section>
  );
};
