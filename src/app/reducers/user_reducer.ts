import {ActionReducer, Action} from '@ngrx/store';

export const ADD_USER = 'ADD_USER';


export const user: ActionReducer<any> = (state = {test:"test"}, action: Action) => {
    switch(action.type){
        case ADD_USER:
            console.log("from reducer add_user", action);
            const newState = Object.assign({}, state, action.payload);
            return newState;
        default:
            return state;
    }
}