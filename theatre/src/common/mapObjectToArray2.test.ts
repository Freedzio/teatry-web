import { PlayEntity, PlaysState } from "src/plays/Plays.state";
import { mapObjectToArray2 } from './mapObjectToArray2';

describe('mapObjectToArray2', () => {


    it('it maps playsState to playEntity array', () => {
        var expectedValue: PlayEntity[] = [{
            title: 'test',
            theatre: 'fduap',
            category: 'fsdfdsaf',
            link: 'www.www.pl',
            description: "so cool"
        }]
        var inputValue: PlaysState = {
            ['klucz']: {
                title: 'test',
                theatre: 'fduap',
                category: 'fsdfdsaf',
                link: 'www.www.pl',
                description: "so cool"
            }
        }

        var resultValue = mapObjectToArray2(inputValue)

expect (resultValue).toEqual(expectedValue)

    })
})