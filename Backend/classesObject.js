class Employee {
    constructor(uname,email,salary,age,location){

        this.uname = uname
        this.email = email
        this.salary = salary
        this.location = location
        this.age = age

    }

    getBio(){
        console.log(`Hi, I am ${this.uname} and my email is ${this.email} my salary is ${salary} and location is ${this.location}`)
    }

    salaryInyear(val){

        console.log(this.salary*val);

        }

}

class EmployeeStatus extends Employee{
    constructor(uname,email,salary,age,location,status){
        super(uname,email,salary,age,location);
        this.status = status
    }


    getStatus(){

        console.log(`This is the satus of emp ${this.status }`);

    }
}



let emp = new EmployeeStatus("ali","ali2@yopmial.com",20000,2,"karachi","Good");
// let emp = new EmployeeStatus("good");
console.log(emp);
console.log(emp.getStatus());
// console.log(`${emp} and ${emp.salaryInyear(200)}`);