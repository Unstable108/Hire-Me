const fs = require("fs");

fs.readFile("3-read-from-file.md","utf-8",(err,data)=>{
    if(err)
    {
        console.error("error reading file: ",err)
        return;
    }
    console.log(data);
})

const expensiveOperation = () => {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) { 
    sum += i;
  }
  console.log('Expensive operation done');
};

expensiveOperation();