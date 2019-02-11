import { PlaysState } from 'src/plays/Plays.state';


export function mapObjectToArray2 (state: PlaysState) {
    return Object.keys(state).map((key: string) => {
        return state[key]
    })

    
}