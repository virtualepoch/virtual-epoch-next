import { Landing } from "./_components/home/landing";
import { SubLanding } from "./_components/home/sub-landing";
import { WeProvideTransitionY } from "./_components/home/we-provide-transition-y";
import { ThreePyramid } from "./_components/three-pyramid";
import { ClosingStatements } from "./_components/home/closing-statements";
import styles from "./page.module.css";
import { FeaturedProjects } from "./_components/home/featured-projects";

export default function Home() {
  return (
    <>
      <Landing styles={styles} />

      <SubLanding styles={styles} />

      <WeProvideTransitionY styles={styles} />

      <div className={styles.pyramidStickyWrap}>
        <ThreePyramid styles={styles} />
      </div>

      <h3 className={styles.header3d}>
        <div>We do 3D</div>
        <div>Design</div>
        <div>&</div>
        <div>Development</div>
      </h3>

      <FeaturedProjects />

      <ClosingStatements styles={styles} />
    </>
  );
}
