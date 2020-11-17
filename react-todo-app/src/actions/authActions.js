import { config } from "../config";

export function logIn(credentials) {
    fetch(`${config.API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),
    });
}