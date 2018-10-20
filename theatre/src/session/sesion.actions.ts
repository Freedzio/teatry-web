import { createAction, ActionsUnion } from '../common/createAction';

export enum SessionActionNames {
    SESSION_SET = 'SESSION_SET',
    SESSION_CLEAR = 'SESSION_CLEAR',
    REGISTER_USER = 'REGISTER_USER'
};

export const SessionActions = {
    setSession: (email: string, password: string) => createAction(SessionActionNames.SESSION_SET, { email, password }),
    clearSession: () => createAction(SessionActionNames.SESSION_CLEAR),
    registerUser: (regEmail: string, regPassword: string) => createAction(SessionActionNames.REGISTER_USER, { regEmail, regPassword }),
};

export type SessionAction = ActionsUnion<typeof SessionActions>;