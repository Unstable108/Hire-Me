//using promise -> correct modern way

const fs = require("fs").promises

async function readFile(filename,content){
    try {
        await fs.writeFile(filename,content,"utf-8");
        console.log("writing complted")
    } catch (error) {
        console.error("Error writing: ",error);
    }
}
readFile("readFilePromise.txt","writing via promise");