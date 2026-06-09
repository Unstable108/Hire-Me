async function getData()
{
    return 1;
}

function a(){
    console.log("A");
}

setTimeout(()=> console.log("B"),0);

//promise
getData().then(()=>console.log("I get the Data"));

a();

console.log("C");

Promise.resolve().then(()=> console.log("D"));