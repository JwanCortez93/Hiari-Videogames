// import mock from '../../data/mock.json'
import style from "../modules/cards.module.css";
import { getVideogames } from "@/app/shared/videogames";
import Card from "./card";


export default async function Cards() {
  const videogames = await getVideogames();

  const { container } = style;

  return (
    <div id={container}>
      {videogames.map((videogame) => {
        return <Card videogame={videogame} />;
      })}
    </div>
  );
}
