import { config } from "../config";

async function postRequest(url, payload) {
    return await fetch(`${config.API_URL}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
}

class AuthService {
    async login(credentials) {
        const result = await postRequest('login', credentials);
        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Bad credentials');
        }
    }

    async register(payload) {
        const result = await postRequest('register', payload);
        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Registration failed');
        }
    }
}

export default new AuthService();