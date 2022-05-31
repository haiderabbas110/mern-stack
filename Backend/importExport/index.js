// import * as bigfile from "./myModule.js"; if you want to import all

/* import { haider, ali } from "./coreModule.js";
console.log(ali)
 */

import http from 'http';
import EventEmitter from 'events';
const eventEmitter = new EventEmitter();

eventEmitter.on('start',(arg) => {
    console.log("start hojao is" + arg +"ka sth");

});

eventEmitter.on('start',(arg,arg1) => {
    console.log("tm bi ready hojao is" + arg1 + "sath");

});
eventEmitter.emit('start',2,4);


const createBody = (req,res) => {
    res.writeHead(200, {'content-Type':'text/html'});
    res.write('<h1>hello serverss</h1>');
    res.end();
}
const server = http.createServer(createBody);
server.listen(7000);