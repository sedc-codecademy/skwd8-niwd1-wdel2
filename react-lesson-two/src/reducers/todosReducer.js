import { ADD_TODO } from '../actions/types';

const initialState = {
    list: [
        {text: 'Buy milk', done: false},
        {text: 'Buy bread', done: false},
        {text: 'Buy socks', done: false},
    ],
};

// first arg: current state
// second arg: the action: {type, payload}
export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
        const newList = [...state.list];
        newList.push({text: action.payload, done: false});
        return {
            ...state,
            list: newList,
        };
        // NEVER FORGET TO RETURN A NEW OR EXISTING STATE FROM A REDUCER
        default: 
        return state;
    }
}