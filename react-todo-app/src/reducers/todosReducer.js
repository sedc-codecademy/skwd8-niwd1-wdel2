import { GET_ALL_TODOS } from "../actions/types";

const initialState = {
    list: [],
};

export default function todosReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_TODOS:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
}