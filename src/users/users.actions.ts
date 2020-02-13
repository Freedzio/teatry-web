import { UserEntity } from './users.state';
import { createAction, ActionsUnion } from '../common/createAction';

export enum UsersActionNames {
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER'
};

export const UsersActions = {
    addUser: (user: UserEntity) => createAction(UsersActionNames.ADD_USER, { user }),
    deleteUser: (id: string) => createAction(UsersActionNames.DELETE_USER, { id})
}

export type UsersActions = ActionsUnion<typeof UsersActions>;