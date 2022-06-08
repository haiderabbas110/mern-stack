import { dbConnection, ObjectId } from '../database/connection.js';

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
    console.log(req.params.id);
    dbConnection().then((client) => {
        const usersCollection = client.db('test').collection('items');
        usersCollection.updateOne(
            { '_id': new ObjectId(req.params.id) },
            { $set: { 'name': req.body.item, 'color': req.body.color, 'brand': req.body.brand, 'phone': req.body.phone } },
            (err, result) => {
                console.log(result.updatedCount + ' document updated successfully!');
                res.redirect('/items');
            });
    });
}

const updateView = (req, res) => {
    dbConnection().then(async (client) => {
        const userData = await client.db('test').collection('items')
            .findOne({
                _id: new ObjectId(req.params.id)
            });
        res.render('../views/updateuser', { userData })

    });


}

export { homeview, updateView, create, update }