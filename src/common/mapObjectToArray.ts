export function mapObjectToArray (state: any) {
    return Object.keys(state).map((id: string) => {
        return state[id]
    })

    
}