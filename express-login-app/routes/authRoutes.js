const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/authMiddleware');

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    req.session.user = { username };
    return res.redirect('/profile');
  }
  res.redirect('/login');
});

router.get('/profile', requireAuth, (req, res) => {
  res.render('profile', { user: req.session.user });
});

router.get('/logout', requireAuth, (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/login');
  });
});

module.exports = router;