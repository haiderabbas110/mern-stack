const express = require('express');

const app = express();
const port = 3009;

const http = require('http');
const server = http.createServer(app)
const {Server} = require('socket.io');
const io = new Server(server);

app.set('view engine','ejs');
app.get('/chat',(req,res) => {
  // res.send('Hello World');
  res.render('chat/index')
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);
  });
});

server.listen(port,function(){
  console.log(`Port is now running @ ${port}` )
})