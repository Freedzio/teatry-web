import { combineReducers } from 'redux';
import { sessionReducer } from './session/session.reducer';
import { playsReducer } from './plays/plays.reducer';
import { theatresReducer } from './theatres/theatres.reducer';
import { usersReducer } from './users/users.reducer';
import { editingReducer } from './editing/editing.reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    plays: playsReducer,
    theatres: theatresReducer,
    users: usersReducer,
    editing: editingReducer
});

export default rootReducer;