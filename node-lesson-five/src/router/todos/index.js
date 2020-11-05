const express = require('express');
const {Router} = express;
const authMiddleware = require('../../middleware/auth');

const todosRouter = Router();

todosRouter.use(authMiddleware);

todosRouter.get('/', async function(req, res) {
    console.info('User', req.user);
    res.send('Data');
});

module.exports = {
    path: '/todos',
    router: todosRouter,
};