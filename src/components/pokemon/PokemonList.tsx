import React, { Component } from 'react'
//import axios from 'axios'
import PokemonCard from './PokemonCard'

export default class PokemonList extends Component {
    
    
   render(){
        return (
            <div className = "row">
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </div>
        );
    }
}