import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useParams, Link, useHistory } from "react-router-dom";


const ShowPage = () => {


    const { id } = useParams()
    const history = useHistory()
    const [authorState, setAuthorState] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthorState(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => history.push("/"))
            .catch(err => console.log(err))
    }

    return (

        <div>
            {
                (authorState) ?
                    <div>

                        <h1>Name: {authorState.name}</h1>
                        <h1>Age: {authorState.age}</h1>
                        <h1>Birthplace: {authorState.born}</h1>
                        <Link to={`/authors/${authorState._id}/edit`}><button>Edit</button></Link>
                        <button onClick={deleteHandler}>Delete</button>
                    </div>
                    : <h1>Loading....</h1>
            }
        </div>

    )
}


export default ShowPage;