export class UsersState {
    [key: string]: UserEntity;
}

export interface UserEntity {
    id?: string,
    email: string,
    password: string,
    role: string
}