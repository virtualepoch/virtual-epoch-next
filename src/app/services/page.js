import { DemoBtn } from "./DemoBtn";
import styles from "./page.module.css";

export default function Services() {
  return (
    <main className={styles.section__main}>
      <p className="page-heading">Services</p>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <h1>Custom Animated AI ChatBots</h1>
          <br />
          <p>
            The power and popularity of AI is increasing every day. Therefore,
            it&apos;s very important to take advantage of its many enterprise
            uses i.e.:
            <br />
            <br />- ChatBots trained on your content and designed to amuse and
            assist.
            <br />
            <br />- AI algorithms that will keep you ahead of the competition.
          </p>

          {/* <DemoBtn addedClass={styles.aquaFlash} />

          <DemoBtn addedClass={styles.aquaWave} /> */}
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <h1>Custom Animated Buttons & Links</h1>
          <br />
          <p>
            We design, develop, and implement numerous eye-catching buttons
            guaranteed to make your webpage stand out. Press the contact button
            below to tell us about your unique ideas.
          </p>

          {/* <DemoBtn addedClass={styles.aquaFlash} />

          <DemoBtn addedClass={styles.aquaWave} /> */}
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <h1>Custom Animated Navigation Menus</h1>
          <br />
          <p>
            If you need a custom navigation menu that stands out from the rest,
            then you&apos;ve come to the right place. We will design & develop
            an animated menu perfectly tailored to your needs and imagination.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <h1>Custom Animated Info Cards</h1>
          <br />
          <p>
            We design, develop, and implement numerous types of animated cards.
            We have a few templates to choose from or we can create a new one
            based on your ideas.
          </p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className={styles.logo}></div>
        <div className="text-shadow">
          <h1>Complete Customized Web Sites</h1>
          <p>
            Not only do we develop custom web components, we also design and
            develop entire web sites full of{" "}
            <span className={styles.strikeword}>animations</span> and{" "}
            <span className={styles.strikeword}>applications</span>. If you are
            currently seeking any web design or development services, please
            contact us using the links below.
            <br />
          </p>
          <br />
          Our rates are very competitive.
          <br />
          <br />
          Thanks for visiting!
        </div>
      </div>
    </main>
  );
}
