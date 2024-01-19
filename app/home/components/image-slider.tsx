"use client";

import style from "../modules/image-slider.module.css";
import { Videogame } from "@/app/types/videogames-types";
import { StepBack, StepForward } from "lucide-react";
import { useEffect, useState } from "react";
import { SliderCard } from "./slider-card";

export default function ImageSlider({
  videogames,
}: {
  videogames: Videogame[];
}) {
  const {
    container,
    img_slider_img,
    img_slider_btn,
    img_slider_title,
    btn_left,
    btn_right,
  } = style;

  const [imgIndex, setImgIndex] = useState(2);

  useEffect(() => {
    console.log(imgIndex);
  }, [imgIndex]);

  function showNextImage() {
    setImgIndex(3);
  }
  function showPrevImage() {
    setImgIndex((index) => {
      if (index === 0) return videogames.length - 1;
      return index - 1;
    });
  }

  return (
    <div id={container}>
      <h1 id={img_slider_title}>New Releases</h1>
      {/* //! This <img /> should be a <SliderCard></SliderCard> */}
      <img
        className={img_slider_img}
        src={videogames[imgIndex].background_image}
      />
      <button onClick={showPrevImage} className={img_slider_btn} id={btn_left}>
        <StepBack strokeWidth={1.25} />
      </button>
      <button onClick={showNextImage} className={img_slider_btn} id={btn_right}>
        <StepForward strokeWidth={1.25} />
      </button>
    </div>
  );
}
