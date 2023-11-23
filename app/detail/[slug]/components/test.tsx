"use client"
import { useState, useEffect } from 'react';
import style from "../modules/test.module.css";

const imagesExample = [
  "https://placehold.jp/3d3d3d/ffffff/1080x720.png",
  "https://placehold.jp/100061/ffffff/1080x720.png",
  "https://placehold.jp/00615a/ffffff/1080x720.png",
  "https://placehold.jp/610000/ffffff/1080x720.png",
];

export default function Test() {
  const { image_container, image, dot, dotContainer } = style;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesExample.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index:any) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={image_container}>
      <div className={dotContainer}>
        {imagesExample.map((_, index) => (
          <span
            key={index}
            className={`${dot} ${currentImageIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <img className={image} src={imagesExample[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
}
