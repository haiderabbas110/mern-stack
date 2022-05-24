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

io.on('connection', function (socket) {
    socket.on('send-nickname', function (nickname) {
        socket.nickname = nickname;
        users.push(socket.nickname);
        console.log(users);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});