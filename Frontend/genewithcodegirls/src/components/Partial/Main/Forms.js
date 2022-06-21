import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import React from "react";

const Forms = () => {
    const [products, getProduct] = useState()
    const getProductData = () => {
        axios.post('http://localhost:8080/items/')
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

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item</Form.Label>
                <Form.Control type="text" placeholder="Enter Item" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" placeholder="Color" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="Color" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    )
}

export default Forms;