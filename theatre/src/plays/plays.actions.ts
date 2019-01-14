import { createAction, ActionsUnion } from '../common/createAction';
import { PlayEntity } from './Plays.state';

export enum PlaysActionNames {
    ADD_PLAY = 'ADD_PLAY',
    DELETE_PLAY = 'DELETE_PLAY ',
};

export const PlaysActions = {
        addPlay: (play: PlayEntity) => createAction(PlaysActionNames.ADD_PLAY, { play }),
        deletePlay: (id: string) => createAction(PlaysActionNames.DELETE_PLAY, { id }),
};

export type PlaysAction = ActionsUnion<typeof PlaysActions>;