import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";


const IndexPage = () => {

    const [allProducts, setProducts] = useState([]);
    const [state, setState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [state])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then(res => setState(!state))
        .catch(err => console.log(err))
    }

    const storeID = (productID) => {
        setProducts(allProducts.filter((product) => product._id !== productID));
    };

    return (
        <div>
            <h1>List of Products</h1>
            <ul>
                {
                    allProducts.map((singleProduct, id) => {
                        return (
                            <li key={id}>
                                <Link to={`/product/${singleProduct._id}`}>
                                    {singleProduct.title}
                                </Link> |                                 <Link to={`/product/${singleProduct._id}/edit`}>
                                    Edit
                                </Link> | <button onClick={() => deleteHandler(singleProduct._id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default IndexPage;