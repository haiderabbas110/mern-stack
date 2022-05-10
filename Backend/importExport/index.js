// import * as bigfile from "./myModule.js"; if you want to import all

/* import { haider, ali } from "./coreModule.js";
console.log(ali)
 */

import http from 'http';
import EventEmitter from 'events';
const eventEmitter = new EventEmitter();

eventEmitter.on('start',() => {

    console.log("start hojao");

});
eventEmitter.emit('start');

const createBody = (req,res) => {
    res.writeHead(200, {'content-Type':'text/html'});
    res.write('<h1>hello serverss</h1>');
    res.end();
}
const server = http.createServer(createBody);
server.listen(7000);