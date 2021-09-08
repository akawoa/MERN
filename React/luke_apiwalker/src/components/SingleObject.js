import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router";


const SingleObject = (props) => {

    // const [category, setCategory] = useState("");
    // const updateCategoryHandler = (e) => {
    //     e.preventDefault();
    //     setCategory(e.target.value);
    // };

    // const [categoryId, setCategoryId] = useState("");
    // const updateCategoryIdHandler = (e) => {
    //     e.preventDefault();
    //     setCategoryId(e.target.value);
    // };

    // const [people, setPeople] = useState([]);
    const { category } = useParams();
    const { id } = useParams();
    const [getData, setData] = useState({});
    const endURL = "https://swapi.dev/api/" + category + "/" + id;

    // console.log(category);
    // console.log(id);
    // console.log();

    useEffect(() => {
        axios.get(endURL).then((response) => {
            setData(response.data);
            console.log("In use effect", response.data);
        });
    }, [endURL]);

    const renderResult = () => {
        if (props.category === "planets") {
            return <div>
            {/* <p>Searching for planets</p> */}
            <h3>{getData.name}</h3>
            <ul>
                <p>Climate: {getData.climate}</p>
                <p>Terrain: {getData.terrain}</p>
                <p>Surface Water: {getData.surface_water}</p>
                <p>Population: {getData.population}</p>
            </ul>
        </div>
        } else if (props.category === "people") {
            return <div>
                {/* <p>Searching for people</p> */}
                <h3>{getData.name}</h3>
                <ul>
                    <p>Height: {getData.height} cm</p>
                    <p>Mass: {getData.mass} kg</p>
                    <p>Hair Color: {getData.hair_color}</p>
                    <p>Skin Color: {getData.skin_color}</p>
                </ul>
            </div>
        }
    }



    // useEffect(() => {
    //     fetch('https://swapi.dev/api/{props.category}/{props.id}')
    //         .then(response => response.json())
    //         .then(response => setPeople(response.results))
    // }, []);


    return (
        <div>
            <div>
                {renderResult()}
            </div>
        </div>
    );
}

export default SingleObject;