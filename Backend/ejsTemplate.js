import  express from 'express'
// const ejs = require("ejs");
const app = express();
const port = 8000

app.set('view engine','ejs');
app.get('/user/:email',(req,res) => {
    // use res.render to load up an ejs view file
    // index page
    res.render('pages/index')
});

//feed data in render view
app.get('/data/feed',(req,res) => {

    let cars = [
        {'name':'Carolla','model':2022,'engine':'atlis','color':'red'},
        {'name':'Vits','model':2021,'engine':'atlis','color':'yellow'},
        {'name':'Lamborgini','model':2023,'engine':'atlis','color':'orange'},
        {'name':'Haya bosa','model':2019,'engine':'atlis','color':'pink'}
    ];
    let buses = [
        
        {'name':'Mazda','model':2019,'engine':'lahori','color':'asmani'},
        {'name':'17k','model':2010,'engine':'karachi','color':'blue'}
    ]

    let comments = `Bus stop agya ha bhai utar jao`;

    res.render('pages/feed',{
        buses:buses,
        cars:cars,
        comments:comments
    })

});


app.listen(port);