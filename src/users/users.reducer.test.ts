import { UsersActionNames } from "./users.actions";
import { UserEntity } from './users.state';
import { usersReducer } from './users.reducer';

describe('users reducer', () => {
    it('add user', () => {
        const initialState = {};

        const addUserAction = {
            type: UsersActionNames.ADD_USER,
            user: {
                id: '12345-67890',
                email: 'test@test.pl',
                password: 'qwerqwer',
                role: 'user'
            } as UserEntity
        };

        const result = usersReducer(initialState, addUserAction as any);

        expect(result).toEqual({
            '12345-67890': {
                id: '12345-67890',
                email: 'test@test.pl',
                password: 'qwerqwer',
                role: 'user'
            }
        })
    });

    it('delete user', () => {
        const initialState = {
            '12345-67890': {
                id: '12345-67890',
                email: 'test@test.pl',
                password: 'qwerqwer',
                role: 'user'
            }
        }

        const deleteUserAction = {
            type: UsersActionNames.DELETE_USER,
            id: '12345-67890'
        }

        const result = usersReducer(initialState, deleteUserAction as any)

        expect(result).toEqual({})
    })
})