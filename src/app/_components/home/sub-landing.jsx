import Link from "next/link";
import { OnIntersectionDisplayWrap } from "../on-intersection-display-wrap";

export const SubLanding = ({ styles }) => {
  const liText = [
    {
      id: "AI Web Apps",
      content:
        "We build Custom AI ChatBots guaranteed to increase business efficiency and dazzle your customers.",
      content2: "LLMs are trained on your content to ensure absolute accuracy.",
      href: "/services",
    },
    {
      id: "Custom Websites",
      content:
        "We design and develop custom websites perfectly tailored to your visions.",
      content2: "Our rates are the most competitive you will find.",
      href: "/services",
    },
    {
      id: "Web Animations",
      content:
        "Is there a custom animation you'd love to implement but unsure how? —We can surely assist with any custom animation to boost your site's appeal and lower bounce rates.",
      href: "/services",
    },
  ];

  return (
    <section className={styles.subLanding}>
      <ul className={styles}>
        {liText.map((item) => (
          <li key={item.id} info={item} className={`${styles} metal-card`}>
            <OnIntersectionDisplayWrap
              threshold={1}
              classNameEnter={styles.contentLI}
              classNameEnterActive={styles.contentTransitionY}
            >
              <h2 className={styles.subLandingHeader}>{item.id}</h2>
            </OnIntersectionDisplayWrap>

            <OnIntersectionDisplayWrap
              threshold={1}
              classNameEnter={styles.contentLI}
              classNameEnterActive={styles.contentTransitionY}
            >
              <p>- {item.content}</p>
            </OnIntersectionDisplayWrap>

            <OnIntersectionDisplayWrap
              threshold={1}
              classNameEnter={styles.contentLI}
              classNameEnterActive={styles.contentTransitionY}
            >
              <p className={styles.contentTwo}>{item.content2}</p>
            </OnIntersectionDisplayWrap>

            <OnIntersectionDisplayWrap
              threshold={1}
              classNameEnter={styles.contentLI}
              classNameEnterActive={styles.contentTransitionY}
            >
              <Link href={item.href} className={styles.href}>
                Learn more
              </Link>
            </OnIntersectionDisplayWrap>
          </li>
        ))}
      </ul>
    </section>
  );
};
