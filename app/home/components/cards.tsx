// import mock from '../../data/mock.json'
import { getVideogames } from '@/app/shared/videogames'
import Card from './card'
import Videogame from '@/app/types/videogames-types';



export default async function Cards () {
    const videogames = await getVideogames()
    
    
    return (
        <div>
            <h1>Cards Component</h1>
            {videogames.map(videogame=>{
                return (
                    <Card videogame={videogame}/>
                )
            })}
        </div>
    )
}