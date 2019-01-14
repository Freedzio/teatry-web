import { PlaysActionNames } from "./plays.actions";
import { PlayEntity } from './Plays.state';
import { playsReducer } from './plays.reducer';

describe('Plays reducer', () => {
    it('add play', () => {
        const initialState = {};

        const addPlayAction = {
            type: PlaysActionNames.ADD_PLAY,
            play: {
                id: '12345-67890',
                title: 'Test',
                theatre: 'test',
                category: 'test',
                description: 'test',
                link: 'http://'
            } as PlayEntity
        };

        const result = playsReducer(initialState, addPlayAction as any);

        expect(result).toEqual({
            '12345-67890': {
                id: '12345-67890',
                title: 'Test',
                theatre: 'test',
                category: 'test',
                description: 'test',
                link: 'http://'
            }
        });

    });

    it('delete play', () => {
        const initialState = {
            '12345-67890': {
                id: '12345-67890',
                title: 'Test',
                theatre: 'test',
                category: 'test',
                description: 'test',
                link: 'http://'
            }
        }

        const deletePlayAction = {
            type: PlaysActionNames.DELETE_PLAY,
            id: '12345-67890'
        }

        const result = playsReducer(initialState, deletePlayAction as any)

        expect(result).toEqual({})
    })
});