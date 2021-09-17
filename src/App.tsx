import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios'
import NavBar from './components/layout/NavBar';
import { PokemonCard } from './components/pokemon/PokemonCard';

function App(): JSX.Element {
  const [pokemon, setPokemon] = useState<string>("pikachu");
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonImage, setPokemonImage] = useState<string>("");
  const getPokemon = async () => {
    try{
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url);
      setPokemonName(res.data.name);
      setPokemonImage(res.data.sprites.front_default)
      console.log(res);
    }
    catch(error){
      console.log(error)
    }
  };

  const handleChange = (input: any) => {
    setPokemon(input.target.value.toLowerCase())
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
        <PokemonCard
          name = {pokemonName}
          image = {pokemonImage}
        />
        
    </div>
    );
};

export default App;
