import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";


const IndexPage = () => {

    const [allAuthors, setAuthors] = useState([]);
    const [state, setState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [state])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => setState(!state))
            .catch(err => console.log(err))
    }

    const storeID = (authorID) => {
        setAuthors(allAuthors.filter((author) => author._id !== authorID));
    };

    return (
        <div>
            <h1>List of Authors</h1>
            <table>
                <tr>
                    <th>Author</th>

                    <th>Actions</th>
                </tr>
                {
                    allAuthors.map((singleAuthor, id) => {
                        return (
                            <tr>
                                <td key={id}>
                                    <Link to={`/authors/${singleAuthor._id}`}>
                                        {singleAuthor.name}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/authors/${singleAuthor._id}/edit`}>
                                        <button>Edit</button>                                </Link>                                    <button onClick={() => deleteHandler(singleAuthor._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default IndexPage;