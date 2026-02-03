call(), apply(), and bind() are JavaScript methods used to explicitly set the this value for a function and control how it is invoked. 

call(): Invokes a function immediately with a specified this value and arguments passed individually.
Syntax: function.call(thisArg, arg1, arg2, ...) 
apply(): Invokes a function immediately with a specified this value and arguments passed as an array.
Syntax: function.apply(thisArg, [argsArray])
Note: The spread operator (...) has largely replaced apply() in modern JavaScript for passing array arguments. 
bind(): Returns a new function with the this value permanently set and optionally pre-filled arguments.  The function is not called immediately. 
Syntax: function.bind(thisArg, arg1, arg2, ...)
Key Differences:
Execution: call() and apply() execute the function immediately; bind() returns a new function for later use. 
Arguments: call() takes individual arguments; apply() takes an array of arguments. 
Use Cases:
Use bind() for creating reusable functions with fixed this context (e.g., event handlers, callbacks).
Use call() or apply() when you need to invoke a function immediately with a different this context.
apply() is useful when arguments are in an array, though ... spread is now preferred.