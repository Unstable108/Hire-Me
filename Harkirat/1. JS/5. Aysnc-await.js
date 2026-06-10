function someAsyncFunction(){
    let p= new Promise(function(resolve){
        //do some async logic here
        resolve("Hi there");
    })
    //this function returns the promise
    return p;
}


async function main() {
    let value = await someAsyncFunction();
    console.log(value);
}

main();
//uses callbacks/Promises under the hood 