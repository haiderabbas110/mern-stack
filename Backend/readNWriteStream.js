/* import http from 'http';
import fs from 'fs';
import {fileURLToPath} from 'url'
import path from 'path';


const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
// console.log('directory-name 👉️', __dirname);

let readStream = fs.createReadStream(__dirname,'./readme.txt');

readStream.on('data',function(chunk){
    console.log("New Stream is here");
}); */

import fs from 'fs';
  
// Use fs.createReadStream() method
// to read the file
let reader = fs.createReadStream('readme.txt', 'utf8');
  
// Read and display the file data on console
reader.on('data', function (chunk) {
    console.log(chunk);
});