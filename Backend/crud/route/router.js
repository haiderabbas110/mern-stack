import express from 'express'
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { name: "ali" })
})

router.get('/login', (req, res) => {
  res.render('/login.ejs')
})

router.get('/register', (req, res) => {
  res.render('../views/adduser.ejs')
});


//APis

//Create user
router.post('/api/users', (req, res) => {
  console.log(req.body.user_name);
  let userData = {
    name: res.body
  }
  res.send("create user");
});

router.get('/api/users', (req, res) => {
  res.send("get user")
})

export { router };
