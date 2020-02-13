import { createAction, ActionsUnion } from '../common/createAction';
import { TheatreEntity } from './theatres.state';

export enum TheatresActionNames {
    ADD_THEATRE = 'ADD_THEATRE'
};

export const TheatresActions = {
    addTheatre: (theatre: TheatreEntity) => createAction(TheatresActionNames.ADD_THEATRE, { theatre }),
};

export type TheatresAction = ActionsUnion<typeof TheatresActions>;