const express = require('express');
const usersRouter = express.Router();

const firstMiddleware = function(req, res, next) {
    console.log('First /users middleware is executing!');
    const userLoggedIn = true;
    res.someData = 'TEST';
    if (userLoggedIn) {
        next();
    }
    else {
        res.sendStatus(401);
    }
    console.log('First /users middleware is done!');
};

const secondMiddleware = function(req, res, next) {
    console.log('Second /users middleware is executing!');
    console.log('Second middleware reads data:', res.someData);
    next();
    console.log('Second /users middleware is done!');
};

usersRouter.use([firstMiddleware, secondMiddleware]);

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