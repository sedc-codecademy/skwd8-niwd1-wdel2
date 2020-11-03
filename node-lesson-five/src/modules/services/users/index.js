const { DB } = require('../../database');
const {usersCollection} = require('../../../constants');
const { validateKeysExist } = require('../../helpers');

const userRequiredKeys = ['firstName', 'lastName', 'email', 'password'];

class UsersService {
    static get collection() {
        return DB.collection(usersCollection);
    }

    async create(user) {
        validateKeysExist(userRequiredKeys, user);
        await UsersService.collection.insertOne(user);
    }

    async findByEmail(email) {}
    async findById(email) {}
    async update(user) {}
}

module.exports = new UsersService();