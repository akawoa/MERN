import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
    const pokemonFetch = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=808')
        .then(pokemon=>{setPokemon(pokemon.data.results)})
    }
 



    return (
        
        <div>
            <button onClick={pokemonFetch} > Fetch Pokemon</button>
            <ul>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
            </ul>
        </div>
        
    );
}
export default Pokemon;