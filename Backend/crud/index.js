import dotenv from 'dotenv'
import express from "express";
import mongoose from 'mongoose';
import { router } from './route/router.js';
import path from 'path'
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';


dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.API_PORT;
const mongoDBURI = process.env.DATABASE_URI
app.use(bodyParser.urlencoded({extended:false}));

app.use('/items', router);
app.set('view engine', 'ejs');
app.use('/cosmetic', express.static(path.join(__dirname, 'public/assets/css')))

//Connection with mongo with Mongoose.
const dbData = async () => {
  try {
    const con = await mongoose.connect(mongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // userFindAndModify:false,
      // userCeatedIndex:true
    });
    console.log('mongo db connected' + con.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}
dbData();

app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
});
