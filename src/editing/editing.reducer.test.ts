import { EditingState } from "./editing.state";
import { editingReducer } from './editing.reducer';
import { EditingActionNames } from './editing.actions';

describe('changeEditing', () => {

    it('changes the editing state', () => {
        var expectedValue: EditingState = {
            editing: true
        }

        var inputValue: EditingState = {
            editing: false
        }

        const changeEditingAction = {
            type: EditingActionNames.CHANGE_EDITING,
            editing: true
        }

        var result = editingReducer(inputValue, changeEditingAction)



        expect (result).toEqual(expectedValue)
    })

    it('changes the editing state', () => {
        var expectedValue: EditingState = {
            editing: false
        }

        var inputValue: EditingState = {
            editing: true
        }

        const changeEditingAction = {
            type: EditingActionNames.CHANGE_EDITING,
            editing: false
        }

        var result = editingReducer(inputValue, changeEditingAction)



        expect (result).toEqual(expectedValue)
    })
})

