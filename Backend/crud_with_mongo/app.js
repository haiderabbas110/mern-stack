import express from 'express';
const app = express();
const port = 3000;
import {MongoClient, ObjectId} from 'mongodb'
const uri = 'mongodb+srv://haiderabbas:haider555@cluster0.hxjyrxy.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.urlencoded());
app.use(express.static('public'));
app.set('view engine', 'ejs');


// ======================= index page (read) ==================================
app.get('/', (req, res) => {
  client.connect(async (err) => {
    if (err) throw err;
    const usersCollection = client.db('myDB').collection('UsersCollection');
    await usersCollection.find({}).toArray( (err, userData) => {
      if (err) throw err;
      res.render('./index.ejs', {userData});
    });
    // client.close();
  });
  console.log("after close, inside read");
});

// =========================== create =========================================
app.post('/add', (req, res) => {
  console.log('inside add');
  client.connect(async (err) => {
    if (err) throw err;
    const usersCollection = client.db('myDB').collection('UsersCollection');
    await usersCollection.insertOne(req.body, (err, result) => {
      if (err) throw err;
      if (result.acknowledged) {
        console.log(result.insertedCount + ` document inserted successfully!`);
      } else {
        console.log(`There was an error in inserting the document`);
      }
      res.redirect('/');
    });
    // client.close();
  });
  console.log("after close, inside add");
});

// ============================== delete ======================================
app.get('/delete/:userId', (req, res) => {
  console.log('inside delete');
  client.connect(async (err) => {
    if (err) throw err;
    const usersCollection = client.db('myDB').collection('UsersCollection');
    await usersCollection.deleteOne({'_id': new ObjectId(req.params.userId)}, (err, result) => {
      if (err) throw err;
      if (result.acknowledged) {
        console.log(result.deletedCount + ' document deleted successfully!');
      } else {
        console.log('There was an error in deleting the document');
      }
      res.redirect('/');
    });
    // client.close();
  });
});

// ============================== update ======================================
app.post('/edit', (req, res) =>{
  console.log('inside update');
  console.log(req.body);
  client.connect(async (err) => {
    if (err) throw err;
    const usersCollection = client.db('myDB').collection('UsersCollection');
    await usersCollection.updateOne({'_id': new ObjectId(req.body._id)}, {$set: {'name':req.body.name, 'email':req.body.email, 'address':req.body.address, 'phone':req.body.phone}}, (err, result) => {
      if (err) throw err;
      if (result.acknowledged) {
        console.log(result.updatedCount + ' document updated successfully!');
      } else {
        console.log('There was an error in updating the document');
      }
      res.redirect('/');
    });
    // client.close();
  });
});

app.listen(port);
