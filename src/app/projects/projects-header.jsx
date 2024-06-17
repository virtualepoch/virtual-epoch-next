export const ProjectsHeader = ({ styles }) => {
  return (
    <h1 className={styles.projectsHeader}>
      <div className={styles.headerDivWrap}>
        <div className={styles.headerDiv}>Below you will find</div>
        <div className={styles.headerDiv}>a curated collection</div>
        <div className={styles.headerDiv}>of our projects</div>
      </div>

      <div className={styles.headerDivWrap}>
        <div className={styles.headerDiv}>...where code</div>
        <div className={styles.headerDiv}>meets creativity.</div>
      </div>
    </h1>
  );
};
