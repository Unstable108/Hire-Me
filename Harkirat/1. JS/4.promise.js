//there is no callbacks
const fs = require("fs");

function readingFile()
{
    console.log("before reading file")
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err)
            {
                console.error("Error is ",err)
                return;
            }
            console.log("before resolve");
            resolve(data);
        })
    })
}

function withData(data)
{
    console.log(data);
}
let b = readingFile() //here b is the promise we get 
console.log(b); //instance of a promise

readingFile().then(withData);