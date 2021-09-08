import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const People = (props) => {

    const [people, setPeople] = useState([]);
 
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://swapi.dev/api/people`
            );
            setPeople(result.data.results);
        };
        fetchData();
    }, []); //query



    return (
        <div>
            <h1>People</h1>
            {people.map((person, i) => (
                <div key={i+1}>
                    <Link to={`/people/${i+1}`}>{person.name}</Link>
                </div>
            ))}
        </div>
    );
}

export default People;