const { DB } = require('../../database');
const {usersCollection} = require('../../../constants');
const { validateKeysExist } = require('../../helpers');
const { ObjectID } = require('mongodb');

const userRequiredKeys = ['firstName', 'lastName', 'email', 'password'];

class UsersService {
    static get collection() {
        return DB.collection(usersCollection);
    }

    async create(user) {
        validateKeysExist(userRequiredKeys, user);
        await UsersService.collection.insertOne(user);
    }

    async findByEmail(email) {
        return await UsersService.collection.findOne({email});
    }

    async findById(id) {
        return await UsersService.collection.findOne({
            _id: new ObjectID(id)
        });
    }
}

module.exports = new UsersService();