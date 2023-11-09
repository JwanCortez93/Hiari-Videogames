import mock from '../../data/mock.json'
import Card from './card'

export default function Cards () {
    return (
        <div>
            <h1>Cards Component</h1>
            {mock.map(videogame=>{
                return (
                    <Card/>
                )
            })}
        </div>
    )
}