const bcrypt = require('bcrypt');

class AuthService {
    static async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }
    static async comparePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }

    static async generateToken(user) {}
    static async verifyTokenAndGetUserId(token) {}
}

module.exports = AuthService