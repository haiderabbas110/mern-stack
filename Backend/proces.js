/* import { argv } from 'process';
// print process.argv
argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
}); */


// console.log(process.argv.slice(1))

/* function grab(flag) {
    var index = process.argv.indexOf(flag);
   
    return (index === -1) ? null : process.argv[index + 1];
}
var greeting = grab('greeting');
var user = grab('user');
if (!user || !greeting) {
    console.log('You Blew it !');
} else {
    console.log(`Welcome ${user}, ${greeting}`);
} */


//Process stdin
/* process.stdin.on("data", data =>{
    console.log("you have typed " + data)
    process.exit();
    
}); */


console.log("what is you name");
process.stdin.once('data' , (chunk) => {
    let name = chunk.toString();
    console.log("some time show their name" + name)

});

