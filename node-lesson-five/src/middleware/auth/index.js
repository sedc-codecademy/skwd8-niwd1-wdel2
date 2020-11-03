const config = require("../../config");
const auth = require("../../router/auth");
const AuthService = require("../../modules/services/auth");
const users = require("../../modules/services/users");

const badCookieError = new Error('Bad cookie.');
const tokenError = new Error('Bad token.');
const userNotFoundError = new Error('User not found.');

module.exports = async function(req, res, next) {
    try {
        const authCookie = req.cookies[config.auth.authCookieName];
        if (!authCookie) throw badCookieError;
        const userId = await AuthService.verifyTokenAndGetUserId(authCookie);
        if (!userId) throw tokenError;
        res.user = await users.findById(userId);
        if (!res.user) throw userNotFoundError;
        next();
    } catch (e) {
        res.status(401);
        res.send(e.toString());
    }
};