const express = require('express');
const cors = require('cors');
const { Router } = express;
const auth = require('./auth');
const todos = require('./todos');

const mainRouter = Router();

mainRouter.use(cors());
mainRouter.use(express.json());
mainRouter.use(auth.path, auth.router);
mainRouter.use(todos.path, todos.router);

module.exports = {
    path: '/api',
    router: mainRouter,
};