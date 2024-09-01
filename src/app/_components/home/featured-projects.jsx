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
      li1: "Responsive layouts - Everything looks great on any device.",
      li2: "Animated calls to action. Contact links for phone, email, and text in convenient locations.",
      li3: "Utilizes several optimization libraries from Next.js.",
      hrefTitle: "boisepoolpros.com",
    },
    {
      id: "goGetterz",
      title: "GoGetterz Apparel - E-commerce",
      pcImgSrc: "/images/gogetterz.jpg",
      pcImgAlt: "gogetterz-website-pc",
      phoneImgSrc: "/images/gogetterz-phone.jpg",
      phoneImgAlt: "gogetterz-website-phone",
      href: "https://gogetterz.vercel.app/",
      li1: "Responsive layouts - Everything looks great on any device.",
      li2: "Animated landing page background.",
      li3: "Backend server to communicate with Stripe for payments.",
      hrefTitle: "GoGetterz Apparel",
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
