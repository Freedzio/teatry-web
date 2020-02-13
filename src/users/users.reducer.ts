import { UsersState } from './users.state';
import { UsersActions, UsersActionNames } from './users.actions';

export const usersReducer = (state: UsersState = {
    'd40c5539-81e1-445c-ba2a-84a239442dc3': {
        id: 'd40c5539-81e1-445c-ba2a-84a239442dc3',
        email: 'admin@admin.pl',
        password: 'admin',
        role: 'Administrator'
    }

}, action: UsersActions) => {
    switch (action.type) {

        case UsersActionNames.ADD_USER:
            return {
                ...state,
                [action.user.id as string]: {
                    ...action.user
                }
            };

        case UsersActionNames.DELETE_USER:
            var newState = { ...state };
            delete newState[action.id as string];

            return {
                ...newState
            };

        default:
            return state;
    }
}