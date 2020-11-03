const express = require('express');
const {Router} = express;
const usersService = require('../../modules/services/users');

const authRouter = Router();

// login, register, logout

authRouter.post('/register', async function(req, res){
    try {
        const { body } = req;
        console.info('Register endpoint req body:', body);
        await usersService.create(body);
        res.sendStatus(201);
    } catch (e) {
        console.info('Registration exception', e);
        res.sendStatus(400);
    }
});
authRouter.post('/login', async function(req, res){
    res.sendStatus(200);
});
authRouter.get('/logout', async function(req, res){
    res.sendStatus(200);
});

module.exports = {
    path: '/',
    router: authRouter,
};