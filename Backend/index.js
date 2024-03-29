import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

const port = 8000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Hello World ss aa dd');
});

app.post('/register', (req, res) => {
    const body = req.body;
    console.log(body)
    res.send('User added.');
});



app.listen(port, () => {
    console.log(`Node is now running on this port: ${port}`)
});