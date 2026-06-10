const fs= require("fs");
//file system

fs.readFile("a.txt","utf-8",function(err,data){
    if(err)
    {
        console.error("error reading file is: ",err);
        return;
    }
    console.log(data);
})