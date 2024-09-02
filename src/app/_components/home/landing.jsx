import { OnLoadWrap } from "../on-load-wrap";
import { OnLoadDelayWrap } from "../on-load-delay-wrap";

export const Landing = ({ styles }) => {
  return (
    <section className={styles.landing}>
      <h1>
        <hr className={styles.hr_landing}/>

        <OnLoadWrap
          classNameEnter={styles.landingHeader}
          classNameEnterActive={styles.open}
        >
          AI Web Apps
        </OnLoadWrap>

        <hr className={styles.hr_landing}/>

        <OnLoadWrap
          classNameEnter={styles.landingHeader}
          classNameEnterActive={styles.open}
        >
          Custom Websites
        </OnLoadWrap>
        
        <hr className={styles.hr_landing}/>
      
        <OnLoadWrap
          classNameEnter={styles.landingHeader}
          classNameEnterActive={styles.open}
        >
          Web Animations
        </OnLoadWrap>
        
        <hr className={styles.hr_landing}/>
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
