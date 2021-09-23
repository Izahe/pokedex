import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios'
import NavBar from './components/layout/NavBar';
import { PokemonCard } from './components/pokemon/PokemonCard';

interface Pokemon {
  name: string;
  image: string;
}
function App(): JSX.Element {
  const [pokemon, setPokemon] = useState<string>("pikachu");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
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
        const new_pokemon = {name: pokemon_name, image: pokemon_image}; 
        setPokemonList([...pokemonList, new_pokemon]);
        console.log(res);
      }
    }
    catch(error){
      console.log(error);
    }
  };

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
            <input type="text" className="form-control form-control-lg" id="pokedexEntry"  onChange = {handleChange} placeholder="Enter a Pokemon"/>
          </label>  
        </div>
      </form>
        <div className = "row">
          <PokemonCard
          list = {pokemonList}
          />  
        </div>
    </div>
    );
};

export default App;
