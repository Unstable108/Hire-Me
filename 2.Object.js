const person={
    fname: 'raja',
    lname: 'das',
    getName: function(){
        console.log("created function using object literal");
    },
}

console.log(person);
person.getName();

//creating object using constructor function
//in constructor function, base latter capital
function Person(fname,lname, contact){
    this.fname = fname,
    this.lname = lname,
    this.number = contact,

    this.getName= function(){
        console.log("using constructor function");
        console.log(`${this.fname}  ${this.lname}`);
    }
}

const p1 = new Person("Raja", "Das", "9957");
console.log(p1);
p1.getName();