let name={
    firstName:"Raja",
    lastName:"Das",
    printFullName: function(){
        console.log(this.firstName + " " +this.lastName)
    }
}

name.printFullName();

let name2={
    firstName:"Rahul",
    lastName: "Das",
}
// name2.printFullName(); we can solve this using __proto__

//function borrowing -> call method
//we can borrow function of other object
//and use that function with the data of other object
name.printFullName.call(name2);

let printFullName= function(hometown, country){
        console.log(this.firstName + " " +this.lastName+" from "+hometown+" ,"+country)
    }
printFullName.call(name, "Assam", "India");
printFullName.call(name2,"Delhi", "India");

//apply method is as call, 
//but instead of passing arguments individually, 
//we pass it as array list

printFullName.apply(name,["assam","india"]);

//bind method (looks exactly same as call method)

//instead of directly calling the method
//bind method, bind the method  to the object
//and returns the copy of the object

let printMyName= printFullName.bind(name2,"Assam", "India");
console.log(printMyName); //it is a function
printMyName();

//call give the invoking directly by passing the refernce of object
//apply is same, just have the pass the 2nd arg as array list
//bind gives us the copy of the method, which can be invoke later