const per1={
    fname:"Raja",
    lname: "Das",
    getName: function(){
        console.log(`this is ${this.fname} ${this.lname}`);
    }
}

const per2={
    fname: "Ankita",
    lname:"saha"
}

const newFunc= per1.getName.bind(per2);
newFunc();

let name={
    firstName: "Deba",
    lastName:" Das"
}
let printName= function(hometown,state){
    console.log(this.firstName +""+ this.lastName+", "+hometown+", "+state);
}

let printMyName = printName.bind(name,"Assam","India");
printMyName();

//every function in javascipt has access to the bind method
//so to make out mybind method access to every function
//we use Function.prototype

//since using bind return a function, so in our mybind also
//we should return a function
//args is the array of arguments passed
Function.prototype.mybind= function(...args){
    // this -> printName()
    let obj = this;

    //will remove the first element from the list
    //and return us, all the later elements
    params= args.slice(1); 

    return function(...args2){
        // printName(); this should be executed
        // obj.call(args[0]); //args[0] = name
        // obj.apply(args[0],params); 
        //we are using apply cause, params is array of arguments

        obj.apply(args[0],[...params,...args2]); 
        //it will create a large array, concating both of them
    }
}

let printMyName2 = printName.mybind(name,"Shillong");
printMyName2("Bhutan");