import { getLatestVideogames } from "@/app/api/utils/videogames";
import style from "../modules/poster.module.css";
import ImageSlider from "./image-slider";

export default async function Poster() {
  const videogames = await getLatestVideogames();

  const { container } = style;

  return (
    <div id={container}>
      <ImageSlider videogames={videogames} />
    </div>
  );
}
