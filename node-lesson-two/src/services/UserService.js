const userModel = require('../models/User');
const db = require('../db/Database');

class UserService {
    async createUser(user) {
        return await db.create(user);
    }
    async deleteUser(userId) {
        return await db.deleteUser(userId);
    }
    async findUser(user) {
        return await db.findUser();
    }
}

const userService = new UserService();

module.exports = userService;