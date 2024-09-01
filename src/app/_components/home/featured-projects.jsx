import { ProjectCard } from "../../projects/project-card";
import styles from "../../projects/page.module.css";

export const FeaturedProjects = () => {
  const projectsInfo = [
    {
      id: "boisePoolPros",
      title: "boisepoolpros.com",
      pcImgSrc: "/images/pool-pros.jpg",
      pcImgAlt: "Boise Pool Pros website pc",
      phoneImgSrc: "/images/pool-pros-phone.jpg",
      phoneImgAlt: "Boise Pool Pros website phone",
      href: "https://www.boisepoolpros.com/",
      li1: "Beautiful UI/UX design",
      li2: "Animated calls to action",
      li3: "Rated Five-stars ⭐⭐⭐⭐⭐",
      hrefTitle: "boisepoolpros.com",
    },
    // {
    //   id: "goGetterz",
    //   title: "GoGetterz Apparel - E-commerce",
    //   pcImgSrc: "/images/gogetterz.jpg",
    //   pcImgAlt: "gogetterz-website-pc",
    //   phoneImgSrc: "/images/gogetterz-phone.jpg",
    //   phoneImgAlt: "gogetterz-website-phone",
    //   href: "https://gogetterz.vercel.app/",
    //   li1: "Custom Responsive layouts",
    //   li2: "3D Animations",
    //   li3: "Backend server for Stripe payments.",
    //   hrefTitle: "GoGetterz Apparel",
    // },
    {
      id: "vrPunk",
      title: "VR Punk - 3D Portfolio",
      pcImgSrc: "/images/vr-punk.jpg",
      pcImgAlt: "vr-punk-website-pc",
      phoneImgSrc: "/images/vr-punk-phone.jpg",
      phoneImgAlt: "vr-punk-website-phone",
      href: "https://vr-punk.vercel.app/",
      li1: "Fully Immersible VR website",
      li2: "Several 3D/VR Scenes to Explore",
      li3: "Note: Wi-fi access recommended",
      hrefTitle: "VR Punk",
    },
  ];

  return (
    <div className="featured-projects-wrap">
      <p className="featured-projects-heading">Featured Projects</p>

      <section className="featured-projects">
        {projectsInfo.map((item) => (
          <ProjectCard key={item.id} info={item} styles={styles} />
        ))}
      </section>
    </div>
  );
};
