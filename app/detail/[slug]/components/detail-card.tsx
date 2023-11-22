import style from "../modules/detail-card.module.css";
import Videogame from "@/app/types/videogames-types";

export default function DetailCard({
  videogame,
  screenshots,
}: {
  videogame: Videogame;
  screenshots: { id: number; image: string }[];
}) {
  const {
    container,
    name,
    release_date,
    playtime,
    image_container,
    image,
    ratings_container,
    esrb_rating,
    rating,
    metacritic,
    metacritic_platform,
    genres_container,
    genre_item,
    platforms_container,
    platform_item,
    stores_container,
    store_item,
    tags_container,
    tag_item,
    publishers_container,
    publisher_item,
    developers_container,
    developer_item,
    description_container,
  } = style;
  return (
    <div style={{ backgroundColor: videogame.dominant_color }} id={container}>
      <h1 id={name}>This is {videogame.name}'s detail page</h1>
      <h2 id={release_date}>Release date: {videogame.tba ? "TBA" : videogame.released}</h2>
      {videogame.playtime ? <h2 id={playtime}>Playtime: {videogame.playtime} hs</h2> : null}
      <div id={image_container}>
        <img className={image} src={videogame.background_image}></img>
        <img
          className={image}
          src={videogame.background_image_additional}
        ></img>
        {screenshots.map((screenshot) => {
          return (
            <img
              className={image}
              key={screenshot.id}
              src={screenshot.image}
            ></img>
          );
        })}
      </div>
      <div id={ratings_container}>
        {videogame.esrb_rating ? (
          <h2 id={esrb_rating}>Rated {videogame.esrb_rating.name}</h2>
        ) : null}
        <h2 id={rating}>Rating: {videogame.rating}</h2>
        {videogame.metacritic ? (
          <h2 id={metacritic}>Metacritic: {videogame.metacritic}</h2>
        ) : null}
        {videogame.metacritic_platforms.length > 0
          ? videogame.metacritic_platforms.map((metacritic) => {
              return (
                <h3 className={metacritic_platform}>
                  The metacritic in {metacritic.platform.name} is{" "}
                  {metacritic.metascore}
                </h3>
              );
            })
          : null}
      </div>
      <h2>This is the color: {videogame.dominant_color}</h2>
      <h2 id={genres_container}>
        This are the genres:{" "}
        {videogame.genres.map((genre) => {
          return <h5 className={genre_item}>{genre.name}</h5>
        })}
      </h2>
      <h2 id={platforms_container}>
        This are the platforms:{" "}
        {videogame.platforms.map((platform) => {
          return <h5 className={platform_item}>{platform.platform.name}</h5>
        })}
      </h2>
      <h2 id={stores_container}>
        This are the stores:{" "}
        {videogame.stores.map((store) => {
          return <h5 className={store_item}>{store.store.name}</h5>
        })}
      </h2>
      <h2 id={tags_container}>
        This are the tags:{" "}
        {videogame.tags.map((tag) => {
          return <h5 className={tag_item}>{tag.name}</h5>
        })}
      </h2>
      <h2 id={developers_container}>
        This are the developers:{" "}
        {videogame.developers.map((developer) => {
          return <h5 className={developer_item}>{developer.name}</h5>
        })}
      </h2>
      <h2 id={publishers_container}>
        This are the publishers:{" "}
        {videogame.publishers.map((publisher) => {
          return <h5 className={publisher_item}>{publisher.name}</h5>
        })}
      </h2>
      

      <h3 id={description_container}>Description: {videogame.description_raw}</h3>
    </div>
  );
}
