const express = require('express');
const usersRouter = express.Router();

usersRouter.get('/:userId', function(req, res) {
    res.send('Hello GET!');
});
usersRouter.post('/', function(req, res) {
    res.send('Hello POST!');
});
usersRouter.put('/:userId', function(req, res) {
    res.send('Hello PUT!');
});

module.exports = {
    path: '/users',
    router: usersRouter,
};