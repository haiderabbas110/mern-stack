import express from 'express'
import cookieParser from 'cookie-parser';
const app = express();
const port = 8001


app.use(cookieParser());

//feed data in render view
app.get('/set-cookie', (req, res) => {
    res.cookie("city","karachi");
    res.send("cookie set")
});

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    console.log('Signed Cookies: ', req.signedCookies)
    res.send(req.cookies);

});


app.get('/delete-cookie', (req, res) => {

    res.cookie("city","karachi");

});


app.listen(port, function () {
    console.log(`${port} -> This port has been start`);
});