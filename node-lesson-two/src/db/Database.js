const userModel = require('../models/User');
const fs = require('fs');
const User = require('../models/User');
const fsPromises = fs.promises;

const absolutePath = `${__dirname}/users`;

class Database {
    async create(user) {
        user.id = Date.now();
        try {
            const userAsString = JSON.stringify(user);
            console.log('Opening the file...');
            const fileHandle = await fsPromises.open(`${absolutePath}/${user.id}.json`,
                fs.constants.O_CREAT | fs.constants.O_RDWR);
                console.log('File opened...');
            await fileHandle.writeFile(userAsString);
            console.log('Closing the file.');
            await fileHandle.close();
        }
        catch(e) {
            console.log('File open error', e);
        } 
    }

    async findUser(id) {
        try {
            const listing = await fsPromises.readdir(absolutePath);
            const foundFile = listing.find(e => e.toLowerCase().indexOf(`${id}`));
            if (foundFile) {
                const fileHandle = await fsPromises.open(`${absolutePath}/${foundFile}`,
                    fs.constants.O_RDONLY);
                const fileContents = (await fileHandle.readFile()).toString();
                const data = JSON.parse(fileContents);
                return new User(data);
            }
        }
        catch(e) {
            console.log('File reading error.');
        }
    }

    async deleteUser() {}
}

module.exports = new Database();