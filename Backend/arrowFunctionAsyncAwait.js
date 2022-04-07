const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
app.get('/arrow', (req, res) => {



    //this keyword only can be use on regular function not in arrow function
    const parent = {
        mom_name: "abc",
        mother: function () {
            return `${this.mom_name} is my mother.`;
        },
    };
    console.log(parent.mother());

    //promise then await 
    async function abc() {
        try {
            const fetchPromise = await axios.get('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
            console.log(fetchPromise.data);
        } catch (error) {
            console.log(`Bachaoo....! ${error}`)
        }
    }
    abc();
});
app.listen(port);