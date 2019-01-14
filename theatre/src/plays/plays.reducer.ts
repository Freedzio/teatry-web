import { PlaysAction, PlaysActionNames } from "./plays.actions";
import { PlaysState } from './Plays.state';

export const playsReducer = (state: PlaysState = {}, action: PlaysAction) => {
    switch (action.type) {

        case PlaysActionNames.ADD_PLAY:
            return {
                ...state,
                [action.play.id as string]: {
                    ...action.play
                }
            };

        case PlaysActionNames.DELETE_PLAY:
            const newState = { ...state };
            delete newState[action.id as string];

            return {
                ...newState
            };

        default:
            return state;
    }
};
