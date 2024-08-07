import { OnIntersectionDisplayWrap } from "../on-intersection-display-wrap";

export const WeProvideTransitionY = ({ styles }) => {
  const liText = [
    { id: "Daily updates" },
    { id: "Pixel perfection" },
    { id: "Responsive layouts" },
    { id: "Single-page web-apps coded with React" },
    { id: "Use of the latest frameworks and libraries" },
    { id: "Webpages coded with HTML, CSS, and JavaScript" },
    { id: "Guaranteed Google performance scores above 95%" },
  ];

  return (
    <section className={styles.weProvideSection}>
      <h2 className={styles.weProvideHeader}>
        We strive to exceed client expectations and visions by providing:
      </h2>

      <ul>
        {liText.map((item) => (
          <li key={item.id} info={item} styles={styles}>
            <OnIntersectionDisplayWrap
              threshold={1}
              classNameEnter={styles.weProvideLI}
              classNameEnterActive={styles.weProvideTransitionY}
            >
              &gt;&nbsp;{item.id}
            </OnIntersectionDisplayWrap>
          </li>
        ))}
      </ul>
    </section>
  );
};
