import express from 'express';
import fs from 'fs';
const app       = express();
const port      = 8000;

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  
app.use(myLogger)

// http://localhost:8000/product/1
app.get('/product/:id/',(req,res) => {

    res.send("hahhaa");
   // next();
});

// with proper id in digits/number format. using regex
app.get('/proper/:id(\\d+)',(req,res) => {

    res.send("hahhaa");
});

// with proper id in digits/number format. using regex
app.get('/user/:email?',(req,res) => {
    console.log(req.params.email)
    res.send("hahhaa");
});

app.get('/range/:from-:to',(req,res) => {
    res.send("hihihihi");
});

app.get('/register',(req,res) => {
    fs.readFile('forms/register.html', (err, text) => {
        res.send(text);
    });
});

app.get('/shop/b',(req,res, next) => {
    console.log("next callback will be receive");
    next()
},(req,res) => {
    res.send("hello from b");
});

app.listen(port);