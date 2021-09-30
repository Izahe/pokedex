import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';
import NavBar from './components/layout/NavBar';
import { PokemonCard } from './components/pokemon/PokemonCard';
import { Pokemon } from './interfaces/Pokemon';
import { PokemonTeam } from './interfaces/PokemonTeam';
import { SavedTeams } from './components/layout/SavedTeams';

function App(): JSX.Element {
  const [pokemon, setPokemon] = useState<string>("pikachu");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [savedTeams, setSavedTeams] = useState<PokemonTeam[]>([]);

  const getPokemon = async () => {
    try{
      if (pokemonList.length == 6){
        alert("A team can only have 6 pokemon!")
      }
      else{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url);
        let pokemon_name: string = res.data.name;
        //Making the first letter capitalized
        pokemon_name = pokemon_name.substring(0,1).toUpperCase() + pokemon_name.substring(1);
        const pokemon_image: string = res.data.sprites.front_default;
        const new_pokemon = {name: pokemon_name, image: pokemon_image, id: Math.random()}; 
        setPokemonList([...pokemonList, new_pokemon]);
        console.log(res);
      }
    }
    catch(error){
      console.log(error);
    }
  };

  const deletePokemon  = (id: number) => {
    setPokemonList(pokemonList.filter((pokemon) => pokemon.id !== id))
    console.log("deleted", id);
  }
  const deleteAllPokemon = (list: Pokemon[]) => {
    setPokemonList(pokemonList.filter(() => 0))
    console.log("deleted all pokemon");
  }

  const saveTeam = () =>  {
   let team_name: any = window.prompt("Enter a team name");
   if (team_name){
    let new_team: PokemonTeam = {name: team_name, team: pokemonList};
    setSavedTeams([...savedTeams, new_team]);
   }
  }

  const loadTeam = (team: Pokemon[]) => {
    setPokemonList(team);
  }
  const handleChange = (input: any) => {
    setPokemon(input.target.value.toLowerCase());
  }

  const handleSubmit = (mon: any) => {
    mon.preventDefault();
    getPokemon();
  }
    return (
    <div className="App">
      <NavBar />
      <form onSubmit ={handleSubmit}> 
        <div className="form-group ">
          <label>
            <input type="text" className="form-control form-control-lg " id="pokedexEntry"  onChange = {handleChange} placeholder="Enter a Pokemon, then press enter"/>
            <button type="button" className="btn btn-danger btn-lg" id="delete_all_button" onClick = {() => deleteAllPokemon(pokemonList)}>Delete All Pokemon</button>
            <button type="button" className="btn btn-success btn-lg" id="save_button" onClick = {() => saveTeam()}>Save Pokemon Team</button>
            <SavedTeams
              list = {savedTeams}
              onLoad = {loadTeam}
            />
          </label> 
        </div>
      </form>
        <div className = "row" id = "pokemon_row">
          {pokemonList.length == 0 ? (
            <h1>No Pokemon, enter a Pokemon above to get started.</h1>)
          :  
          (
          <PokemonCard
          list = {pokemonList}
          onDelete = {deletePokemon}
          />) 
          }
        </div>
    </div>
    );
};

export default App;
