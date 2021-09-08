import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Planets = (props) => {

    const [planets, setPlanets] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://swapi.dev/api/planets`
            );
            setPlanets(result.data.results);
        };
        fetchData();
    }, []); //query


    return (
        <div>
            <h1>Planets</h1>
            {planets.map((planet, i) => (
                <div key={i+1}>
                    <Link to={`/planets/${i+1}`}>{planet.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default Planets;