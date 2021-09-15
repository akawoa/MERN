import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom'

const EditForm = (props) => {

    const history = useHistory()
    const { id } = useParams()
    const [name, setName] = useState('')
    const [age, setAge] = useState(null)
    const [born, setBorn] = useState('')

    const [validState, setValidState] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
                setAge(res.data.age);
                setBorn(res.data.born);
            })
    }, []);

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/update/' + id, {
            name,
            age,
            born
        })
            .then(res => { history.push("/") })
            .catch(err => {
                // console.log("CATCH: ", err.response.data)
                const { errors } = err.response.data
                let errorObj = {}
                for (let [key, value] of Object.entries(errors)) {
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    return (
        <div>
            <h1>Update an Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text"
                        name="name"
                        placeholder={name}
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                    {(validState.name) ? <p style={{ color: "red" }}>{validState.name}</p> : null}
                </p>
                <p>
                    <label>Age</label><br />
                    <input type="number"
                        name="age"
                        value={age}
                        onChange={(e) => { setAge(e.target.value) }} />
                    {(validState.age) ? <p style={{ color: "red" }}>{validState.age}</p> : null}
                </p>
                <p>
                    <label>Birthplace</label><br />
                    <input type="text"
                        name="born"
                        value={born}
                        onChange={(e) => { setBorn(e.target.value) }} />
                    {(validState.born) ? <p style={{ color: "red" }}>{validState.born}</p> : null}
                </p>
                <button href="/">Cancel</button>
                <input type="submit" />
            </form>
            
        </div>
    )
}

export default EditForm