"use strict"
//this in global space

//this keyword in global space represt global object
//global object
//in case of browser, global object in browser is windows0
console.log(this)

//this inside a function

function x(){
    //value depends on strict /non-strict mode
    console.log(this); //undefined 
}
x();

//this inside non-strict mod - (this substitution)

//if the value of this keyword is undefined or null
//this keyword will be replaced with globalObject
//only in non-strict

//this keywords value depends on how function is called
x(); //undefined
// window.x(); //window object

//this inside a object's methods

//when we are inside a method,
//value of this keyword is that object, 
//where the method is present
const obj={
    a:10,
    x: function(){
        console.log("value of this in object method ",this.a);
    }
}
obj.x();

//call, apply bind methods (sharing methods)
const obj2={
    a:25,
}
obj.x.call(obj2);
//call -> it will take value of this keyword with the inside
//override the value of this

//this inside arrow function
const poke=()=>{
    console.log("arrow function: ", this);
}
poke(); //window -> global object (global space)
//arrow function doesn't have their own this
//they take the value of their lexical environment
//where they are enclosed

//this inside nested arrow function
const student={
    fname:"raja",
    lname:"das",
    printFullName:()=>{
        const deb=()=>{
            console.log("nested arrow function ",this);
        }
        deb();
    }
}
student.printFullName();

const obj3={
    p:5,
    x:function(){
        const y=()=>{
            console.log("nested 2: ",this);
        }
        y();
    }
}
obj3.x();

//this inside DOM elements 
//reference to the HTMLELement (here the button element)
{/* <button onclick="alert(this)">This</button> */}

//this inside class, constructor 

//this keyword inside the constructor() is automatically bound to this newly created object instance
//context  ------  this refers to 
//Constructor	The newly created instance of the class.
//Instance Method(function)	The instance that called the method.
class Meta{
    constructor(fname,lname){
        this.fname=fname,
        this.lname=lname
        console.log(this);
    }
    getName(){
        // If you call raja.getName(), this is the raja object.
        console.log(this)
        console.log(this.fname, this.lname);
    }
}
const king= new Meta("Raja","Das");
king.getName();
