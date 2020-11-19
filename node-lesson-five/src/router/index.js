const express = require('express');
const cors = require('cors');
const { Router } = express;
const auth = require('./auth');
const todos = require('./todos');

const mainRouter = Router();

mainRouter.use(cors({
    // essential to allow CORS cookies to flow
    credentials: true,
    // do not preflightContinue to allow OPTIONS request with no cookies
    // preflightContinue: true,
    // essential to provide because of browser security limitations
    origin: 'http://my.app.test:3000',
}));
mainRouter.use(express.json());
mainRouter.use(auth.path, auth.router);
mainRouter.use(todos.path, todos.router);

module.exports = {
    path: '/api',
    router: mainRouter,
};