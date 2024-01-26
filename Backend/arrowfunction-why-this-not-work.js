const arrowFunction = () => {
  console.log(this); // 'this' is inherited from the enclosing scope
};


const obj = {
  method: arrowFunction
};

obj.method(); // 'this' inside regularFunction will refer to 'obj'



function normalFunction (){
    console.log(this)
}  
  
  const obj2 = {
    method: normalFunction
  };
  
  obj2.method(); // 'this' inside regularFunction will refer to 'obj'