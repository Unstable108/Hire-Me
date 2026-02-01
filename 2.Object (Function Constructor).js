//creating object using constructor function
//in constructor function, base latter capital

//this is class and blueprint of a object
function Person(fname,lname, contact){
    this.fname = fname,
    this.lname = lname,
    this.number = contact,

    this.getName= function(){
        console.log("using constructor function");
        console.log(`${this.fname}  ${this.lname}`);
    }

    this.getNumber= function(){
        console.log(this.number);
    }
}

const p1 = new Person("Raja", "Das", "9957");
const p2 = new Person("Raj", "Sa", "57");
const p3 = new Person("John", "Doe", "9090");

console.log(p1);
p1.getName();
p2.getNumber();