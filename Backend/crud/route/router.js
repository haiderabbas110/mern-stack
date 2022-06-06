import express from 'express'
const router = express.Router();
import {itemsDB} from '../model/items.js'

router.get('/', (req, res) => {
  res.render('index', { name: "ali" })
});

router.get('/add', (req, res) => {
  res.render('../views/adduser.ejs')
});

router.post('/add', (req, res) => {
  console.log(req.body)
  const item = new itemsDB({
    name:req.body.item,
    color:req.body.color,
    brand:req.body.brand
  })

  item.save(item).then(data => {
    res.send(data)
  });

});

export { router };