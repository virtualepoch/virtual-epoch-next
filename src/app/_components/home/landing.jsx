import { OnLoadWrap } from "../on-load-wrap";
import { OnLoadDelayWrap } from "../on-load-delay-wrap";

export const Landing = ({ styles }) => {
  return (
    <section className={styles.landing}>
      <h1>
        <OnLoadWrap
          classNameEnter={styles.landingHeader}
          classNameEnterActive={styles.open}
        >
          We Build Custom
        </OnLoadWrap>

        <OnLoadWrap
          classNameEnter={styles.landingHeader}
          classNameEnterActive={styles.open}
        >
          Front-End Web Apps
        </OnLoadWrap>
      </h1>

      <h2>
        <div className={styles.flexRow}>
          <OnLoadDelayWrap
            classNameEnter={styles.subHeading}
            classNameEnterActive={styles.open}
            delay={1700}
          >
            From Design
          </OnLoadDelayWrap>

          <OnLoadDelayWrap
            classNameEnter={styles.subHeading}
            classNameEnterActive={styles.open}
            delay={1700}
          >
            and Development
          </OnLoadDelayWrap>
        </div>

        <div className={styles.flexRow}>
          <OnLoadDelayWrap
            classNameEnter={styles.subHeading}
            classNameEnterActive={styles.open}
            delay={3400}
          >
            to Customization
          </OnLoadDelayWrap>

          <OnLoadDelayWrap
            classNameEnter={styles.subHeading}
            classNameEnterActive={styles.open}
            delay={3400}
          >
            and Optimization
          </OnLoadDelayWrap>
        </div>
      </h2>
    </section>
  );
};
