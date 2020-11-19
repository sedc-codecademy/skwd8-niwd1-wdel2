import { config } from "../config";

async function postRequest(url, payload) {
    return await fetch(`${config.API_URL}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials: 'include',
    });
}

async function getRequest(url) {
    return await fetch(`${config.API_URL}/${url}`, {
        method: 'GET',
        credentials: 'include',
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

    async logout() {
        await getRequest('logout');
    }
}

export default new AuthService();