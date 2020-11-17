import { LOG_IN, LOG_IN_ERROR } from "../actions/types";

const initialState = {
    loggedIn: false,
    error: null,
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                loggedIn: true,
            };
        case LOG_IN_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}