console.log("GEC starts");

var globalVariable = "I am a global variable"

function globalFunction()
{
    console.log("Inside global function")
}

console.log(globalVariable)
globalFunction()
globalFunction2() //so in code phase this will show the function
console.log("Execution context ends");

//this full declration part will get to the memory phase
function globalFunction2()
{
    console.log("Inside global function 2")
}

//will show undefied cause this var , get undefied in memory phase
console.log(globalFunction3)
globalFunction3()

var globalFunction3= function(){
    console.log("Inside global function 3")
}