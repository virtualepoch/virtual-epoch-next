import { Landing } from "./_components/home/landing";
import { TypedList } from "./_components/home/typed-list";
import { ClosingStatements } from "./_components/home/closing-statements";
import { ThreePyramid } from "./_components/three-pyramid";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Landing styles={styles} />

      <TypedList styles={styles} />

      <ClosingStatements styles={styles} />

      <ThreePyramid />
    </main>
  );
}
