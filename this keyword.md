The `this` keyword in JavaScript refers to the object that is currently executing the function, and its value is determined at runtime based on how the function is called.  It is not tied to where the function is defined, but rather to how it is invoked.
In object methods, this refers to the object that owns the method. 
Example: obj.method() → this inside method refers to obj.
In the global scope, this refers to the global object (window in browsers, globalThis in Node.js). 
In non-strict mode, it’s the global object; in strict mode, it’s undefined. 
In regular functions, this depends on the call context:
Called as a standalone function → this is the global object (non-strict) or undefined (strict).
Called with call(), apply(), or bind() → this is explicitly set to the provided object. 
In constructor functions (called with new), this refers to the newly created instance. 
In arrow functions, this is lexically bound — it inherits this from the enclosing scope and does not change based on invocation. 
Understanding this requires focusing on execution context, not definition location.  This dynamic behavior enables flexible, reusable code but is a common source of confusion.

-------------------------------------
Arrow functions do not have their own this binding. Instead, they lexically bind this, meaning they inherit the this value from the enclosing (parent) scope at the time of definition.

Example 1: printFullName as Arrow Function
const student = {
    fname: "raja",
    lname: "das",
    printFullName: () => {
        const deb = () => {
            console.log("nested arrow function ", this);
        }
        deb();
    }
}
student.printFullName();

printFullName is an arrow function, so it does not bind this to the student object. 
It inherits this from its enclosing scope, which is the global object (e.g., window in browsers). 
The nested arrow function deb also inherits the same this (global object).
Output: "nested arrow function [object Window]" (or global object). 
Example 2: x as Regular Function
const obj3 = {
    p: 5,
    x: function () {
        const y = () => {
            console.log("nested 2: ", this);
        }
        y();
    }
}
obj3.x();

x is a regular function, so this inside it refers to obj3 when called as obj3.x(). 
The nested arrow function y inherits this from x, so it also refers to obj3. 
Output: "nested 2: [object Object]" (i.e., obj3).