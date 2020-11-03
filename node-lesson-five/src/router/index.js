const express = require('express');
const { Router } = express;
const auth = require('./auth');

const mainRouter = Router();

mainRouter.use(auth.path, auth.router);

module.exports = {
    path: '/api',
    router: mainRouter,
};