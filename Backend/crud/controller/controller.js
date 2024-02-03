import { itemsDB } from '../model/items.js'
import {  booksDB } from '../model/books.js'
import mongoose from "mongoose";

/*================== Render Route Views ========================*/
const createView = (req, res) => {
    res.render('../views/adduser.ejs')
}

const bookView = (req, res) => {
    itemsDB.find().
    then(users => {
        console.log(users)
        res.render('../views/addbook.ejs', { users })
    });
    
}

const booklist = (req, res) => {
    // res.render('../views/booklist.ejs')

    booksDB.find().
    then(id => {
        res.render('../views/booklist.ejs', { id })
        // res.send(userData);
    });
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
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
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
            res.render('index', { userData })
            // res.send(userData);
        });
}

export { create, update, createView, homeView, updateView, bookView, booklist }