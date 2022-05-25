import express from "express";
import path from 'path';
import { fileURLToPath } from 'url'
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});
const  users = {}
io.on('connection', function (socket) {
    var total=io.engine.clientsCount;
    socket.emit('getCount',total)
    // console.log(total);
    socket.on('login', function(data){
        console.log('only ' + total + ' connected');
        // saving userId to object with socket ID
        // users[socket.id] = total;
      });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});