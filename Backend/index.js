const express = require('express');
const bodyParser = require('body-parser'); // parse incomming request
const cors = require('cors'); // http decode
const app = express();
const port = 3000;
const fs = require('fs');
const { json } = require('body-parser');

//Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World ss aa dd');
});

app.post('/register', (req, res) => {
    const body = req.body;

    /* const formData = [
        {
            'user': 'haider',
            'age': '40',
            'Designation': 'CTO',
            'Phone': '03472460650'
        },
        {
            'user': 'ali ahmed',
            'age': '40',
            'Designation': 'CEO',
            'Phone': '03472460650'
        }
    ] */

    let data = JSON.stringify(body);
    console.log(data);
    fs.writeFile("data.json",data,(err) => {

        //Error checking.
        if(err) throw err;
        console.log("New data added");

    });
    // formData.push(body);
    res.send('User added.');
});



app.listen(port, () => {
    console.log(`Node is now running on this port: ${port}`)
});