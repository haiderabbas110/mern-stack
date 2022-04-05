const express   = require('express');
const app       = express();
const port      = 8000;

// http://localhost:8000/product/1
app.get('/product/:id/',(req,res) => {

    res.send("hahhaa");
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

app.get('/shop/b',(req,res, next) => {
    console.log("next callback will be receive");
    next()
},(req,res) => {
    res.send("hello from b");
});

app.listen(port);