import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import {router} from './route/router.js';
const app = express();
const port = 8080;
const mongoDBURI = 'mongodb+srv://haiderabbas:haider555@cluster0.hxjyrxy.mongodb.net/?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router);
app.set('view engine', 'ejs');



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