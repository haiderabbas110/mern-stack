import express from 'express'
import {homeview, updateView, create, update} from '../controller/controller.js'
import axios from 'axios';
const router = express.Router();

//Home route
router.get('/',homeview);

// Add view route
router.get('/add', (req, res) => {
  res.render('../views/adduser.ejs')
});

// Add view route
router.get('/update/:id', updateView);
router.post('/add',create);
router.post('/update/:id',update);

export { router };