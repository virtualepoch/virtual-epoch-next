import { ProjectCard } from "./project-card";
import styles from "./page.module.css";

export default function Projects() {
  const projectsInfo = [
    {
      id: "00",
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
      id: "01",
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
      id: "02",
      title: "www.idahomeserv.com",
      pcImgSrc: "/images/idahomeserv.jpg",
      pcImgAlt: "idahomeserv-website-pc",
      phoneImgSrc: "/images/idahomeserv-phone.jpg",
      phoneImgAlt: "idahomeserv-website-phone",
      href: "https://www.idahomeserv.com/",
      desc: "Website created for IdaHomeServ LLC - Pool & Spa. This project was developed using the latest edition of the React framework— Next.js.",
      li1: "Responsive layouts - Everything looks great on any device.",
      li2: "Numerous calls to action. Contact links for phone, email, and text in convenient locations.",
      li3: "Utilizes several optimization libraries from Next.js.",
    },
    {
      id: "03",
      title: "GoGetterz Apparel - E-commerce",
      pcImgSrc: "/images/gogetterz.png",
      pcImgAlt: "gogetterz-website-pc",
      phoneImgSrc: "/images/gogetterz-phone.png",
      phoneImgAlt: "gogetterz-website-phone",
      href: "https://gogetterz.vercel.app/",
      desc: "This is an e-commerce site template made for the apparel company GoGetterz. It was created using React.js.",
      li1: "Responsive layouts - Everything looks great on any device.",
      li2: "Animated landing page background.",
      li3: "Backend server to communicate with Stripe for payments.",
    },
    {
      id: "04",
      title: "Templates for Help Center",
      pcImgSrc: "/images/helpcenter.jpg",
      pcImgAlt: "helpcenter-pc",
      phoneImgSrc: "/images/helpcenter-phone.jpg",
      phoneImgAlt: "helpcenter-phone",
      href: "https://jacob-help-center.vercel.app/",
      desc: "Designed, developed, and coded templates using HTML, CSS, and JavaScript. Project is still being expanded upon to include further requests from the Technical Writer involved.",
      li1: "Responsive layouts - Everything looks great on all devices.",
      li2: "Search menu with links to find specific info on all pages.",
      li3: "Designed with scalability in mind.",
    },
  ];

  return (
    <main className={styles.projects}>
      <h1 className="section-heading">Projects</h1>

      {projectsInfo.map((item) => (
        <ProjectCard key={item.id} info={item} styles={styles} />
      ))}
    </main>
  );
}
