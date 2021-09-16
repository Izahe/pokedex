import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios'
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';

function App(): JSX.Element {
  const [pokemon, setPokemon] = useState<string>("pikachu");
  const getPokemon = async () => {
    const toArray = [];
    try{
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url);
      console.log(res);
    } catch(error){
      console.log(error)
    }
  }

    return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard />
        </div>  
    </div>
    );
}

export default App;
