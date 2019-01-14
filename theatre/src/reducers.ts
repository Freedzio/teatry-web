import { combineReducers } from 'redux';
import { sessionReducer } from './session/session.reducer';
import { playsReducer } from './plays/plays.reducer';
import { theatresReducer } from './theatres/theatres.reducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    plays: playsReducer,
    theatres: theatresReducer
});

export default rootReducer;