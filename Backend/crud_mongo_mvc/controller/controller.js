import { dbConnection } from '../database/connection.js';

const homeview = (req, res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('items');
        usersCollection.find({}).toArray((err, userData) => {
            res.render('../views/index', { userData });
        });
    });
    // client.close();
}
const create = (req, res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('items');
        usersCollection.insertOne(req.body, (err, result) => {
            console.log(result.insertedCount + ` document inserted successfully!`);
            res.redirect('/');
        });
    });
}

const update = (req, res) => {
    const usersCollection = client.db('test').collection('items');
    usersCollection.updateOne(
        { '_id': new ObjectId(req.body._id) },
        { $set: { 'name': req.body.name, 'email': req.body.email, 'address': req.body.address, 'phone': req.body.phone } },
        (err, result) => {
            console.log(result.updatedCount + ' document updated successfully!');
            res.redirect('/');
        });
}

const updateView = (req,res) => {
    res.render('../views/updateuser', {id:req.params.id} )
}

export { homeview, updateView, create, update }