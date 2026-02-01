console.log("call stack with promise and settimeout");

setTimeout(()=>{
    console.log("SetTimeout code after 0 sec from Task Queue")
},0);

Promise.resolve().then(()=>{
    console.log("Promise come from MicroTask Queue")
})

console.log("end of the code");