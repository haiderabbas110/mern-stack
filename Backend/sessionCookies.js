import express from 'express'
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';

const app = express();
const port = 8000

app.use(cookieSession({
    name: 'my-session',
    keys: ['ss'],
    maxAge:5000

}));
// app.use(cookieParser());

//feed data in render view
app.get('/data/session', (req, res) => {
    
    // sessionStorage.setItem('setBirthday', Date());
    // req.session.views = (req.session.views || 0) + 1

  req.session.ali = ( req.session.ali || 0 ) + 1 
//   console.log(pageViews);
    res.send(req.session.ali + ' views')

});


app.listen(port, function () {
    console.log(`${port} -> This port has been start`);
});