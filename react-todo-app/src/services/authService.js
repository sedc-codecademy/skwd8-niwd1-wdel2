import { config } from "../config";
import { FetchService } from './fetchService';

class AuthService {
    async login(credentials) {
        const result = await FetchService.postRequest('login', credentials);
        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Bad credentials');
        }
    }

    async register(payload) {
        const result = await FetchService.postRequest('register', payload);
        if (result.ok) {
            return true;
        }
        else {
            throw new Error('Registration failed');
        }
    }

    async logout() {
        await FetchService.getRequest('logout');
    }
}

export default new AuthService();