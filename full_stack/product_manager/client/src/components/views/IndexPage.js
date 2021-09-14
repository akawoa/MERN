import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom";


const IndexPage = () => {

    const [allProducts, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

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
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default IndexPage;