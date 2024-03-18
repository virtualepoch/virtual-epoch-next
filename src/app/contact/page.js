import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.contact}>
      <p className="page-heading">Contact</p>
      <div className={`${styles.card} metal-card`}>
        <div className={styles.logo}></div>
        <div className="text-shadow">
          <h1>
            If you are currently seeking web design or development services,
            please contact us using the links below. Our rates are very
            competitive.
          </h1>
          <br />
          <br />
          <p>
            The code for some of our projects can be viewed at the GitHub and
            CodePen links below.
          </p>
          <br />
          <br />
          Thanks for visiting!
        </div>
      </div>
      <div className={styles.row}>
        <a
          className={`${styles.link} ${styles.github}`}
          href="https://github.com/virtualepoch"
          title="View my work on github"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a
          className={`${styles.link} ${styles.codepen}`}
          href="https://codepen.io/virtualepoch"
          title="View my work on codepen"
          target="_blank"
          rel="noreferrer"
        >
          codepen
        </a>
        <a
          className={`${styles.link} ${styles.linkedin}`}
          href="https://www.linkedin.com/in/craig-kaufman/"
          title="View my LinkedIn profile"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        <a
          className={`${styles.link} ${styles.email}`}
          href="mailto:cdk11235@gmail.com"
          title="Shoot me an email"
          rel="noreferrer"
        >
          email
        </a>
      </div>
    </main>
  );
}
