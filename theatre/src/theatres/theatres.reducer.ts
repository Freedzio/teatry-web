import { TheatresAction, TheatresActionNames } from "./theatres.actions";
import { TheatresState } from './theatres.state';

export const theatresReducer = (state: TheatresState = {}, action: TheatresAction) => {
    switch (action.type) {

        case TheatresActionNames.ADD_THEATRE:
            return {
                ...state,
                [action.theatre.id as string]: {
                    ...action.theatre
                }
            };

        default:
            return state;
    }
};