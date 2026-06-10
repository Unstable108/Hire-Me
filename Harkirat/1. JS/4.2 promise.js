let a = new Promise(function(resolve){
    resolve("foo");
}); 

function print(data){
    console.log(data);
}

a.then(print);