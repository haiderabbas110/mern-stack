const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRoutes');
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Session Configuration
app.use(session({
  secret: 'cgcodegirls',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // Set true for HTTPS
    maxAge: 3600000 // 1 hour
  }
}));

// Routes
app.use('/', authRouter);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});