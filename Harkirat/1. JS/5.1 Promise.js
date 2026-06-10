function someAsyncFunction(){
    let p= new Promise(function(resolve){
        //do some async logic here
        resolve("Hi there");
    })
    //this function returns the promise
    return p;
}

function main(){
    someAsyncFunction().then((value)=>{
        console.log(value)
    });
}
main();