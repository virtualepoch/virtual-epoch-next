import { Landing } from "./_components/home/landing";
import { TypedList } from "./_components/home/typed-list";
import { ThreePyramid } from "./_components/three-pyramid";
import { ClosingStatements } from "./_components/home/closing-statements";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Landing styles={styles} />

      <TypedList styles={styles} />

      <div className={styles.pyramidStickyWrap}>
        <ThreePyramid styles={styles} />
      </div>

      <h3 className={styles.header3d}>
        <div>We do 3D</div>
        <div>Design</div>
        <div>&</div>
        <div>Development</div>
      </h3>

      <ClosingStatements styles={styles} />
    </>
  );
}
