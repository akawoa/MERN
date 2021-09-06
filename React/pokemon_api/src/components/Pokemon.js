import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
    const pokemonFetch = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=808')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }
 



    return (
        
        <div>
            <button onClick={pokemonFetch} > Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
        
    );
}
export default Pokemon;