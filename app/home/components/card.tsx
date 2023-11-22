import Link from "next/link";
import style from "../modules/card.module.css";
import Videogame from "@/app/types/videogames-types";

export default function Card({ videogame }: { videogame: Videogame }) {
  return (
    <Link href={`detail/${videogame.id}`} id={style.container}>
      <h1 id={style.name}>{videogame.name}</h1>
      <img
        id={style.image}
        alt={videogame.name}
        src={videogame.background_image}
      ></img>
      <div id={style.footer}>
        <h3 id={style.rating}>{videogame.rating}</h3>
        <h3 id={style.released}>{videogame.released}</h3>
      </div>
    </Link>
  );
}
