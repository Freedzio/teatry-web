import { SessionAction, SessionActionNames } from "./sesion.actions";
import { SessionState } from './session.state';

export const sessionReducer = (state: SessionState = {
    email: null,
    password: null
}, action: SessionAction) => {
    switch (action.type) {
        case SessionActionNames.SESSION_SET:
            return {
                ...state,
                email: action.email,
                password: action.password
            }


        case SessionActionNames.SESSION_CLEAR:
            return {
                ...state,
                email: null,
                password: null
        }

        case SessionActionNames.REGISTER_USER:
            return {
                ...state,
                regEmail: action.regEmail,
                regPassword: action.regPassword
            }

        default:
            return state;
    }
};