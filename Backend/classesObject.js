class Employee {
    /* 
    1) Constructor is used to initialize the state of an object. Method is used to expose behaviour of an object.
    2) Constructor must not have return type. Method must have return type.
    3) Constructor is invoked implicitly. Method is invoked explicitly.
    4) Getters(), or accessors, are methods that provide access to an object's instance variables. Setters(), or mutators, are methods that provide the caller with an opportunity to update the value of a particular instance variable.
*/
    constructor(uname, email, salary, designation, location) {
        this.uname = uname
        this.email = email
        this.salary = salary
        this.location = location
        this.designation = designation
    }

    info() {
        console.log(`Hi, I am ${this.uname} and my designation is ${this.designation} and my email is ${this.email} my salary is ${this.salary} and location is ${this.location}`)
    }

}

class Manager extends Employee {
    /*  constructor(uname, email, salary, designation, location, status) {
         super(uname, email, salary, designation, location);
         this.status = status
     } */

    allownces() {
        let fuel = 3000;
        let accomodation = 10000;
        let salary = this.salary + fuel + accomodation;
        console.log(`Hi, I am ${this.uname} and my designation is ${this.designation} and my email is ${this.email} my salary is ${salary} and location is ${this.location}`)
    }

    get role() {
        return `${this.uname} is a ${this.designation}`
    }

    set role(arg) {
        /* if(arg.length < 1){
            throw new Error("Data is empty")
        } */
        this.designation = arg
    }
}


let emp = new Employee("ali", "ali2@yopmial.com", 20000, "employee", "karachi");
let manager = new Manager("ahmed", "ahmed@yopmial.com", 30000, "manager", "karachi");
emp.info();
manager.allownces()

//getter
// console.log(manager.role)
//setter
manager.role = "Senior manager";
console.log(manager.role);