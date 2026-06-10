//passing a function an arguments to another function

const fs= require("fs");

//asynchronus function
function readingFile(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
    if(err)
    {
        console.error("error reading file is: ",err);
        return;
    }
    cb(data);
})
}

function printing(data){
    console.log(data)
}

readingFile(printing);

