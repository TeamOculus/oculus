import {ActionReducer, Action} from '@ngrx/store';

export const ADD_USER = 'ADD_USER';


export const user: ActionReducer<any> = (state = {}, action: Action) => {
    switch(action.type){
        case ADD_USER:
            console.log(action);
            return {name: 'name1'};

        default:
            return state;
    }
}