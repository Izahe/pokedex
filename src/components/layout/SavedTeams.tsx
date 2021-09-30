import { Pokemon } from '../../interfaces/Pokemon'
import { PokemonTeam } from '../../interfaces/PokemonTeam'

export const SavedTeams = ({list, onLoad}: {list: PokemonTeam[], onLoad:(team: Pokemon[])=> void}): JSX.Element => {
    return (
      <>
        <div className="list-group w-25" id ="teams_list">
        <a className="list-group-item list-group-item-action active"> Saved Teams </a>
            {list.map((team: {name: string, team: Pokemon[]}) => (
                <a className="list-group-item list-group-item-action" href = "#" onClick = {() => onLoad(team.team)}> {team.name} </a>
            ))}   
        </div>
      </>
    )
}