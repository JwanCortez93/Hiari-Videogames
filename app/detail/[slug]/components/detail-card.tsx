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
    metacritic_platform_container,
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
    buttons_container,
    button,
  } = style;
  return (
    <div
      // style={{ backgroundColor: `#${videogame.dominant_color}` }}
      id={container}
    >
      {videogame.playtime ? (
        <h4 id={playtime}>Playtime: {videogame.playtime} hs</h4>
      ) : null}
      <h1 id={name}>{videogame.name}</h1>
      <h2 id={release_date}>
        Release date: {videogame.tba ? "TBA" : videogame.released}
      </h2>
      <div id={image_container}>
        <img
          alt={`${videogame.name}-1`}
          className={image}
          src={videogame.background_image}
        ></img>
        {/* <img
            className={image}
            src={videogame.background_image_additional}
            alt={`${videogame.name}-2`}
          ></img>
          {screenshots.map((screenshot,index) => {
            return (
              <img
              alt={`${videogame.name}-${index+3}`}
                className={image}
                key={screenshot.id}
                src={screenshot.image}
              ></img>
            );
          })} */}
      </div>
      <div id={ratings_container}>
        {videogame.esrb_rating ? (
          <h2 id={esrb_rating}>Rated {videogame.esrb_rating.name}</h2>
        ) : null}
        <h2 id={rating}>Rating: {videogame.rating}</h2>
        {videogame.metacritic ? (
          <h2 id={metacritic}>Metacritic: {videogame.metacritic}</h2>
        ) : null}
        {videogame.metacritic_platforms.length > 0 ? (
          <div id={metacritic_platform_container}>
            {" "}
            {videogame.metacritic_platforms.map((metacritic, index) => {
              return (
                <h3 key={index} className={metacritic_platform}>
                  The metacritic in {metacritic.platform.name} is{" "}
                  {metacritic.metascore}
                </h3>
              );
            })}
          </div>
        ) : null}
      </div>
      {/* <h2>This is the color: {videogame.dominant_color}</h2> */}
      <div id={genres_container}>
        <h2>This are the genres: </h2>
        {videogame.genres.map((genre) => {
          return (
            <h5 key={genre.id} className={genre_item}>
              {genre.name}
            </h5>
          );
        })}
      </div>
      <div id={platforms_container}>
        <h2>This are the platforms: </h2>
        {videogame.platforms.map((platform) => {
          return (
            <h5 key={platform.platform.id} className={platform_item}>
              {platform.platform.name}
            </h5>
          );
        })}
      </div>
      <div id={stores_container}>
        <h2>This are the stores: </h2>
        {videogame.stores.map((store) => {
          return (
            <h5 key={store.store.id} className={store_item}>
              {store.store.name}
            </h5>
          );
        })}
      </div>
      <div id={tags_container}>
        <h2>This are the tags: </h2>
        {videogame.tags.map((tag) => {
          return (
            <h5 key={tag.id} className={tag_item}>
              {tag.name}
            </h5>
          );
        })}
      </div>
      <div id={developers_container}>
        <h2>This are the developers: </h2>
        {videogame.developers.map((developer) => {
          return (
            <h5 key={developer.id} className={developer_item}>
              {developer.name}
            </h5>
          );
        })}
      </div>
      <div id={publishers_container}>
        <h2>This are the publishers: </h2>
        {videogame.publishers.map((publisher) => {
          return (
            <h5 key={publisher.id} className={publisher_item}>
              {publisher.name}
            </h5>
          );
        })}
      </div>

      <h3 id={description_container}>
        Description: {videogame.description_raw}
      </h3>
      <div id={buttons_container}>
        <div className={button}>
          <button>Add to favorites</button>
        </div>
        <div className={button}>
          <button>Add to wishlist</button>
        </div>
        <div className={button}>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
}
