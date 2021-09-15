import React, {useState} from 'react'
import axios from "axios"
import { useHistory, Link } from 'react-router-dom'

const AuthorForm = () => {

    const history = useHistory()

    const [formState, setFormState] = useState({
        name : "",
        age : -1,
        born : ""
    })

    const [validState, setValidState] = useState({})

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", formState)
            .then(res => {
                setFormState({
                    name : "",
                    age : 0,
                    born : ""
                })
                history.push("/")
            })
            .catch(err => {
                // console.log("CATCH: ", err.response.data)
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setValidState(errorObj)
            })
    }

    return (
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input type="text" name="name" id="" onChange={changeHandler} value={formState.name} />
                    {(validState.name) ? <p style={{color:"red"}}>{validState.name}</p> : null }
                </p>
                <p>
                    Age:
                    <input type="number" name="age" id="" onChange={changeHandler} value={formState.age} placeholder="Enter an age" />
                    {(validState.age) ? <p style={{color:"red"}}>{validState.age}</p> : null }
                </p>
                <p>
                    Birthplace:
                    <input type="text" name="born" id="" onChange={changeHandler} value={formState.born} />
                    {(validState.born) ? <p style={{color:"red"}}>{validState.born}</p> : null }
                </p>
                <Link to={"/"}><button>Cancel</button></Link>
                <button type="submit">Create</button>
            </form>
    )
}

export default AuthorForm