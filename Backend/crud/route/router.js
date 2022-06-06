import express from 'express'
import {create, update} from '../controller/controller.js'
import axios from 'axios';
const router = express.Router();

//Home route
router.get('/', (req, res) => {
  res.render('index', { name: "ali" })
});


// Add view route
router.get('/add', (req, res) => {
  res.render('../views/adduser.ejs')
});

// Add view route
router.get('/update', (req, res) => {
  axios.get("http://localhost:8080/items/update",{params:{id:req.params.id}}).then(function(userdata){
    // res.render('../views/updateuser.ejs',{user:userdata.data})
  })
  res.render('../views/updateuser.ejs')
});

router.post('/add',create);
router.put('/update/:id',update);

export { router };