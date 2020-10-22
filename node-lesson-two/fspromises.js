const fs = require('fs');
const fsPromises = fs.promises;
const fsConstants = fs.constants;

const fileContents = 'Hello world';

const writeToFile = async () => {
    try {
        // open the file
        const fileHandle = await fsPromises.open('./somefile.txt',
            fsConstants.O_CREAT | fsConstants.O_RDWR);
        // await fileHandle.truncate();
        // manipulate the contents
        // await fileHandle.writeFile(fileContents);
        const results = (await fileHandle.readFile()).toString();
        console.log('File read results:', results);
        // await fileHandle.appendFile(fileContents);
        // close the file
        await fileHandle.close();

    }
    catch(e) {
        console.log('An error occured!', e);
    }
};

writeToFile();