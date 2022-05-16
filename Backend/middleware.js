import express from "express";

const app = express();
const port = 3009;
const myLogger = (req, res, next) => {
        console.log("my logger 1");
    next(); 
}
const myLogger2 = (req, res, next) => {
    
    let a = 2;
    next(); 
}

app.use(myLogger)
app.use(myLogger2)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Login hojao!')
})


/* app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
}) */

function a(){
    var a = ['a','b','c','d',];

    console.log(a)
}


a();

app.get('/user/:id', (req, res, next) => {
    res.send('USER')
})

app.listen(port, function () {
    console.log(`Port is now running @ ${port}`)
})