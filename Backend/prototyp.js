let User = function(name,email){
    this.name = name;
    this.email = email;
    /* this.online = function (){
        console.log(`This person name ${this.name } is now login`);
    }
    this.offline = function (){
        console.log(`This person name ${this.name } is now offline`);
    } */
}

User.prototype.online = function (){
    console.log(`This person name ${this.name } is now login`);
}
User.prototype.offline = function (){
    console.log(`This person name ${this.name } is now offline`);
}

let user1 = new User("ali","ali@yopmail.com");
let user2 = new User("ali","ali@yopmail.com");
console.log(user1.offline());
