const STATE= {
    FULFILLED: "fullfilled",
    PENDING: "pending",
    REJECTED: "rejected",
}

class MyPromise{
   #value="";
    #state = STATE.PENDING;

    constructor(callback){
        callback(this.#onSuccess,this.#onFail);

    }

    //resolve 
    #onSuccess(){}

    //reject 
    #onFail(){}

    then(){

    }

    catch(){}
}

//creating an object using the Class
const myPromise = new MyPromise(function(resolve,response){
    console.log(1);
});
const promiseOG = new Promise(()=>{});

console.log(promiseOG);
console.log(myPromise);