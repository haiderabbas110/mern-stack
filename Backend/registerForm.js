import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cookieSession({
    keys: ['ss'],

}));

const app  = express();
const port = 8000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get('/register',(req,res) => {
    res.sendFile(__dirname+'/forms/register.html', (err, text) => {
        res.send(text);
    });
});

app.post('/postdata',urlencodedParser,(req,res) => {
    res.send('welcome ' + req.body.name);
    

});

app.listen(port,function(){
    console.log("port is ready");
});