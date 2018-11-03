import { createAction, ActionsUnion } from '../common/createAction';

export enum SessionActionNames {
    SESSION_SET = 'SESSION_SET',
    SESSION_CLEAR = 'SESSION_CLEAR',
};

export const SessionActions = {
    setSession: (email: string, password: string, role: string) => createAction(SessionActionNames.SESSION_SET, { email, password, role }),
    clearSession: () => createAction(SessionActionNames.SESSION_CLEAR),
};

export type SessionAction = ActionsUnion<typeof SessionActions>;