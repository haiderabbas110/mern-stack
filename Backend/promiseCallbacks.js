import { rejects } from 'assert';
import express from 'express';
import { resolve } from 'path';
const app = express();
const port = 8000;

app.get('/callback',function(req,res){

    /* let person1 = () => {
        // console.log("call person one");
        setTimeout( ()=> {
            console.log("call person one");
        },3000);
    }

    let person2 = () => {
        console.log("call person two");
    }

    person1();
    person2(); */

    //Callback example
    
    /* let person1 = (name,callback) => {
        console.log(`i am busy right talking with ${name}`);
        person2()
    }
    
    let person2 = () => {
        console.log("i will call you back");
    }
    
    person1("ali", person2); */
    
    res.send("hahah");

})

app.get('/callbackhell',function(req, res){

    //name person
    //age of person
    //address of person 
    //each above result will occur after 2 sec

    setTimeout( () =>{
        let obj = {
            name:"ali",
            age: 27,
            address:{
                city:"karacehi",
                house:"houset570"
            }
        }
        let {name,age,address:{city,house}} = obj;
        // let nageAage = age+10;
        console.log(`My name is ${name}`);
        setTimeout( (newAage) => {
            console.log(`My name is ${name} and my age is ${newAage}`);
            setTimeout( () => {
                console.log(`My name is ${name} and my age is ${newAage} and my address is ${city} house number is ${house}`);
            },2000)
        },2000,age+10)
    },2000);
    res.send("hehhhaha")
});

app.get('/promise',(req,res) => {


    
    //Formula of promise: pending, resolve, error
    //Producing Promise.
    const promiseObjs = new Promise((resolve,rejects) => {
        setTimeout(()=>{
            let salary = [1000,2000,3000,4000];
            resolve(salary);
            //rejects("Error while getting reslult");
        },2000);
    });
    const empData = (salary) => {
        return new Promise((resove,rejects) => {
            setTimeout((salary)=>{
                let objEmp = {
                    name:"ali",
                    age: 22,
                    address:{
                        city:"karachi",
                        house:"t570"
                    }
                }
                let {name,age} = objEmp;
                resolve(`My name is ${name} and my age is ${age} and my salary is ${salary}`);
            },2000,salary)
        })
    }
    //consume, using promise
    promiseObjs.then((salary) =>{
        console.log(salary);
        return empData(salary);
    })
    .then((mydata)=>{
        console.log(mydata)
    })
    .catch((error)=>{
        console.log(error)
    })

    //stages 1:Pending, 2:Sucess, 3:Reject
    /* let p = new Promise(function(resolve,reject){
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
    }); */
    res.send("hahhah")
});

app.listen(port);