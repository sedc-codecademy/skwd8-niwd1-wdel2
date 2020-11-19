import todosService from '../services/todosService';
import { GET_ALL_TODOS } from './types';

export function getAllTodos() {
    return async (dispatch) => {
        try {
            const todosList = await todosService.getAllTodos();
            dispatch({
                type: GET_ALL_TODOS,
                payload: todosList,
            });
        } catch (e) {
            
        }
    }
}

export function createTodo(payload) {
    return async (dispatch) => {
        try {
            await todosService.createTodo(payload);
            await getAllTodos()(dispatch);
        } catch (e) {
            
        }
    }
}