import styles from "./page.module.css";

export default function Services() {
  return (
    <main className={styles.contact}>
      <p className="page-heading">Services</p>
     
      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <h1>Custom Animated Buttons & Links</h1>
          <br />
          <p>We design, develop, and implement numerous eye-catching buttons guaranteed to make your webpage stand out. Below are a few examples. Hover over them to see the animation.</p>
        </div>
      </div>
    
      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <h1>Custom Animated Navigation Menus</h1>
          <br />
          <p>If you need a custom navigation menu that stands out from the rest, then you&apos;ve come to the right place. We will design & develop an animated menu perfectly tailored to your needs and imagination.</p>
        </div>
      </div>
    
      <div className={`${styles.card} metal-card`}>
        <div className="text-shadow">
          <h1>Custom Animated Info Cards</h1>
          <br />
          <p>We design, develop, and implement numerous types of animated cards. We have a few templates to choose from or we can create a new one based on your ideas.</p>
        </div>
      </div>

      <div className={`${styles.card} metal-card`}>
        <div className={styles.logo}></div>
        <div className="text-shadow">
          <h1>
            If you are currently seeking web design or development services,
            please contact us using the links below. Our rates are very
            competitive.
          </h1>
          <br />
          Thanks for visiting!
        </div>
      </div>
    </main>
  );
}
