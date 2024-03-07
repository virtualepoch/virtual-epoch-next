// import { ResumeBtnCard } from "./resume-btn-card";
import { BtnAction } from "../_components/ui/btn-action";
import styles from "./page.module.css";
import { ResumeBtnCard } from "./resume-btn-card";

export default function Contact() {
  return (
    <main className={styles.contact}>
      <h1 className="section-heading">Contact</h1>
      <div className={`${styles.card} metal-card`}>
        <div className={styles.logo}></div>
        <p className="text-shadow">
          {/* Hi, my name is Craig.
          <br />
          <br />I created this website and the projects. I&apos;m currently
          seeking a position in Web Development or a new project to tackle. I
          have over five years of development experience with HTML, CSS,
          JavaScript, and over four years with React.js.
          <br />
          <br />
          My new passion is creating 3D interactive web apps utilizing Three.js
          and the React libraries— react-three/fiber, react-three/drei, and
          react-three/xr.
          <br /> */}
          {/* As VR and AR become more prominent and affordable, 3D web apps will
          become the norm. Imagine e-commerce AR apps where you can try on
          clothes or test drive cars. The need for physical stores will continue
          to decrease if you can just put on glasses and see picture perfect 3D
          models right in your living room. I&apos;m very excited to see how
          these technologies advance and develop... and even more excited to be
          a part of it.
          <br />
          <br /> */}
          If you are currently seeking web design or development services please
          contact us using the links below. Our rates are very competitive.
          <br />
          <br />
          The code for some of our projects can be viewed at the GitHub and
          CodePen links below.
          <br />
          <br />
          Thanks for visiting!
        </p>
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

      <ResumeBtnCard styles={styles} />

      <BtnAction />
    </main>
  );
}
