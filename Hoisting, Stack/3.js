console.log("Start of gec");


//setTimeout(callback, time kitne secord baad function ko run karna hai)
setTimeout(()=>{
    console.log("1 This is from task queue (settimeout")
},7000);

setTimeout(()=>{
    console.log("2 This is from task queue (settimeout")
},6000);

console.log("End of script");