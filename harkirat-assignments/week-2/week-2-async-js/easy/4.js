//using callback
const fs = require('fs');

const content = " new text using fswrite"

// write a file asynchronously  -> it overrides or create 
fs.writeFile('example.txt', content ,'utf8', (err) => {
  if (err) {
      console.error('Error reading file:', err);
          return;
    }
  console.log('written correctly');
});
