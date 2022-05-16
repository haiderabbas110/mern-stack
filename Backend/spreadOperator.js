import express from "express";
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

//Destructure arrray

app.get('/destructure',function(req,res){

  let arr = ['A','B','C','D','E','F','G'];
  
  //console.log(arr[0]);
  //console.log(arr[1]);
  
  //Descructive Array with spread
  // let [a,b,c] = arr; // all array
  // let [a,,c] = arr;  // skip an item;
  // let [a,b,...rest] = arr // rest operators

  // console.log(a);
  //console.log(b);
  // console.log(c);
  //console.log(rest);

  //Descructive function
  /* const destructureFunc = (a,b) => {
    return [a+b,a-b]
  }
  let [sum,minus] = destructureFunc(2,5);
  console.log(sum);
  console.log(minus); */

  //Descructive Objs
  /* let obj = {
    name:"haider",
    age:23,
    address:{
      city:"karachi",
      house:"t570"
    }
  }
  let {name,age,address:{city,house}} = obj; */
  // console.log(name,age,address)
  // console.log(`${name} is ${age} old and his city is ${city} and house # is ${house}`)



  res.send('run some thig');


});

app.listen(port);
