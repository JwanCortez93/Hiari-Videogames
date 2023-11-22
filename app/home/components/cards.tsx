// import mock from '../../data/mock.json'
import style from "../modules/cards.module.css";
import { getVideogames } from "@/app/shared/videogames";
import Card from "./card";

function fetchVideogames() {
  return getVideogames();
}

export default async function Cards() {
  const videogames = await fetchVideogames();

  const { container } = style;

  return (
    <div id={container}>
      {videogames.map((videogame) => {
        return <Card videogame={videogame} />;
      })}
    </div>
  );
}
