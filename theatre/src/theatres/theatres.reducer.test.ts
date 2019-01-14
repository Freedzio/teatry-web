import { TheatresActionNames } from "./theatres.actions";
import { TheatreEntity } from './theatres.state';
import { theatresReducer } from './theatres.reducer';

describe('Theatres reducer', () => {
    it('add theatre', () => {
        const initialState = {};

        const addTheatreAction = {
            type: TheatresActionNames.ADD_THEATRE,
            theatre: {
                id: '12345-67890',
                name: 'Teatr Bajka',
                description: 'Lorem ipsum fairytale',
                town: 'Warszawa',
                contact: 'Lorem bacon',
                link: 'yadayada.com'
            } as TheatreEntity
        };

        const result = theatresReducer(initialState, addTheatreAction as any);

        expect(result).toEqual({
            '12345-67890': {
                id: '12345-67890',
                name: 'Teatr Bajka',
                description: 'Lorem ipsum fairytale',
                town: 'Warszawa',
                contact: 'Lorem bacon',
                link: 'yadayada.com'
            }
        });

    });
});