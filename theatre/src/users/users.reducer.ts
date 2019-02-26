import { UsersState } from './users.state';
import { UsersActions, UsersActionNames } from './users.actions';

export const usersReducer = (state: UsersState = {

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