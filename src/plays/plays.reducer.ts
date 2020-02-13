import { PlaysAction, PlaysActionNames } from "./plays.actions";
import { PlaysState } from './plays.state';

export const playsReducer = (state: PlaysState = {
    
}, action: PlaysAction) => {
    switch (action.type) {

        case PlaysActionNames.ADD_PLAY:
            return {
                ...state,
                [action.play.id as string]: {
                    ...action.play
                }
            };

        case PlaysActionNames.DELETE_PLAY:
            var newState = { ...state };
            delete newState[action.id as string];

            return {
                ...newState
            };

        case PlaysActionNames.EDIT_PLAY:
            var newState = { ...state };
            delete newState[action.id as string]
            return {
                ...newState,
                [action.play.id as string]: {
                    ...action.play
                }
            }


        default:
            return state;
    }
};
