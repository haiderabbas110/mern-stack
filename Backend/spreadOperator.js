const express = require('express');
const app = express();
const port = 8000;
app.get('/spread',(req,res) => {

    // ..cars clone of car
    // anotherCars has clone car array ...cars
    let cars = ['alto','mehran','cultus','vitz'];
    let anotherCars = ['margala','city','yaris', ...cars];

    anotherCars.forEach(function(car){

        console.log(car)
        
    });
    res.send(anotherCars.join(' <br> '))
    

});

app.listen(port);