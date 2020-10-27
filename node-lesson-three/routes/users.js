const express = require('express');
const usersRouter = express.Router();

usersRouter.get('/:userId', function(req, res) {
    console.log('User ID GET.');
    res.send('Hello GET!');
});
usersRouter.post('/', function(req, res) {
    console.log('User ID POST.');
    res.send('Hello POST!');
});
usersRouter.put('/:userId', function(req, res) {
    console.log('User ID PUT.');
    res.send('Hello PUT!');
});

module.exports = {
    path: '/users',
    router: usersRouter,
};