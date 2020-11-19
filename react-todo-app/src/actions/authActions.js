import { LOG_IN, LOG_IN_ERROR, REGISRATION_FAILED, REGISTRATION_SUCCESSFUL } from './types';
import authService from "../services/authService";

export function logIn(credentials) {
    return async (dispatch) => {
        try {
            await authService.login(credentials);
            dispatch({
                type: LOG_IN
            });
        }
        catch(e) {
            dispatch({
                type: LOG_IN_ERROR,
                payload: 'Bad Credentials. Please try again.'
            });
        }
    };
}

export function register(payload) {
    return async (dispatch) => {
        try {
            await authService.register(payload);
            dispatch({
                type: REGISTRATION_SUCCESSFUL,
            });
        } catch (e) {
            dispatch({
                type: REGISRATION_FAILED,
                payload: 'Missing fields or duplicate email address.',
            })
        }
    };
}