"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* eslint-disable @next/next/no-img-element */

type Slide = {
  className: string;
  id: string;
  heading: string;
  bodyHtml: string;
  linkHref: string;
  linkClass: string;
  linkText: string;
  img: string;
  alt: string;
};

/**
 * Team bio carousel. Replaces the original Owl carousel (js/team-deets.js) with
 * Swiper: 1 slide per view, loop, autoplay 5s (pause on hover), nav + dots.
 * The content div and image render as direct children of each slide, matching
 * the original .slide markup that team-deets.css targets.
 */
export default function TeamContent({ slides }: { slides: Slide[] }) {
  return (
    <Swiper
      className="slider"
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      loop
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i} className={s.className} id={s.id}>
          <div className="content">
            <h2>{s.heading}</h2>
            <p dangerouslySetInnerHTML={{ __html: s.bodyHtml }} />
            <a href={s.linkHref} className={s.linkClass}>
              {s.linkText}
            </a>
          </div>
          <img src={s.img} alt={s.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
