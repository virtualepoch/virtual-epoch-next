import { OnIntersectionDisplayWrap } from "../on-intersection-display-wrap";

export const WeProvideTransitionY = ({ styles }) => {
  const liText = [
    { id: "Daily updates" },
    { id: "Pixel perfection" },
    { id: "Responsive layouts" },
    { id: "Single-page web-apps coded with React" },
    { id: "Use of the latest frameworks and libraries" },
    { id: "Webpages coded with HTML, CSS, and JavaScript" },
    { id: "Custom designs for transitions and animations" },
  ];

  return (
    <section className={styles.contentSection}>
      <h2 className={styles.contentHeader}>
        We always exceed client expectations and visions by providing:
      </h2>

      <ul>
        {liText.map((item) => (
          <li key={item.id} info={item} styles={styles}>
            <OnIntersectionDisplayWrap
              threshold={1}
              classNameEnter={styles.contentLI}
              classNameEnterActive={styles.contentTransitionY}
            >
              &gt;&nbsp;{item.id}
            </OnIntersectionDisplayWrap>
          </li>
        ))}
      </ul>
    </section>
  );
};
