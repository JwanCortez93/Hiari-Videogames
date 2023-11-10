import Videogame from "@/app/types/videogames-types";

export default function Card ({videogame}:{videogame:Videogame}) {
    return (
        <div>
            <h1>Card component</h1>
            <h1>{videogame.name}</h1>
            <h1>{videogame.metacritic}</h1>
            <h1>{videogame.released}</h1>
            <img src={videogame.background_image}></img>
            <h1>{videogame.rating}</h1>
            <h1>{videogame.playtime}</h1>
            <h1>{videogame.esrb_rating.name}</h1>
            <h1>{videogame.tags.map(tag=>{
                return (
                    <h5>{tag.name}</h5>
                )
            })}</h1>
        </div>
    )
}