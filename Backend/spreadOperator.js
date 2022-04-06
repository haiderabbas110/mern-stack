const express = require('express');
const app = express();
const port = 8000;
app.get('/spread', (req, res) => {
  // ..cars clone of car
  // anotherCars has clone car array ...cars
  const cars = ['alto', 'mehran', 'cultus', 'vitz'];
  const anotherCars = ['margala', 'city', 'yaris', ...cars];

  anotherCars.forEach(function(car) {
    console.log(car);
  });
  res.send(anotherCars.join(' <br> '));


  // rest functions
  function testdrive(a, b, c, ...args) {
    console.log(a, b, c, args);
  }

  testdrive(1, 2, 3, 4, 5, 6, 4, 3, 5, 2, 5); // ..args return array
});

app.listen(port);
