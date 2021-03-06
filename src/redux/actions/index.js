import { UPDATE_VALUE, SAVE_TODO, DELETE_VALUE } from "./actionTypes";

// todas las funciones retornan un objeto
export const updateValue = (value) => {
    return{
        type: UPDATE_VALUE,
        payload: value
    };
};

export const saveTodo = () => {
    return{
        type: SAVE_TODO,
        payload: '' // se manda el payload aunque no se necesite, solo se manda vacio por default
    };
};

export const deleteTodo = () => {
    return{
        type: DELETE_VALUE,
        payload: '' 
    };
};