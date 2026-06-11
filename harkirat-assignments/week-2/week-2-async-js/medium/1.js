const fs = require("fs");
const fsPromis = require("fs").promises;

async function modify(fileName, content) {
  try {
    let new_content = content.replace(/\s+/g, " ").trim();
    console.log(new_content);
    await fsPromis.writeFile(fileName, new_content, "utf-8");
    console.log("modified");
  } catch (error) {
    console.error("error");
  }
}

fs.readFile("1.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("error reading file: ", err);
    return;
  }
  modify("1-new.txt", data);
});
