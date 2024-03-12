import { ProjectsHeader } from "./projects-header";
import { ProjectCard } from "./project-card";
import styles from "./page.module.css";

export default function Projects() {
  const projectsInfo = [
    {
      id: "vrPunk",
      title: "VR Punk - 3D Portfolio",
      pcImgSrc: "/images/vr-punk.jpg",
      pcImgAlt: "vr-punk-website-pc",
      phoneImgSrc: "/images/vr-punk-phone.jpg",
      phoneImgAlt: "vr-punk-website-phone",
      href: "https://vr-punk.vercel.app/",
      desc: "This project is a demonstration of what's possible with 3D web development. It was created using React.js, Three.js, and the react-three/fiber, react-three/drei, and react-three/xr libraries.",
      li1: "A toggle button to view the site in VR.",
      li2: "Responsive layouts - Everything looks great on any device (i.e. mobile, tablet, laptop, pc, and VR headsets).",
      li3: " Please note: The VR feature is in beta and a couple bugs are still being worked out.",
    },
    {
      id: "boisePoolPros",
      title: "www.boisepoolpros.com",
      pcImgSrc: "/images/pool-pros.jpg",
      pcImgAlt: "Boise Pool Pros website pc",
      phoneImgSrc: "/images/pool-pros-phone.jpg",
      phoneImgAlt: "Boise Pool Pros website phone",
      href: "https://www.boisepoolpros.com/",
      desc: "Website created for Boise Pool Pros. This project was developed using the latest edition of the React framework— Next.js.",
      li1: "Responsive layouts - Everything looks great on any device.",
      li2: "Animated calls to action. Contact links for phone, email, and text in convenient locations.",
      li3: "Utilizes several optimization libraries from Next.js.",
    },
    {
      id: "webEngines",
      title: "www.webengines.org",
      pcImgSrc: "/images/webengines.jpg",
      pcImgAlt: "webengines-website-pc",
      phoneImgSrc: "/images/webengines-phone.jpg",
      phoneImgAlt: "webengines-website-phone",
      href: "https://www.webengines.org/",
      desc: "WebEngines —a JavaScript and CSS tutorial site. This project is a single page application created with React.js.",
      li1: "Responsive layouts - Everything looks great on any device.",
      li2: "Use of HTML Canvas element for interactive star fractal image background.",
      li3: "Site logo animation on medium to large screen sizes.",
    },
    {
      id: "goGetterz",
      title: "GoGetterz Apparel - E-commerce",
      pcImgSrc: "/images/gogetterz.jpg",
      pcImgAlt: "gogetterz-website-pc",
      phoneImgSrc: "/images/gogetterz-phone.jpg",
      phoneImgAlt: "gogetterz-website-phone",
      href: "https://gogetterz.vercel.app/",
      desc: "This is an e-commerce site template made for the apparel company GoGetterz. It was created using React.js.",
      li1: "Responsive layouts - Everything looks great on any device.",
      li2: "Animated landing page background.",
      li3: "Backend server to communicate with Stripe for payments.",
    },
    {
      id: "helpCenter",
      title: "Templates for Help Center",
      pcImgSrc: "/images/helpcenter.jpg",
      pcImgAlt: "helpcenter-pc",
      phoneImgSrc: "/images/helpcenter-phone.jpg",
      phoneImgAlt: "helpcenter-phone",
      href: "https://jacob-help-center.vercel.app/",
      desc: "These templates were designed and developed using HTML, CSS, and JavaScript. The project is still being expanded upon to include further requests from the technical writer involved.",
      li1: "Responsive layouts - Everything looks great on all devices.",
      li2: "Search menu with links to find specific info on all pages.",
      li3: "Designed with scalability in mind.",
    },
  ];

  return (
    <main className={styles.projects}>
      <div className="section-heading">Projects</div>

      <ProjectsHeader styles={styles} />

      {projectsInfo.map((item) => (
        <ProjectCard key={item.id} info={item} styles={styles} />
      ))}
    </main>
  );
}
