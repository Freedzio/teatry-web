import { EditingActionNames, EditingAction } from './editing.actions';
import { EditingState } from './editing.state';

export const editingReducer = (state: EditingState = {
    editing: false
}, action: EditingAction) => {
    switch (action.type) {

        case EditingActionNames.CHANGE_EDITING:
            return {
                ...state,
                editing: !state.editing
            }

        default:
            return state;
    }
}