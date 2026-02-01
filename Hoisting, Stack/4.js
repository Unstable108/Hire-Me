x= 30;
console.log(x);

let x=10;
console.log(x);

//fisrt in execution context, in memory phase x become undefied
//the issue with let, const is , it create temporal dead zone before it declration
//so though it is hoisted and in memory, but can't use
//so it will give refernce error