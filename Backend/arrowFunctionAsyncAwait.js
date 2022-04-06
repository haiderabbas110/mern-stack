const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
app.get('/arrow', (req, res) => {


    const car = ['alto','swift','mehran','taxi'];

    res.send(car.map(car => car.length) );

    
    //promise then await
    const fetchPromise = axios.get('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    fetchPromise
    .then( response => {
        return response.data;
    })
    .then( json => {
        console.log(json[0].name);
    }).catch( error => {
        console.error(`Could not get products: ${error}`);
      });
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

});

app.listen(port);
