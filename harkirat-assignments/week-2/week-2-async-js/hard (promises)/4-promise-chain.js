/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

/*
 * Promise Chaining
 * Javascript chaining is a process of nesting multiple asynchronous operations 
 * where the result of one operation is passed as input to another
*/


function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t*1000);
    })
}

async function calculateTime(t1, t2, t3) {
    let startTime = new Date().getTime();

    //wait to complete all the promise
    await Promise.all([wait1(t1),wait2(t2),wait3(t3)]);

    let timeTakeninPromiseALL = new Date().getTime() - startTime;

    startTime = new Date().getTime();

    //promise chaining
    wait1(t1).then()

    
}

module.exports = calculateTime;
