import { createAction, ActionsUnion } from '../common/createAction';

export enum EditingActionNames {
    CHANGE_EDITING = 'CHANGE_EDITING'
};

export const EditingActions = {
    changeEditing: (editing: boolean) => createAction(EditingActionNames.CHANGE_EDITING, { editing })
};

export type EditingAction = ActionsUnion<typeof EditingActions>