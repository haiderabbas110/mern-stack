import express from 'express'
import bodyParser from 'body-parser' // parse incomming requ
import cors from 'cors'
const app = express();
const port = 8000;
import fs from 'fs'

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