class Person{
    constructor(name){
        this.name = name;
    }
    //getter
    get writeOnConsole(){
        console.log(`hello from getter ${this.name}`)
    }
    set setOnConsole(message){
        this.message = message;

    }
    sayName(){
        console.log(`hi my name is ${this.name}`)
    }
}

class Developer extends Person{
    constructor(name){
        super(name);
        this.name = name;
    }

    getBio(){
        super.sayName();
        console.log("I am a developer")
    }

}
let Boy = new Developer('haider bbas');
Boy.writeOnConsole;
Boy.setOnConsole = "hi kece ho data"
Boy.getBio()

