export function mapObjectToArray (state: any) {
    return Object.keys(state).map((key: string) => {
        return state[key]
    })

    
}