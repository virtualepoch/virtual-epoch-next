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
            please contact us by pressing the button below and use the links or fill out the form. We are eager to get started on your next unique project.
            <br />
            <br />
            Our rates are very competitive.
          </h1>
          <br />
          <br />
          Thanks for visiting!
        </div>
      </div>
    </main>
  );
}
