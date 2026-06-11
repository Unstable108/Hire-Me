// Import only the promise-based core module
const fs = require('fs').promises;

async function cleanAndSaveFile(sourcePath, destinationPath) {
    try {
        // 1. Read the file cleanly using await
        const data = await fs.readFile(sourcePath, 'utf8');
        
        // 2. Process the string data
        const cleanedContent = data.replace(/\s+/g, ' ').trim();
        console.log('Cleaned preview:', cleanedContent);
        
        // 3. Write out the clean content safely
        await fs.writeFile(destinationPath, cleanedContent, 'utf8');
        console.log('File successfully modified and saved.');
        
    } catch (err) {
        // Catch all errors (Read errors or Write errors) in one safe place
        console.error('An error occurred during processing:', err);
    }
}

// Execute cleanly
cleanAndSaveFile('1.txt', '1-new.txt');
