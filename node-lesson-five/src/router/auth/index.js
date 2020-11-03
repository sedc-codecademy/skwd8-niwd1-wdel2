const express = require('express');
const {Router} = express;

const authRouter = Router();

// login, register, logout

authRouter.post('/login', async function(req, res){
    res.sendStatus(200);
});
authRouter.post('/register', async function(req, res){
    res.sendStatus(200);
});
authRouter.get('/logout', async function(req, res){
    res.sendStatus(200);
});

module.exports = {
    path: '/',
    router: authRouter,
};