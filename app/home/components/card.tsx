import Link from "next/link";
import style from "../modules/card.module.css";
import { Videogame } from "@/app/types/videogames-types";


export default function Card({ videogame }: { videogame: Videogame }) {
  const {
    container,
    shadow,
    name_container,
    image_container,
    name,
    long_name,
    longest_name,
    image,
    rating_released_container,
    rating,
    released,
  } = style;
  return (
    <div id={shadow}>
    <Link href={`detail/${videogame.slug}`} id={container}>
      <div  id={name_container}>
        {videogame.name?<h1
          className={
            videogame.name.length < 20
              ? name
              : videogame.name.length >= 20 && videogame.name.length < 40
              ? long_name
              : longest_name
          }
        >
          {videogame.name}
        </h1>:null}
        
      </div>
      <div id={image_container}>
        <img
          id={image}
          alt={videogame.name}
          src={videogame.background_image}
        ></img>
      </div>
      <div id={rating_released_container}>
        <h3 id={rating}>{videogame.rating}</h3>
        <h3 id={released}>{videogame.released}</h3>
      </div>
    </Link>
    </div>
  );
}
