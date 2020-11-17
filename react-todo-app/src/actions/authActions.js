import { LOG_IN, LOG_IN_ERROR } from './types';
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