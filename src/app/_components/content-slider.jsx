"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../__css/swiper.css";
import { ProjectCard } from "../projects/project-card";
import Image from "next/image";

export const ContentSlider = ({ content, styles }) => {
  const [btnPrevHov, setBtnPrevHov] = useState(null);
  const [btnNextHov, setBtnNextHov] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [op, setOp] = useState(null);
  useEffect(() => {
    setOp(true);
  }, [setOp]);

  return (
    <div
      className="image-slider"
      aria-label="Image Slider"
      style={{ opacity: op ? 1 : 0, transition: "opacity 400ms linear" }}
    >
      <Swiper
        className="swiper_container"
        style={{
          "--swiper-navigation-color": "#0ff",
        }}
        loop
        speed={500}
        grabCursor
        navigation={{
          prevEl: ".swiper-btn-prev",
          nextEl: ".swiper-btn-next",
        }}
        centeredSlides
        watchSlidesProgress
        slidesPerView="auto"
        initialSlide={1}
        effect="cube"
        cubeEffect={{
          shadow: true,
          shadowOffset: 40,
          shadowScale: 1,
          slideShadows: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectCube, FreeMode, Navigation, Thumbs]}
      >
        {content.map((item) => (
          <SwiperSlide key={item.id}>
            <ProjectCard key={item.id} info={item} styles={styles} />
          </SwiperSlide>
        ))}

        <div
          className="swiper-btn-prev"
          onTouchStart={() => {
            setBtnPrevHov(true);
          }}
          onTouchEnd={() => {
            setBtnPrevHov(false);
          }}
          style={{
            backgroundColor: btnPrevHov & "#0002",
          }}
        />
        <div
          className="swiper-btn-next"
          onTouchStart={() => {
            setBtnNextHov(true);
          }}
          onTouchEnd={() => {
            setBtnNextHov(false);
          }}
          style={{
            backgroundColor: btnNextHov & "#0002",
          }}
        />
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={24}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-thumbnails-wrap"
      >
        {content.map((content) => (
          <SwiperSlide key={content.id} className="swiper-thumbnails-slide">
           { <Image
              className="swiper-thumbnails-img"
              width={192}
              height={192}
              src={content.thumbImgSrc}
              alt={content.pcImgAlt}
            />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
