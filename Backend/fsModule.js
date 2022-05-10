/* import fs from 'fs';
const testfolder = './';

fs.readdir(testfolder, (err,files) => {
    files.forEach(file => {
        console.log(file);
    });
}); */


/* import fs from 'fs';
import readline from 'readline';
const rl = readline.createInterface({
  input: fs.createReadStream('index.js'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
}); */

/* import { unlink } from 'fs';

unlink('tmp/hello/haider.js', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
}); */

/* import fs from 'fs';
const testfolder = './';

fs.readdir(testfolder, (err,files) => {
    files.forEach(file => {
        console.log(file);
    });
});
 */

import fs from 'fs';
fs.readFile('./index.js', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
