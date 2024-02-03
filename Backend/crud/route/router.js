import express from 'express'
import { create, update, createView, homeView, updateView, booklist, bookView } from '../controller/controller.js'
const router = express.Router();

//Home route
router.get('/', homeView);

//Book route
router.get('/books', booklist);

//Book route
router.get('/addbook', bookView);

// Add view route
router.get('/add', createView);

// Update view route
router.get('/update/:id', updateView);


/*================== Route API For Crud Opr  ========================*/
router.post('/add', create);
router.post('/update/:id', update);

export { router };