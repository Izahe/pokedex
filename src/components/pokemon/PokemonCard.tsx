import red_x from './red_x.png'
import { Pokemon } from '../../interfaces/Pokemon'

export const PokemonCard = ({list, onDelete}: {list: Pokemon[], onDelete:(id: number)=>void}): JSX.Element => {
    return (
      <>
        {list.map((card: {id:number, name: string, image: string}) => (
            <div className = 'col-md-2 col-sm-6 mb-6'>
            <div className="card">
                <div className="card-header">
                  <h1>{card.name}<button type = "button" className="btn btn-light" onClick = {() => onDelete(card.id)}><img src = {red_x} alt = "delete" height = "25px" ></img></button></h1>
                </div>
                <div className = "card-image">
                  <img src = {card.image} alt = {card.name} width = "150" height = "150"></img>
                </div> 
          </div>
        </div>
        ))}
      </>
    )
}