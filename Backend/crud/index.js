import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
    // require('dotenv').config()
    dotenv.config()
}
import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import {router} from './route/router.js';
const app = express();
const port = process.env.PORT || 3000;
const mongoDBURI = process.env.DATABASE_URI
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router);
app.set('view engine', 'ejs');

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


app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
});
