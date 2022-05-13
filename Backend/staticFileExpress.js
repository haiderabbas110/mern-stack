import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = 3000;

/* const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 */

let pubPath = () => {
    express.static('public')
    console.log("asfdf")
}

 app.use(pubPath);
// app.use("/static", express.static('public'));
//virtual path.

// app.use('/myfolder', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.send('Hello World!');
});


/* app.set('view engine','ejs');

app.get('/home',(req,res)=> {
    console.log("get /home");
    res.render('Home/home.ejs');
});

app.get('/contact',(req,res)=>{
    console.log("get /contact");
    res.render('Contact/contact.ejs');
});

// app.use("/static", express.static('./static/'));
app.use(express.static('public')) */
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));