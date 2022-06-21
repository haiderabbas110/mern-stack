import axios from 'axios';
import React, { useEffect, useState } from "react";

const UiElements = (props) => {
    const [products, getProduct] = useState()
    const getProductData = () => {
        axios.get('http://localhost:8080/items/')
            .then(function (response) {
                // handle success
                console.log(response + "  asdsafd")
                getProduct(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            })
    }

    useEffect(() => {
        getProductData();
        
    }, []);
    return (
        <>
            <h1>UiElements</h1>
            <button onClick={props.data}>click me</button>
            <table>
                {products && products.map((data, key) => {
                    return (
                        <>
                            <tbody>
                                <tr key={key}>
                                    <td>Name: {data.name}</td>
                                    <td>Brand: {data.brand}</td>
                                    <td>Color: {data.color}</td>
                                    
                                </tr>
                            </tbody>

                        </>
                    )
                })}
            </table>

        </>

    )
}

export default UiElements;