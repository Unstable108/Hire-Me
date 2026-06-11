/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

//we can't use setTimeout here, cause it will free the call stack to run other code

function sleep(milliseconds) {

    let p= new Promise(function(resolve){
        let startTime = new Date().getTime();

        //making the thread busy using while loop
        while(new Date().getTime() - startTime < milliseconds)
        {
            // will block the thread here
            // till total miliseconds does not pass
        }
        resolve();
    })
    return p; //returning the promise
}

module.exports = sleep;
