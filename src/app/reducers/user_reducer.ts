import {ActionReducer, Action} from '@ngrx/store';

export const ADD_USER = 'ADD_USER';
export const LOG_OUT = 'LOG_OUT';


export const user: ActionReducer<any> = (state = {}, action: Action) => {
    switch (action.type) {
        case ADD_USER:
            // console.log("from reducer add_user", action);
            const newState = Object.assign({}, state, action.payload);
            return newState;
        case LOG_OUT:
            return {};
        default:
            return state;
    }
}