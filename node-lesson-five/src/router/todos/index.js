const express = require('express');
const {Router} = express;
const authMiddleware = require('../../middleware/auth');
const todosService = require('../../modules/services/todos');

const todosRouter = Router();

todosRouter.use(authMiddleware);


todosRouter.post('/', async function(req, res) {
    const todo = req.body;
    console.info('Create todo got:', todo);
    try {
        await todosService.create(req.user._id, todo);
        res.sendStatus(201);
    } catch (e) {
        console.error('Todo not created', e);
        res.sendStatus(500);
    }
});

module.exports = {
    path: '/todos',
    router: todosRouter,
};