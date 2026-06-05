// for(let i=0; i< 10; i++)
// {
//     setTimeout(()=> console.log(i),0);
// }

for(var i=0; i< 10; i++)
{
    setTimeout(()=> console.log(i),0);
}

// var = creates global scope, so at the end of loop i=10
//let = creates local scope, so each i 

//in var, the whole loop executes first, 
//then setTimeout runs