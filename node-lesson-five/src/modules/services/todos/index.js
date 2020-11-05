/**
 * {
 *  _id: someid,
 *  owner: userId,
 *  lastModified: date,
 *  title: string,
 *  items: [
 *      {done: boolean, text: string}
 *  ]
 *  sharedWith: [],
 * }
 */

const { ObjectID } = require("mongodb");
const { validateKeysExist } = require("../../helpers");
const { DB } = require('../../database');
const {todosCollection} = require('../../../constants');

const todoRequiredKeys = ['owner', 'title', 'items', 'sharedWith', 'lastModified'];
const todoItemRequiredKeys = ['done', 'text'];

class TodosService {

    static get collection() {
        return DB.collection(todosCollection);
    }

    validateTodoObject(todo) {
        validateKeysExist(todoRequiredKeys, todo);
        for (const item of todo.items) {
            validateKeysExist(todoItemRequiredKeys, item);
        }
    }
    
    getDefaultTodoFields() {
        return {
            lastModified: new Date(),
            sharedWith: [],
            items: [],
        };
    }

    async create(ownerId, todoObj) {
        const todoDoc = {
            ...this.getDefaultTodoFields(),
            ...todoObj,
            owner: new ObjectID(ownerId),
        };
        this.validateTodoObject(todoDoc);
        await TodosService.collection.insertOne(todoDoc);
    }
    async update() {}
    async updateField() {}
    async share() {}
    async delete() {}

    async findById() {}
    async findAllByUserId() {}
    async findAllSharedWithUserId() {}
}

module.exports = new TodosService();