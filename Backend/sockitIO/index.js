import  express from "express";
import http from 'http';
import {Server} from 'socket.io';

const app = express();
const port = 3009;

const server = http.createServer(app)
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