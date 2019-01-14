export class PlaysState {
    [key: string]: PlayEntity;
}

export interface PlayEntity {
    id?: string,
    title: string,
    theatre: string,
    category: string,
    link: string,
    description: string
}
