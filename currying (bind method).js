let  multiply = function (x,y){
    console.log(x*y);
}

// the this keyword inside multiply.bind(this, 2) 
// refers to the Global Object.

// sing .bind() for Function Currying—preset arguments. 
// By passing 2, you are permanently setting x = 2
let multiplyByTwo = multiply.bind(this,2);

multiplyByTwo(5);

// we make a copy of multiply with the help of bind method
// and create more method out of it, 
// by preseting some arguments inside the function
//like how we preset the value of x =2


