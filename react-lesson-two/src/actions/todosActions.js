import { ADD_TODO } from './types';

// action creator function
export function addTodo(todoText) {
    // do anything here
    // ...
    const actualTodoText = todoText.toUpperCase();

    // But always return a new function at the end
    // ...which will be executed by Redux.
    // Due to redux-thunk being installed we can access dispatch
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: actualTodoText,
        });
    };
}