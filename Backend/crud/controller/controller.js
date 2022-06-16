import { itemsDB } from '../model/items.js'
import mongoose from "mongoose";

/*================== Render Route Views ========================*/
const createView = (req, res) => {
    res.render('../views/adduser.ejs')
}
const updateView = async (req, res) => {
    const userData = await itemsDB.findOne({
        _id: mongoose.Types.ObjectId(req.params.id
        )
    });
    console.log(userData)
    res.render('../views/updateuser', { userData })
}

/*================== Route API For Crud Opr  ========================*/
const create = (req, res) => {
    const item = new itemsDB({
        name: req.body.item,
        color: req.body.color,
        brand: req.body.brand
    })
    item.save(item).then(data => {
        //res.send(data)
        res.redirect('/items');
    });
}

const update = (req, res) => {
    const id = req.params.id;
    itemsDB.findByIdAndUpdate(id, req.body).
        then(userData => {
            if(userData){
                res.redirect('/items')
            }
        });
}

const homeView = (req, res) => {
    // itemsDB.find({name:{$eq:"haider"}}).
    itemsDB.find().
        then(userData => {
            //res.render('index', { userData })
            res.send(userData);
        });
}

export { create, update, createView, homeView, updateView }