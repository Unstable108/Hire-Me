//lexical -> inner function has the access of outerfunction (parent) variable
function outer(){
    let name="raja";

    function inner(){
        console.log("username is ",name);
    }

    inner();
}

outer();

//closure
function makeFun(){
    let name="chrome";
    function displayName(){
        console.log("browser is ",name);
    }
    return displayName;
}
const myFunc= makeFun();
myFunc();

// A function that remembers the environment (lexical scope) in which it was created,
// even after the outer function has finished executing. 