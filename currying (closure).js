//in closure, when function is return, it has access 
//to its outer variable,
//like preseting the value of x
let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo= multiply(2);
multiplyByTwo(3);

multiply(5)(6); //30

// Currying is a technique where a function with multiple arguments is transformed into a series of functions, 
// each taking exactly one argument at a time.

// It transforms a function with multiple arguments 
// into a series of functions, each taking a single argument.

//how it works
// When you call a curried function with one argument, 
// it doesn't perform the final calculation. 
// Instead, it returns a new function that "remembers" that argument (via a closure) 
// and waits for the next one. This continues until the very last argument is received, 
// at which point the final result is returned.

//uses
// Useful in frameworks like React to pre-set parameters 
// for event handlers without needing anonymous wrapper functions in the JSX

//Using ES6 Arrow Functions
// The ES6 way
const multiplyNew = x => y => console.log(x * y);

// Usage
const multiplyByTwoNew = multiplyNew(2);
multiplyByTwoNew(3); // 6

multiplyNew(5)(6);   // 30
