// Serving static file
/* var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url + 'forms/register.html', function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080); */


/* const http = require('http');
const writeOnBody = function(req,res){ */
  /* res.writeHead(200, {'content-Type':'text/html'});
  res.write('<h1>hello buddy</h1>'); */
  /* if(1==1){
      res.writeHead(301, {
          Location: '/forms/register.html'
        }).end();
        // console.log("hhaha");
  } */
//   res.end();
/* }
const server = http.createServer(writeOnBody);
server.listen(3000); */

/* const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
//   const filename = "." + q.pathname;
  const filename = 'forms/register.html';
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); */


/* const http = require('http');
const requestListener = (req, res)=>{
console.log("Request is Incoming");
const responseData = {
	message:"Hello, Codegirls Learner",
	articleData:{
		articleName: "How to send JSON response from NodeJS",
		category:"NodeJS",
		status: "published"
	},
	endingMessage:"Visit Geeksforgeeks.org for more"
}
const jsonContent = JSON.stringify(responseData);
res.end(jsonContent);
};~
const server = http.createServer(requestListener);
server.listen(3003,'localhost', function(){
	console.log("Server is Listening at Port 3000!");
}); */


const express = require('express');
const app = express();
const port = 8000;
// set the view engine to ejs
app.set('view engine','ejs');

// use res.render to load up an ejs view file
// index page
app.get('/', function(req,res){
  res.render('pages/index')
});


app.listen(port)


