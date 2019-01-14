export class TheatresState {
    [key: string]: TheatreEntity;
}

export interface TheatreEntity {
    id?: string,
    name: string,
    description: string,
    town: string,
    contact: string,
    link: string
}
