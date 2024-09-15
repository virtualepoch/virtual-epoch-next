import styles from "../../projects/page.module.css";
import { ContentSlider } from "../content-slider";

export const FeaturedProjects = () => {
  const projectsInfo = [
    {
      id: "boisePoolPros",
      title: "boisepoolpros.com",
      pcImgSrc: "/images/pool-pros.jpg",
      pcImgAlt: "Boise Pool Pros website pc",
      phoneImgSrc: "/images/pool-pros-phone.jpg",
      phoneImgAlt: "Boise Pool Pros website phone",
      thumbImgSrc: "/images/pool-pros-thumb.png",
      href: "https://www.boisepoolpros.com/",
      li1: "Beautiful UI/UX design",
      li2: "Animated calls to action",
      li3: "Rated Five-stars ⭐⭐⭐⭐⭐",
      hrefTitle: "boisepoolpros.com",
    },
    {
      id: "vrPunk",
      title: "VR Punk - 3D Portfolio",
      pcImgSrc: "/images/vr-punk.jpg",
      pcImgAlt: "vr-punk-website-pc",
      phoneImgSrc: "/images/vr-punk-phone.jpg",
      phoneImgAlt: "vr-punk-website-phone",
      thumbImgSrc: "/images/vr-punk-thumb.png",
      href: "https://vr-punk.vercel.app/",
      li1: "Fully Immersible VR website",
      li2: "Several 3D/VR Scenes to Explore",
      li3: "Note: Wi-fi access recommended",
      hrefTitle: "VR Punk",
    },
    {
      id: "goGetterz",
      title: "GoGetterz Apparel - E-commerce",
      pcImgSrc: "/images/gogetterz.jpg",
      pcImgAlt: "gogetterz-website-pc",
      phoneImgSrc: "/images/gogetterz-phone.jpg",
      phoneImgAlt: "gogetterz-website-phone",
      thumbImgSrc: "/images/gogetterz-thumb.jpg",
      href: "https://gogetterz.vercel.app/",
      li1: "Custom Responsive layouts",
      li2: "3D Animations",
      li3: "Backend server for Stripe payments.",
      hrefTitle: "GoGetterz Apparel",
    },
  ];

  return (
    <div className="featured-projects-wrap">
      <p className="featured-projects-heading">Featured Projects</p>

      <section className="featured-projects">
        <ContentSlider content={projectsInfo} styles={styles} />
      </section>
    </div>
  );
};
