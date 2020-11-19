import { LOGOUT, LOG_IN, LOG_IN_ERROR, REGISRATION_FAILED, REGISTRATION_SUCCESSFUL } from "../actions/types";

const initialState = {
    loggedIn: false,
    registrationStatus: false,
    error: null,
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                loggedIn: true,
                error: null,
            };
        case LOG_IN_ERROR:
            return {
                ...state,
                loggedIn: false,
                error: action.payload,
            }
        case REGISRATION_FAILED:
            return {
                ...state,
                error: action.payload
            };
        case REGISTRATION_SUCCESSFUL:
            return {
                ...state,
                registrationStatus: true,
                error: null,
            };
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
            };
        default:
            return state;
    }
}