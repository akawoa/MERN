import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useParams } from "react-router-dom";


const ShowPage = () => {


    const { id } = useParams()
    const [productState, setProductState] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProductState(res.data))
            .catch(err => console.log(err))
    }, [])

    return (

        <div>
            {
                (productState) ?
                    <div>

                        <h1>Title: {productState.title}</h1>
                        <h1>Price: {productState.price}</h1>
                        <h1>Description: {productState.description}</h1>
                    </div>
                    : <h1>Loading....</h1>
            }
        </div>

    )
}


export default ShowPage;