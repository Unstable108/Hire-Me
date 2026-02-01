class Person{
    
    //for object initilization
    constructor (fname,lname,contact){
        this.fname= fname;
        this.lname= lname;
        this.number= contact;
    }

    //methods
    getNumber(){
        console.log(this.number)
    }

    getName(){
        console.log(this.fname, this.lname);
    }
}

//creating object using the class constructor blueprint
const p1= new Person("Raja","das","9957");

p1.getNumber();
p1.getName();
console.log(p1);