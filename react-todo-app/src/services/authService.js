import { config } from "../config";

class AuthService {
    async login(credentials) {
        const result = await fetch(`${config.API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        });

        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Bad credentials');
        }
    }
}

export default new AuthService();