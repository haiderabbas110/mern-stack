import express from "express";
import bodyParser from "body-parser";
import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';
const app = express();
const port = 8080;
const mongoDBURI = 'mongodb+srv://haiderabbas:haider555@cluster0.hxjyrxy.mongodb.net/?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { name: "ali" })
})

app.set('view engine', 'ejs');
app.get('/login', (req, res) => {
  res.render('/login.ejs')
})

app.set('view engine', 'ejs');
app.get('/register', (req, res) => {
  res.render('/')
});

//APis

//Create user
app.post('/api/users', (req, res) => {
  console.log(req.body.user_name);
  let userData = {
    name: res.body
  }
  res.send("create user");
});

app.get('/api/users', (req, res) => {
  res.send("get user")
})

app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
});

/* const connectDB = () => {

  // const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://haiderabbas:haider555@cluster0.hxjyrxy.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log(collection);
    // perform actions on the collection object
    client.close();
  });
}

connectDB() */


const dbData = async () => {
 try{
    const con = await mongoose.connect(mongoDBURI,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      // userFindAndModify:false,
      // userCeatedIndex:true
    });
    console.log('mongo db connected' + con.connection.host);
 } catch(err){
   console.log(err);
   process.exit(1)
 }
}

dbData();