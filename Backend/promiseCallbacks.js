const express = require('express');
const app = express();
const port = 8000;
app.get('/promise',(req,res) => {

    res.send("hahhah")
    let p = new Promise(function(resolve,reject){
        const x = 1 + 2;
        if(x === 2) {
            resolve("Success")
        }else{
            reject("Fail")
        }
    })
    p.then(function(message){
        console.log("This result is now " + message)
    }).catch(function(message){
        console.log("This result has been " + message)
    });
});

app.listen(port);