```
breakdown of how your mybind logic works:
```
1. Attaching to Function.prototype

``
Function.prototype.mybind = function(...args) { ... }
``

By adding mybind to Function.prototype, you ensure that every function in your JavaScript environment can access it, just like the native .bind(). 

2. Capturing the Function Context (this)

``
let obj = this;
``

Inside mybind, this refers to the function you are calling it on (in your case, printName). You store it in obj so you can call it later from within the returned function. 

3. Handling Initial Arguments

``
params = args.slice(1);
``

The first argument (args[0]) is the object you want to bind to (name). Everything after that (args.slice(1)) are the pre-filled arguments (like "Shillong"). 

4. Returning a New Function (Closure)

``
return function(...args2) { ... }
``

The bind method does not execute the function immediately; it returns a new function to be called later. This creates a closure, allowing the inner function to "remember" obj and params. 

5. Executing with apply (Argument Merging)

``
obj.apply(args[0], [...params, ...args2]);
``

args[0]: Sets the this context for the function call.

[...params, ...args2]: This is the most powerful part.

It combines the arguments passed during the binding phase ("Shillong") with the arguments passed during the execution phase ("Bhutan"). This technique is known as Function Currying. 


Final Output Explanation

When you run printMyName2("Bhutan"), it results in:
Deba Das, Shillong, Bhutan

this.firstName / this.lastName come from the name object.

hometown comes from the bound argument "Shillong".
state comes from the execution argument 