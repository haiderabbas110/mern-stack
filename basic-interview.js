/* 
- Hoisting
- Closure
- Type of scopes
- Typed or interface
- Tuples
- Debounce
- Throttle 
- Utility
- Map
- Reduce
- Polyfill
- For in V/S ForEach
- Different Between ES5 vs ES6 - https://medium.com/recraftrelic/es5-vs-es6-with-example-code-9901fa0136fc
*/


/*
  ============================
  How EVENT LOOP Work
  ============================
*/

/* console.log("start")
setTimeout(() => {
    console.log("Timeout");
})
Promise.resolve('Promise').then( (res) => console.log(res))
console.log("end")
*/
//OUTPUT
/* 
  start
  end
  Promise
  Timeout
*/

/*
  =================================== 
  Closure - ARROW SHORT HAND FUNCTION 
  =================================== 
*/

/* let abc = (a) => xyz = (b) => a+b;

console.log(abc(2)(3)) */

/*
  =================================== 
  Closure - ARROW SHORT LONG FUNCTION 
  =================================== 
*/

/*
let abc = (a) => {
    return xyz = (b) => {
        return a + b  
    }
}
console.log(abc(3)(3))
*/
/*
  =================================== 
  Closure - FUNCTIONS INSIDE FUNCTION 
  =================================== 
*/

/* let func = (a) => {
  let x = a;
  let myfun = (b) => {
    return x + b;
  }
  return myfun(3)
}
let result = func(2);
console.log(result) */

/*
  ================================================================================================ 
  Utility function: that does not have any side effect means that do not have some effect anywhere 
  ================================================================================================ 
*/

/* let utility = (x) => {
  return Math.pow(x, 3);
} */


/* 
  =================== 
  REDUCE MERGE VALUES
  =================== 
*/

/* let arr = [3,2,4,5]
let red = arr.reduce((startVal,elem)=>{

  return startVal+elem

},0); // [], [0] = StartVal; elem = array value
console.log(red) */


/* 
  ===================================================================================================================================
  Polyfill -  Any javascript function is not availble in old browser then you can create that function for the perticular old browser. 
  ===================================================================================================================================
*/

/* 
// forcefully removing foreach
Array.prototype.forEach = null

if (!Array.prototype.forEach) {
  //POLYFILLING FOREACH - MEANS CREATING FOREACH FOR THOSE BROWSERS THAT DO NOT SUPPORT FOREACH
  Array.prototype.forEach = function (cb) {
    for (let val of this) {
      cb((val))
    }
  }
}

// NOW USING FOR EACH EASY AFTER POLY FILLING
let arr = [2, 32, 3, 4];
arr.forEach((elem) => {
  console.log(elem)
}) 
*/


/*
  ==================
  For in V/S ForEach
  ==================
*/

/* //Normal Foreach
let arr = [2,32,3,4];
arr.forEach((elem) => {
  console.log(elem)
})

// Advance ES6 for in
for(arrs in arr) {
  console.log(arr[arrs])
} */
