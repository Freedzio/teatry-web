import { createAction, ActionsUnion } from '../common/createAction';
import { PlayEntity } from './plays.state';

export enum PlaysActionNames {
    ADD_PLAY = 'ADD_PLAY',
    DELETE_PLAY = 'DELETE_PLAY',
    EDIT_PLAY = 'EDIT_PLAY',
};

export const PlaysActions = {
    addPlay: (play: PlayEntity) => createAction(PlaysActionNames.ADD_PLAY, { play }),
    deletePlay: (id: string) => createAction(PlaysActionNames.DELETE_PLAY, { id }),
    editPlay: (id: string, play: PlayEntity) => createAction(PlaysActionNames.EDIT_PLAY, { id, play })
};

export type PlaysAction = ActionsUnion<typeof PlaysActions>;